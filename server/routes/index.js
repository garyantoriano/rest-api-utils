const express = require('express');
const app = express();

app.use(require('./spotify-login'));


module.exports = app;