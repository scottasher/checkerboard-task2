const express = require('express');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const mongoose = require('mongoose');

const isProduction = process.env.NODE_ENV === 'production';
const app = express();

mongoose.connect(keys.mongoURI);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MODELS
require('./models/User')

//ROUTES
app.use(require('./routes'));

app.get('/ping', (req, res) => {
    res.send('pong');
});

const PORT = keys.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
