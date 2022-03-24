import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.route('/register').post(userController.registerUser);
router.route('/login').post(userController.loginUser);
router.route('/users').get(userController.getAllUsers);
router.route('/users/:userId').delete(userController.deleteUser);

export default router;
