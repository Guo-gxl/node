var mongoose = require('mongoose')

var newslist =new mongoose.Schema({
     id: { type:String,
          required:true
      },

     title: { type:String,
          required:true
      },
     pic: String,
     author_name: { type:String,
          required:true
      },
     date: { type:String,
          required:true
      },
     content:{ type:String,
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
module.exports = mongoose.model('newslist123',newslist,'newslist')