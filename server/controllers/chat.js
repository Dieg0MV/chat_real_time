
const req = require('express/lib/request');
const chatUser = require('../mongoDB/chatschem');
const connectdb = require('../mongoDB/conexionDB');
const res = require('express/lib/response');
const conect  = require('mongoose');

exports.obtener = ((req, res, nect) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    connectdb.then(db =>{
        chatUser.find({}).then(chatUser => {
            res.json(chatUser);
        });
    });
});