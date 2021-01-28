const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const { mongoose } = require('./configs/db');
var userController = require('./controllers/userController');

const PORT = 3000;
var app = express();




app.use(bodyParser.json());
// app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(PORT, () => console.log(`Server started at port : ${PORT}`));
app.use('/users', userController);




// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(bodyParser.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
