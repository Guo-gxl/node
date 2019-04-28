var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    name:{ type:String,
        required:true
    },
    pass: { type:String,
        required:true
    },
    sex:{
        type:String,
        required:true,
    },
    phone:{type:String,
        required:true,
    },
    nickName: { type:String,
        required:true
    },
    email:{ type:String,
        required:true
    },
    avatar:{
        type:String,
    }

})
module.exports = mongoose.model('User', userSchema)