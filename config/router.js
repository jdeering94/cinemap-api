import express from 'express';
import filmController from '../controllers/filmController.js';
import userController from '../controllers/userController.js';
import commentController from '../controllers/commentController.js';

const router = express.Router();

router
  .route('/film')
  .post(filmController.createFilm)
  .get(filmController.getAllFilms);

router
  .route('/film/:id')
  .put(filmController.updateFilm)
  .get(filmController.getFilmById)
  .delete(filmController.deleteFilm)
  .post(commentController.createComment);

router.route('/film/random/randomfilm').get(filmController.getRandomFilm);

router
  .route('/film/continent/:continent')
  .get(filmController.getAllFilmsByContinent);

router
  .route('/film/:id/comment/:commentId')
  .delete(commentController.deleteComment);

router.route('/register').post(userController.registerUser);
router.route('/login').post(userController.loginUser);
router.route('/users').get(userController.getAllUsers);
router.route('/users/:userId').delete(userController.deleteUser);

export default router;
