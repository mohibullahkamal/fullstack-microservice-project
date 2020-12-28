const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const app = express();

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true })

app.set('view engine', 'ejs');
app.use('/articles', articleRouter);
app.use(express.urlencoded({ extended: false })); //basically saying that we can use all form-fields as input... in 'new.ejs'... we can use it in 'articles.js' ...

// app.get('/', (req, res) => {
//   res.send('Hello Mohib...')
// })

app.get('/', (req, res) => {
  const articles = [{
    title: 'Test Article...',
    createdAt: new Date(),
    description: 'Test description...this is just a test...'
  },
  {
    title: 'Test Article...',
    createdAt: new Date(),
    description: 'Test description...this is just a test...'
  },
  {
    title: 'Test Article...',
    createdAt: new Date(),
    description: 'Test description...this is just a test...'
  }]

  res.render('articlesView/index', { 
    getArticles: articles
  })
})

app.listen(5000);