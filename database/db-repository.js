const client = require("./db");

const getMovies = (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3030");
  try {
    client.query("SELECT * FROM movies", (err, data) => {
      if (err) throw err;

      //todo make the result creation happen somewhere else
      res.status(200).json({
        //todo do i really need to be sending back an err message here?
        err: null,
        movies: data.rows,
      });
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      err: error.message,
      movies: null,
    });
  }
};

module.exports = { getMovies };
