const express = require('express');
const mongoose = require('mongoose');
const articleTable = require('./models/articleModel');
const articleRouter = require('./routes/articles');
const methodOverride = require('method-override')
const app = express();

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false })); //basically saying that we can use all form-fields as input... in 'new.ejs'... we can use it in 'articles.js' ...
app.use(methodOverride('_method'))

// app.get('/', (req, res) => {
//   res.send('Hello Mohib...')
// })

app.get('/', async (req, res) => {
  const getRealDataFromDB = await articleTable.find().sort({ createdAt: 'desc' });
  res.render('articlesView/index', { getFakeArticles: getRealDataFromDB })

  // const articlesFakeData = [{
  //   title: 'Test Article...',
  //   createdAt: new Date(),
  //   description: 'Test description...this is just a test...'
  // },
  // {
  //   title: 'Test Article...',
  //   createdAt: new Date(),
  //   description: 'Test description...this is just a test...'
  // }]
  // res.render('articlesView/index', { getFakeArticles: articlesFakeData })
})

app.use('/articles', articleRouter); //this must come after 'app.use(express.urlencoded(.....))'

app.listen(5000);