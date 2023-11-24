var express = require("express");
var router = express.Router();

const db = require("../database/db-repository");

/* GET movies listing. */
router.get("/", db.getMovies);

module.exports = router;
