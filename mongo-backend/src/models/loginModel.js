const mongoose = require('mongoose');

var userModel = mongoose.model('login', {
   name:     { type: String },
   email:    { type: String },
   password: { type: String }
});

module.exports = { userModel };