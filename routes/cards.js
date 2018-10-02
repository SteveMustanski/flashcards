const express = require('express');
// creates a new router that you can add routes to.
const router = express.Router();

//get the flat data file
// the es6 syntax of {cards} = is that same as cards = data.cards
const { data } = require('../data/flashcardData.json');
const { cards } = data;


router.get('/', (req, res) => {
  res.render('card', {
    prompt: cards[0].question,
    hint: cards[0].hint
  });
});

module.exports = router;