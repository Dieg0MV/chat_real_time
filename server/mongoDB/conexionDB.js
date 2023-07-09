const mongoose = require("mongoose");

mongoose.Promise = require('bluebird');

const url = 'localhost:8000/test'; //conexion a mongo

const conectd = mongoose.connect(url, { useNewUrlParser:true });

module.exports= conectd;