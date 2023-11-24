const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "coppola",
  port: 5432,
  password: "",
  database: "movie_list",
});

client.connect();
module.exports = client;

//https://www.makeuseof.com/crud-rest-api-postgresql-node-express/
