import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import { secret } from '../config/environment.js';

const secureRoute = async (req, res, next) => {
  try {
    const authToken = req.headers.authorization;

    if (!authToken || !authToken.startsWith('Bearer')) {
      return res.status(401).send({ message: 'Unauthorized' });
    }

    const token = authToken.replace('Bearer ', '');

    jwt.verify(token, secret, async (err, data) => {
      if (err) {
        return res.status(401).send({ message: 'Unauthorized' });
      }

      const user = await User.findByID(data.userId);

      if (!user) {
        return res.status(401).send({ message: 'Unathorized' });
      }
      req.currentUser = user;
      next();
    });
  } catch (err) {
    return res.status(401).send({ message: 'Unauthorized' });
  }
};

export default secureRoute;
