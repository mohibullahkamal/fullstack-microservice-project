const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const PORT = 3000;
var app = express();





app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
