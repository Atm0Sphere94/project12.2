const router = require('express').Router({ mergeParams: true });

const {
  getAllUsers, getUser, createUser,
} = require('../controllers/users');


router.get('/users/:id', getUser);
router.get('/users', getAllUsers);
router.post('/users', createUser);


module.exports = router;
