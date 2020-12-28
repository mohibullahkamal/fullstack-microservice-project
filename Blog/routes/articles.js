const express = require('express');
const router = express.Router();
const articleTable = require('./../models/articleModel')

router.get('/new', (req, res) => {
  res.render('articlesView/new')
});

router.post('/', async (req, res) => {
  const arTable = new articleTable({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown
  });
  try {
    article = await arTable.save();
    res.redirect(`/articles`)
  } catch (e) {
    console.log(e);
  }

})

module.exports = router;