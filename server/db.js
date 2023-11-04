const pgp = require("pg-promise")();

// const connectionString =
//   "postgres://postgres:shahzaib2054@localhost:5001/data.sql";

// const db = pgp(connectionString);
const db = pgp(process.env.DATABASE_URL);

module.exports = { db };
