const { Model } = require('objection');
const path = require('path');

class User extends Model {
  
  static get tableName () {
    return 'users'
  }
};

module.exports = User;
