const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const homeRoutes = require('./routes/home');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use(homeRoutes);

exports.app= functions.https.onRequest(app);
