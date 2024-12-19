const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/config')
const UserService = require('../services/UserService');

// Handle user registration

const getLoginPage = (req, res) => {
    try {
      // Render the login page EJS template
      res.render('common/login'); // Assuming the login page is stored under views/common/login.ejs
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const login = async (req, res) => {
    // console.log("Hello")
    const { email, password } = req.body;
  
    try {
        // Fetch user by email
        const user = await UserService.getUserByEmail(email);
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
  
        // Check if the password is valid
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
  
        // Generate token
        console.log("Logged In")
        const token = jwt.sign({ userId: user.id }, config.jwtSecret, { expiresIn: '2h' }); // 2 hours expiration
  
        // Send response
        res.json({
            access_token: token,
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
            }
        });
    } catch (error) {
        console.error('Authentication failed:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
  };
module.exports = {
    login,
    getLoginPage
};