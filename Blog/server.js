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
    createdAt: Date.now(),
    description: 'Test description...this is just a test...'
  }]

  res.render('index', { 
    getArticles: articles
  })
})


app.listen(5000);