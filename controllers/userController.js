import jwt from 'jsonwebtoken';
import { secret } from '../config/environment.js';
import User from '../models/user.js';

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

export default { getAllUsers, registerUser, deleteUser, loginUser };
