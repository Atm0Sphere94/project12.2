const router = require('express').Router();

const {
  getAllCards, postCard, deleteCard,
} = require('../controllers/cards');

router.get('/', getAllCards);
router.post('/cards', postCard);
router.delete('/cards/:cardId', deleteCard);

module.exports = router;
