import film from '../models/film.js';

const createComment = asyn (request, response, next) => {
  try {
    const filmToComment = await Film.findById(req.params.id);
    
    if (!filmToComment) {
      return response.status(404).send( { message: 'Film not found'} );
    }

    const newComment = {...request.body, createdBy: req.currentUser._id};
    
    filmToComment.comments.push(newComment);
    const savedFilm = await filmToComment.save();
    
    return response.status(201).json(savedFilm)
  } catch (error) {
    next(error);
  }
};

