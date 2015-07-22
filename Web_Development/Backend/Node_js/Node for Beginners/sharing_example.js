// index file
var post = require('./post');
var user = require('./user');

user.createUser();

// user file
exports.createUser = function () {
  // body...
  console.log("I'm creating a user!");
};

exports.deleteUser = function () {

};
// post file
