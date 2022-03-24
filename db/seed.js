import { connectToDb, disconnectFromDb } from './helpers.js';
import filmData from './data/filmData.js';
import userData from './data/userData.js';
import Film from '../models/film.js';
import User from '../models/user.js';

async function seed() {
  await connectToDb();
  console.log('connected to db');
  await Film.deleteMany({});
  await User.deleteMany({});
  const filmList = await Film.create(filmData);
  const userList = await User.create(userData);
  console.log('there are ' + filmList.length + ' films in the database');
  console.log('there are ' + userList.length + ' users in the database');
  await disconnectFromDb();
  console.log('disconnected');
}

seed();
