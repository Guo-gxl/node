var mongoose = require('mongoose')

var selftoSchema = new mongoose.Schema({
    Oddcom:{
        type:String,
        required:true
    },
    OddNumbers:{ type:String,
        required:true
    },
    phone:{type:String,
        required:true

    },
    name:{ type:String,
        required:true
    },
    nickName: { type:String,
        required:true
    },
    doname:{type:String,
        required:true

    },
    dophone:{ type:String,
        required:true
    },
    dolocal: { type:String,
        required:true
    },
    doneed: { type:String,
        required:true
    },
    feedback:{ 
        type:String
    },

})
module.exports = mongoose.model('selfto', selftoSchema)