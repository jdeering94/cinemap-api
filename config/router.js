import express from 'express';
import filmController from '../controllers/filmController.js';

const router = express.Router();

router
  .route('/film')
  .post(filmController.createFilm)
  .get(filmController.getAllFilms);

router
  .route('/film/:id')
  .put(filmController.updateFilm)
  .delete(filmController.deleteFilm);

router.route('/film/:continent').get(filmController.getAllFilmsByContinent);

export default router;
