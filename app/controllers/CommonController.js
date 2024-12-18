const path = require('path');

// Function to render the About page
exports.getHomePage = (req, res) => {
  res.render('common/homepage', { title: 'Home' });
};

exports.getAboutPage = (req, res) => {
  res.render('common/about', { title: 'About Us' });
};

// Function to render the Courses page
exports.getCoursesPage = (req, res) => {
  res.render('common/courses', { title: 'Our Courses' });
};

// Function to render the Contact Us page
exports.getContactusPage = (req, res) => {
  res.render('common/contactus', { title: 'Contact Us' });
};
