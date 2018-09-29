const express = require('express');

// Set up express server
const app = express();

// set the view engine to use pug
app.set('view engine', 'pug');

//create the root route
// params 1. location, 2. callback
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/hello', (req, res) => {
  res.send('<h1>Hello JS developer!</h1>');
});

// start server listening on port 3000
// params 1. port 2. callback
app.listen(3000, () => {
  console.log('The applicaiton is listening on port: 3000');
});

