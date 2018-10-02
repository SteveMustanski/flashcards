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

// import the routes from the routes directory
// when importing express looks for index.js in the folder
// so no need to specify
const routes = require('./routes');
// make the routes accessible to the app
app.use(routes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
})

// error handler has 4 params
// when error is passed to next, express looks for the first
// middleware function with 4 params
app.use((err, req, res, next) => {
res.locals.error = err;
res.status(err.status);
res.render('error');
});

// start server listening on port 3000
// params 1. port 2. callback
app.listen(3000, () => {
  console.log('The applicaiton is listening on port: 3000');
});

