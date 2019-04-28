var express = require('express')
var router = express.Router()

var newsfind = require('../models/woshi')

router.route('/123').get((req, res) => {       //newslist数据库表单的获取
    newsfind.find({}, {"id":1,"pic":1,"date":1,"title":1,"author_name":1},(err, newslist) => {
        if (err) {
            console.log(err)
        }
        res.json(newslist)
     })//.sort({"id":1})
}),
router.route('/123/:id').post((req, res) => {        //处理前端评论的发表功能，插入数据库comments列表！的获取ID为文章ID
    newsfind.findOneAndUpdate
    (
      { id: req.params.id },
      { $push: {comments: [{  name:req.body.name, con:req.body.con ,img:req.body.img}]}}, //$push解决upload数组问题！！！！！！不再执行更新，改成插入！！
      {upsert: true,new:true}
    )
      .then(newsfind => res.json(newsfind))
      .catch(err => res.json(err));
    });
router.route('/1234/:id').post((req, res) => {          //处理前端评论页面的获取ID为文章ID
      newsfind.findOne
      (
        { id: req.params.id }
      )
        .then(newsfind => res.json(newsfind))           
        .catch(err => res.json(err));
      });


module.exports = router