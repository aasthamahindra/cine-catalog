const mongoose = require('mongoose');
const { connection } = require('../db/mongodb');

const movieData = new mongoose.Schema({
    name: String,
    genre: String,
    year: String,
    image: String,
});

const movieModel = connection.model('movies', movieData);

module.exports = {
    movieModel
}