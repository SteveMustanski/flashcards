const express = require('express');

// Set up express server
const app = express();

//create the root route
// params 1. location, 2. callback
app.get('/', (req, res) => {
  res.send('<h1>This is the default route, so like hello world or something</h1>');
});

app.get('/hello', (req, res) => {
  res.send('<h1>Hello JS developer!</h1>');
});

// start server listening on port 3000
// params 1. port 2. callback
app.listen(3000, () => {
  console.log('The applicaiton is listening on port: 3000');
});

