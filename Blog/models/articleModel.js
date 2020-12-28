const mongo = require('mongoose');

const articleSchema = new mongo.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  }, 
  markdown: {
    type: String,
    required: true
  }
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongo.model('ArticleTable', articleSchema)