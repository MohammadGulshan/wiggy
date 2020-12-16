const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db)
    .then((resp) => console.log('MongoDB Connected!!!' , resp))
    .catch(err => console.log('MongoDB Connection Error!!!' , err))