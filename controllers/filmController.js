import Film from '../models/film.js';

const createFilm = async (req, res, next) => {
  try {
    const film = await Film.create(req.body);
    return res.status(201).send({ message: 'Success!', film });
  } catch (e) {
    next(e);
  }
};

const getAllFilms = async (req, res, next) => {
  try {
    const film = await Film.find();
    return res.status(200).json(film);
  } catch (e) {
    next(e);
  }
};

const getAllFilmsByContinent = async (req, res, next) => {
  try {
    const film = await Film.find({ continent: req.params });
    return res.status(200).json(film);
  } catch (e) {
    next(e);
  }
};

const updateFilm = async (req, res, next) => {
  try {
    const film = await Film.findById(req.params.id);
    if (!film) {
      return res.status(404);
    }
    film.set(req.body);
    const savedFilm = await film.save();
    return res
      .status(200)
      .send({ message: 'Film was successfully updated!', savedFilm });
  } catch (e) {
    next(e);
  }
};

const deleteFilm = async (req, res, next) => {
  try {
    await Film.findByIdAndDelete(req.params.id);
    return res
      .status(404)
      .send({ message: 'Film successfully deleted!' + req.params.id });
  } catch (e) {
    next(e);
  }
};

export default {
  createFilm,
  getAllFilms,
  updateFilm,
  deleteFilm,
  getAllFilmsByContinent,
};
