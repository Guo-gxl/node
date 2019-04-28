var mongoose = require('mongoose')

var needlist =new mongoose.Schema({
     id: { type:String,
          required:true
      },

     title: { type:String,
          required:true
      },
     pic: String,
     date: { type:String,
          required:true
      },
      local:{type:String,
          required:true
      },
      need:{type:String,
        required:true
      },
      phone:{type:String,
        required:true
      },
      name:{type:String,
        required:true
      },
      comments: 
           [
           {
            name:{
                 type:String,
                 required:true
               },
             con:{
                  type:String,
                  required:true 
               },
               img:{
                    type:String,
                    required:true 
                 }
           }
          ] 
     
     


})
module.exports = mongoose.model('needlist',needlist,'needlist')