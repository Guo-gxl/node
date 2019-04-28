var express = require('express')
var router = express.Router()

var self = require('../models/selfto')
var ObjectId = require('mongodb').ObjectID

router.route('/selfto').post((req, res) => {
    self.create(
        {   
            Oddcom:req.body.Oddcom,
            OddNumbers:req.body.OddNumbers,
            phone:req.body.phone,
            name:req.body.name,
            nickName:req.body.nickName,
            email:req.body.email,
            dophone:req.body.dophone,
            doname:req.body.doname,
            dolocal:req.body.dolocal,
            doneed:req.body.doneed,
            
            }
        , (err, self) => {
        if (err) {
            console.log(err)
        }
        res.json(self)
    })
})
router.route('/showself').post((req, res) => {       //newslist数据库表单的获取
    self.find({
        name:req.body.name

    },(err, self) => {
        if (err) {
            console.log(err)
        }
        res.json(self)
     })//.sort({"id":1})
}),
router.route('/delself').post((req, res) => {       //newslist数据库表单的获取
    self.remove({
        _id:ObjectId(req.body._id)

    },(err, self) => {
        if (err) {
            console.log(err)
        }
        res.json(self)
     })//.sort({"id":1})
}),
router.route('/feedbackto').post((req, res) => {        //处理前端评论的发表功能，插入数据库comments列表！的获取ID为文章ID
    self.findOneAndUpdate
    (
      { OddNumbers:req.body.OddNumbers},
      { $set: {feedback:req.body.feedback}}, //$push解决upload数组问题！！！！！！不再执行更新，改成插入！！
      {upsert: true,new:true}
    )
      .then(user => res.json(user))
      .catch(err => res.json(err));
    });
module.exports = router