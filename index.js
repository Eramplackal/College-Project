const express = require('express');
const bodyParser = require('body-parser');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('./config/config')
const cors = require('cors');
const path = require('path');
const commonRoutes = require('./backend/routes/commonRoutes'); 
const authRoutes = require('./backend/routes/authRoutes'); 
const sequelize = require('./config/sequelize');
const UserService = require('./backend/services/UserService');



const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.options('*', cors());

const PORT = 4000; 

app.use('/', commonRoutes); 
app.get('/auth/login',(req,res)=>{
  res.render('common/login');
})
app.post('/auth/login',async (req,res)=>{
  console.log(req.body)
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({message: 'Please enter all the fields'})
    
  }
    
      try {
          // Fetch user by email
          const user = await UserService.getUserByEmail(email);
          if (!user) {
              return res.status(401).json({ message: 'Invalid email or password' });
          }
          
          // Check if the password is valid
          const isPasswordValid = await bcryptjs.compare(password, user.password);
          console.log(isPasswordValid)
          if (!isPasswordValid) {
              return res.status(401).json({ message: 'Invalid email or password' });
          }
    
          // Generate token
          const token = jwt.sign({ userId: user.id }, config.jwtSecret, { expiresIn: '2h' }); // 2 hours expiration
    
          //Send response
          res.json({
              token: token,
              token_type: 'bearer',
              user_name: user.name,
              expires_in: 7200, // Token expiration in seconds (2 hours)
              data: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  qualification: user.qualification, // Add this if it exists in the user model
                  email_verified_at: user.email_verified_at, // Add this if it exists in the user model
                  created_at: user.created_at,
                  updated_at: user.updated_at
              },
              message: 'Login Successful'
          });
      } catch (error) {
          console.error('Authentication failed:', error);
          res.status(500).json({ message: 'Internal server error' });
      }
}); 

app.get('/dashboard',(req,res)=>{
  res.render('admin/welcome')
})

const startServer = async () => {
  try {
    await sequelize.authenticate(); 
    console.log('Database connected successfully.');
    await sequelize.sync(); 

    // Start Express server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();

