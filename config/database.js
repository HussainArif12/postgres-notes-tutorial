const { Pool } = require("pg");
require("dotenv").config(); //get environment vars.
const connectionString = process.env.PSQL_CONNECTION;
const pool = new Pool({
  connectionString,
});

//export query function
module.exports = {
  query: (text, params) => pool.query(text, params),
};
