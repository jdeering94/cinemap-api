import dotenv from 'dotenv';
dotenv.config();

export const port = process.env.PORT || 3000;
export const dbUrl = process.env.DBURL;
export const secret = process.env.SECRET || 'skittles';
