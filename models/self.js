var mongoose = require('mongoose')

var selfSchema = new mongoose.Schema({
    citydata:{ type:String,
        required:true
    },
    tolocal:{type:String,
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
    Oddcom:{
        type:String
    },
    OddNumbers:{ 
        type:String
    },
    feedback:{ 
        type:String
    },
    

})
module.exports = mongoose.model('self', selfSchema)