"use strict";

const path = require("path");

const BASE_PATH = path.join(__dirname, "app", "db");

module.exports = {
  development: {
    client: "pg",
    connection: "postgres://postgres:123@localhost:5432/ecommerce",
    migrations: {
      directory: path.join(BASE_PATH, "migrations"),
    },
    seeds: {
      directory: path.join(BASE_PATH, "seeds"),
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(BASE_PATH, "migrations"),
    },
    seeds: {
      directory: path.join(BASE_PATH, "seeds"),
    },
  },
};
