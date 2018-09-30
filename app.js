const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Set up express server
const app = express();

// set up urlencode parser and turn of extended option
app.use(bodyParser.urlencoded({ extended: false }));

// set up cookie-parser
app.use(cookieParser());

// set the view engine to use pug
app.set('view engine', 'pug');

//create the root route
// params 1. location, 2. callback
app.get('/', (req, res) => {
  const name = req.cookies.username;
// check if name is populated, if not redirect to hello template
  if (name) {
    res.render('index', { name: name });
  } else {
    res.redirect('/hello');
  }
});

app.get('/cards', (req, res) => {
  res.render('card', { prompt: "Who is buried in Grants tomb?", hint: "Whose tomb is it?" });
});

app.get('/hello', (req, res) => {
// read for name in cookie
  const name = req.cookies.username;
// if name is present, redirect to '/' else render hello template
  if (name) {
    res.redirect('/');
  } else {
    res.render('hello');

  }
});

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');

});

app.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');

});

// start server listening on port 3000
// params 1. port 2. callback
app.listen(3000, () => {
  console.log('The applicaiton is listening on port: 3000');
});

