const mongoose = require('mongoose');

var itemFormModel = mongoose.model('item', {
   itemId:   { type: String },
   itemName: { type: String }
});

module.exports = { itemFormModel };