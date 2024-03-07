import pgPromise from 'pg-promise';
import dotenv from 'dotenv';

const pgp = pgPromise();
dotenv.config();

const {
    DB_USER,
    DB_PASSWORD, // add for production
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
  } = process.env;

  const connection = `postgres://${DB_USER}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
  const db = pgp(connection)

export default db