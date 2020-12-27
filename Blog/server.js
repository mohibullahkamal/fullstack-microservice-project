const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();

app.set('view engine', 'ejs');
app.use('/articles', articleRouter);

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