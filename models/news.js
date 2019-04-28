var mongoose = require('mongoose')

var newsSchema =new mongoose.Schema({
    id: String,
    img: String,
})
module.exports = mongoose.model('news',newsSchema)