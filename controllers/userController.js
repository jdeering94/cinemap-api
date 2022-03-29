import jwt from 'jsonwebtoken';
import { secret } from '../config/environment.js';
import User from '../models/user.js';
import Film from '../models/film.js';

const registerUser = async (req, res, next) => {
  if (req.body.password !== req.body.passwordConfirmation) {
    return res.status(422).json({ message: 'passwords do not match' });
  } else {
    try {
      const newUser = await User.create(req.body);
      return res.status(200).json(newUser);
    } catch (err) {
      next(err);
    }
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const getCurrentUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.currentUser._id);
    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ message: 'Successfully deleted User ' + req.params.id });
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: 'Email not found' });
    }

    const isValidPassword = await user.validatePassword(req.body.password);
    if (!isValidPassword) {
      return res.status(404).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin },
      secret,
      { expiresIn: '4h' }
    );

    return res.status(200).json({ token, message: 'Login successful' });
  } catch (err) {
    next(err);
  }
};

const addLikedFilm = async (req, res, next) => {
  try {
    const user = await User.findById(req.currentUser._id);

    if (user.likedFilms.includes(req.params.id)) {
      return res
        .status(400)
        .json({ message: 'You have already liked this film' });
    }
    user.likedFilms.push(req.params.id);
    await user.save({ validateModifiedOnly: true });

    const film = await Film.findById(req.params.id);
    film.likedBy.push(req.currentUser._id);
    await film.save({ validateModifiedOnly: true });

    return res.status(200).json(film);
  } catch (err) {
    next(err);
  }
};

const removeLikedFilm = async (req, res, next) => {
  try {
    const user = await User.findById(req.currentUser._id);
    if (user.likedFilms.includes(req.params.id)) {
      user.likedFilms.pull(req.params.id);
      await user.save({ validateModifiedOnly: true });

      const film = await Film.findById(req.params.id);
      film.likedBy.pull(req.currentUser._id);
      await film.save({ validateModifiedOnly: true });

      return res.status(200).json(film);
    } else {
      return res.status(400).json({ message: 'User has not liked this yet' });
    }
  } catch (err) {
    next(err);
  }
};

const getAllLikedFilmsForUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.currentUser._id).populate(
      'likedFilms'
    );
    return res.status(200).json(user.likedFilms);
  } catch (e) {
    next(e);
  }
};

export default {
  getAllUsers,
  registerUser,
  deleteUser,
  loginUser,
  addLikedFilm,
  removeLikedFilm,
  getAllLikedFilmsForUser,
  getCurrentUserById,
};
