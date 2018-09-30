const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Set up express server
const app = express();

// set up urlencode parser and turn of extended option
app.use(bodyParser.urlencoded({extended: false}));

// set up cookie-parser
app.use(cookieParser());

// set the view engine to use pug
app.set('view engine', 'pug');

//create the root route
// params 1. location, 2. callback
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cards', (req, res) => {
  res.render('card', {prompt: "Who is buried in Grants tomb?", hint: "Whose tomb is it?"});
});

app.get('/hello', (req, res) => {
  res.render('hello', {name: req.cookies.username});
});

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.render('hello', {name: req.body.username});

});

// start server listening on port 3000
// params 1. port 2. callback
app.listen(3000, () => {
  console.log('The applicaiton is listening on port: 3000');
});

