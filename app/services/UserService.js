const User  = require('../models/User');

class UserService {
    static async getUserByEmail(email) {
        try {
          const user = await User.findOne({ where: { email } });
          return user;
        } catch (error) {
          throw new Error('Failed to fetch user');
        }
      }
}

module.exports = UserService;