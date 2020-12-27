const express = require('express');
const articleRouter = require('./routes/articles')
const app = express();

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);


// app.get('/', (req, res) => {
//   res.send('Hello Mohib...')
// })

app.get('/', (req, res) => {
  // res.render('index', { 
  //   text: 'Hello... this is "text" variable...'
  // })
  res.render('index', { 
    getAllArticles: articleRouter
  })
})


app.listen(5000);