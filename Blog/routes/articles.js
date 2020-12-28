const express = require('express');
const router = express.Router();
const articleTable = require('./../models/articleModel')

router.get('/new', (req, res) => {
  res.render('articlesView/new')
});

router.post('/', (req, res) => {
  const article = new articleTable({
    
  })
})

module.exports = router;