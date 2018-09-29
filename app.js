const express = require('express');

// Set up express server
const app = express();

//create the root route
// params 1. location, 2. callback
app.get('/', (request, response) => {
  response.send('This is the default route, so like hello world or something');
});

// start server listening on port 3000
app.listen(3000);

