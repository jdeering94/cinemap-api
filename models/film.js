import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 300 },
  rating: { type: Number, required: true, min: 1, max: 10 },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  username: { type: String, required: true },
});

const filmSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    country: [{ type: String, required: true }],
    continent: { type: String, required: true },
    language: [{ type: String, required: true }],
    runTime: { type: Number, required: true },
    director: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    comments: [commentSchema],
    likedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

export default mongoose.model('Film', filmSchema);
