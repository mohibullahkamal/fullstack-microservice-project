const mongoose = require('mongoose');

var userModel = mongoose.model('user', {
   name:     { type: String },
   email:    { type: String },
   comment:  { type: String }
});

module.exports = { userModel };