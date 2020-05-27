const User = require('../models/user');
const NotFoundError = require('../errors/NotFoundError');

// GET /users — возвращает всех пользователей
const getAllUsers = (async (req, res, next) => {
  try {
    const users = await User.find({})
      .sort('name');
    res.status(200).send({ data: users });
  } catch (err) {
    next(err);
  }
});

// GET /users/:userId - возвращает пользователя по _id
const getUser = (async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      throw new NotFoundError('Нет пользователя с таким ID');
    }
    res.status(200).send({ data: user });
  } catch (err) {
    next(err);
  }
});

// POST /users — создаёт пользователя
const createUser = (async (req, res, next) => {
  try {
    const { name, about, avatar } = req.body;
    const user = await User.create({
      name, about, avatar,
    });
    return res.status(201).send({
      data: {
        name: user.name,
        about: user.about,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    return next(error);
  }
});


module.exports = {
  getAllUsers,
  getUser,
  createUser,
};
