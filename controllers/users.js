const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const User = require('../models/user');
const NotFoundError = require('../errors/NotFoundError');

const { JWT_SECRET } = require('../config');


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
    const {
      name, about, avatar, email, password,
    } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name, about, avatar, email, password: hash,
    });
    return res.status(201).send({
      data: {
        _id: user._id,
        name: user.name,
        about: user.about,
        avatar: user.avatar,
        email: user.email,
      },
    });
  } catch (error) {
    return next(error);
  }
});

const login = (async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findUserByEmail(email, password);
    const token = await jwt.sign(
      { _id: user._id },
      JWT_SECRET,
      { expiresIn: '7d' },
    );
    res.cookie('jwt', token, JWT_SECRET, {
      maxAge: '7d',
      httpOnly: true,
      secure: true,
      sameSite: true,
    });
    res.status(200).send({ token });
  } catch (err) {
    next(new UnauthorizedError(err.message));
  }
});


module.exports = {
  getAllUsers,
  getUser,
  createUser,
  login,
};
