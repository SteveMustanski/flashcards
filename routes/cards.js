const express = require('express');
// creates a new router that you can add routes to.
const router = express.Router();

//get the flat data file
// the es6 syntax of {cards} = is that same as cards = data.cards
const { data } = require('../data/flashcardData.json');
const { cards } = data;


router.get('/:id', (req, res) => {
  const {side} = req.query;
  const {id} = req.params;
  const text = cards[id][side];
  const {hint} = cards[id];
  const templateData = {text};
// if the side being requested = question, show the hint
  if (side === 'question') {
    templateData.hint = hint;
  }

  res.render('card', templateData);
});

module.exports = router;