import express from 'express';
import filmController from '../controllers/filmController.js';
import userController from '../controllers/userController.js';

const router = express.Router();

router
  .route('/film')
  .post(filmController.createFilm)
  .get(filmController.getAllFilms);

router
  .route('/film/:id')
  .put(filmController.updateFilm)
  .get(filmController.getFilmById)
  .delete(filmController.deleteFilm);

router
  .route('/film/continent/:continent')
  .get(filmController.getAllFilmsByContinent);

router.route('/register').post(userController.registerUser);
router.route('/login').post(userController.loginUser);
router.route('/users').get(userController.getAllUsers);
router.route('/users/:userId').delete(userController.deleteUser);

export default router;
