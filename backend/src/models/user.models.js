const mongoose = require('mongoose');
const { connection } = require('../db/mongodb');

const userData = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: String,
});

const userModel = connection.model('users', userData);

module.exports = {
    userModel
}