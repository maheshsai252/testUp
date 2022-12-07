const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");

db.event = require("./event.model")

db.registration = require('./registration.model')

module.exports = db;