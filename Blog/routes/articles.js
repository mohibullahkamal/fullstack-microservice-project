const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
  res.render('articlesView/new')
});

module.exports = router;