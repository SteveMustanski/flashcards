const express = require('express');
// creates a new router that you can add routes to.
const router = express.Router();

router.get('/', (req, res) => {
  res.render('card', { prompt: "Who is buried in Grants tomb?", hint: "Whose tomb is it?" });
});

module.exports = router;