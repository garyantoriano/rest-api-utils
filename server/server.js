require('./config/config');
var cors = require('cors');
const express = require('express');
// const path = require('path');

const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// Enable cors
app.use(cors());

// Enable public folder
// app.use(express.static(path.resolve(__dirname, '../public')));

// Routes global configurations
app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {
    console.log('Listening at port: ', process.env.PORT);
});