const { v4 } = require('uuid');

class User {
  constructor ({ email, password }) {
    this.id = v4();
    this.email = email;
    this.password = password;
  }
}

module.exports = User;