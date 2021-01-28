const mongoose = require('mongoose');

var loginModel = mongoose.model('login', {
   name:     { type: String },
   email:    { type: String },
   password: { type: String }
});

module.exports = { loginModel };
