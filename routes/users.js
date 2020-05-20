const router = require('express').Router();

const {
  getAllUsers, getUser,
} = require('../controllers/users');

router.get('/:id', getUser);
router.get('/users', getAllUsers);

module.exports = router;
