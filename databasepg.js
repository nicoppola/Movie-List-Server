const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "coppola",
  port: 5432,
  password: "",
  database: "movie_list",
});

client.connect();

client.query(`Select * from movies`, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});
