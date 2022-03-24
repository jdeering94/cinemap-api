import mongoose from 'mongoose';
import { dbUrl } from '../config/environment.js';

export function connectToDb() {
  return mongoose.connect(dbUrl);
}

export function disconnectFromDb() {
  if (mongoose.connection.readyState !== 0) {
    return mongoose.disconnect();
  }
}
