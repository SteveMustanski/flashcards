const express = require('express');
// creates a new router that you can add routes to.
const router = express.Router();

//create the root route
// params 1. location, 2. callback
router.get('/', (req, res) => {
  const name = req.cookies.username;
// check if name is populated, if not redirect to hello template
  if (name) {
    res.render('index', { name: name });
  } else {
    res.redirect('/hello');
  }
});

router.get('/hello', (req, res) => {
// read for name in cookie
  const name = req.cookies.username;
// if name is present, redirect to '/' else render hello template
  if (name) {
    res.redirect('/');
  } else {
    res.render('hello');

  }
});

router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');

});

router.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
});

// export the router
module.exports = router;