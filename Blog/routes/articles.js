const express = require('express');
const router = express.Router();
const articleTable = require('./../models/articleModel')

router.get('/new', (req, res) => {
  res.render('articlesView/new', { withPreviouslyEnteredArticleData: new articleTable() })
});

router.get('/:id', (req, res) => {
  res.send(req.params.id)
})

router.post('/', async (req, res) => {
  let arTable = new articleTable({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown
  });
  try {
    arTable = await arTable.save();
    res.redirect(`/articlesView/${arTable.id}`)
  } catch (e) {
    console.log(e);
    res.render('articlesView/new', { withPreviouslyEnteredArticleData: arTable})
  }
})

module.exports = router;