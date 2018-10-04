const express = require('express');
// creates a new router that you can add routes to.
const router = express.Router();

//get the flat data file
// the es6 syntax of {cards} = is that same as cards = data.cards
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/', (req, res) => {
  const numberOfCards = cards.length;
  const flashcardId = Math.floor(Math.random() * numberOfCards);
  res.redirect(`/cards/${flashcardId}`);
});

router.get('/:id', (req, res) => {
  const {side} = req.query;
  const {id} = req.params;

// return the redirect to stop the execution of the rest of the routes
  if (!side) {
    return res.redirect(`/cards/${id}?side=question`);
  }
  const text = cards[id][side];
  const {hint} = cards[id];
  const templateData = {id, text, side};

// if the side being requested = question, show the hint
  if (side === 'question') {
    templateData.hint = hint;
    templateData.sideToShow = 'answer';
    templateData.sideToShowDisplay = 'Answer';
  } else if (side === 'answer') {
    templateData.sideToShow = 'question';
    templateData.sideToShowDisplay = 'Question';
  }

  res.render('card', templateData);
});

module.exports = router;