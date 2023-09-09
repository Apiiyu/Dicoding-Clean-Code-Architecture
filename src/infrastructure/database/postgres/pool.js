/* eslint-disable no-undef */
const { Pool } = require("pg");
require("dotenv").config();

const testConfig = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
};

const pool =
  process.env.NODE_ENV === "test" ? new Pool(testConfig) : new Pool();

module.exports = pool;
