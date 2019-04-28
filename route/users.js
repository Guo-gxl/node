var express = require('express')
var router = express.Router()

var User = require('../models/user')
var ObjectId = require('mongodb').ObjectID

router.route('/validate').post((req, res) => {
    User.create(
        {
            name: req.body.name,
             pass: req.body.pass,
             nickName:req.body.nickName,
             email:req.body.email,
             phone:req.body.phone,
             sex:req.body.sex
            }
        , (err, user) => {
        if (err) {
            console.log(err)
        }
        res.json(user)
    })
})
router.route('/validate1').post((req, res) => {
    User.findOne(
        {
            name: req.body.name,
             pass: req.body.pass
            }
        , (err, user) => {
        if (err) {
            console.log(err)
        }
        res.json(user)
    })
}),
router.route('/main').post((req, res) => {
    User.findOne(
        {
            name:req.body.name,
            nickName:req.body.nickName
            
            }
        , (err, user) => {
        if (err) {
            console.log(err)
        }
        res.json(user)
    })
}),
router.route('/avatar').post((req, res) => {        //处理前端评论的发表功能，插入数据库comments列表！的获取ID为文章ID
    User.findOneAndUpdate
    (
      { name:req.body.name},
      { $set: {avatar:req.body.avatar}}, //$push解决upload数组问题！！！！！！不再执行更新，改成插入！！
      {upsert: true,new:true}
    )
      .then(user => res.json(user))
      .catch(err => res.json(err));
    });
router.route('/nickname').post((req, res) => {        //处理前端评论的发表功能，插入数据库comments列表！的获取ID为文章ID
        User.findOneAndUpdate
        (
          { name:req.body.name},
          { $set: {nickName:req.body.nickName}}, //$push解决upload数组问题！！！！！！不再执行更新，改成插入！！
          {upsert: true,new:true}
        )
          .then(user => res.json(user))
          .catch(err => res.json(err));
        });
router.route('/phone').post((req, res) => {        //处理前端评论的发表功能，插入数据库comments列表！的获取ID为文章ID
            User.findOneAndUpdate
            (
              { name:req.body.name},
              { $set: {phone:req.body.phone}}, //$push解决upload数组问题！！！！！！不再执行更新，改成插入！！
              {upsert: true,new:true}
            )
              .then(user => res.json(user))
              .catch(err => res.json(err));
            });
router.route('/email').post((req, res) => {        //处理前端评论的发表功能，插入数据库comments列表！的获取ID为文章ID
                User.findOneAndUpdate
                (
                  { name:req.body.name},
                  { $set: {email:req.body.email}}, //$push解决upload数组问题！！！！！！不再执行更新，改成插入！！
                  {upsert: true,new:true}
                )
                  .then(user => res.json(user))
                  .catch(err => res.json(err));
                });
router.route('/cgpass').post((req, res) => {        //处理前端评论的发表功能，插入数据库comments列表！的获取ID为文章ID
        User.findOneAndUpdate
            (
              { name:req.body.name,pass:req.body.opass},
              { $set: {pass:req.body.npass}}, //$push解决upload数组问题！！！！！！不再执行更新，改成插入！！
              {new:true}
                  )
                    .then(user => res.json(user))
                    .catch(err => res.json(err));
                  });



module.exports = router