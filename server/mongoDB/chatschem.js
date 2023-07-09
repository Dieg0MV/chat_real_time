const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/MyBD');


let user = mongoose.Schema({
    nameusr:{ 
        type:String,
        required:true
    },
    pasword:{
        type:String,
        required:true
    }
}) 

const User = mongoose.model('User', user);

let msm = mongoose.Schema({
    remitent:{
        usr:mongoose.Types.ObjectId,
        ref:User.nameusr
    },
    content:{type: String
    },
    hora: {
        time: Date 
    }
})


const Chat = mongoose.model('Mensagge', msm);


module.exports = Chat;
module.exports = User;