const User = require('../../models/user');

module.exports = (_, args, user) => {
  return User.query();
};