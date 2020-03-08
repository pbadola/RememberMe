const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Any time we hit any request
//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const personsRoute = require('./routes/persons');
app.use('/persons', personsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, () => 
    console.log('connected to rememberme\'s database')
);

//Start listening to the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
