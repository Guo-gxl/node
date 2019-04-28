var express = require('express')
var app = new express()
var router = require('./route/news')
var news = require('./route/users')
var self= require('./route/self')
var selfto =require('./route/selfto')
var find =require('./route/newslist')
var need=require('./route/need')
var url = "mongodb://47.103.14.235:27488/test"
var mongoose = require('mongoose')
var bodyParser = require('body-parser');  //解决图片上传问题！！！
app.use(bodyParser.json({limit: '10mb'})); // for parsing application/json  解决图片上传问题！！！
app.use(bodyParser.urlencoded({limit: '10mb', extended: true })); // for parsing application/x-www-form-urlencoded 解决图片上传问题！！！
mongoose.connect(url, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('db connect success')
    }
})
bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});

app.use('/news', router)
app.use('/users', news)
app.use('/self', self,selfto)
app.use('/find',find)
app.use('/need',need)

 // 将路由注册到/users的路径下

var port = process.env.PORT || 27499


app.listen(port)
console.log('app is listening on port: ' + port)
