import Film from '../models/film.js';

const createComment = async (request, response, next) => {
  try {
    const filmToComment = await Film.findById(request.params.id);

    if (!filmToComment) {
      return response.status(404).send({ message: 'Film not found' });
    }

    const newComment = { ...request.body };

    filmToComment.comments.push(newComment);
    const savedFilm = await filmToComment.save();

    return response.status(201).json(savedFilm);
  } catch (error) {
    next(error);
  }
};

export default { createComment };
