const express = require('express')
const cors = require('cors');
const routes = require('./routes');
const app = express();
const bodyParser = require('body-parser');
const { handleError, ErrorHandler } = require('./helpers/error')

app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);
app.use((err, req, res, next) => {
  handleError(err, res);
});


module.exports = app