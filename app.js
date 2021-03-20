const express = require('express')
const cors = require('cors');
const routes = require('./routes');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);

module.exports = app