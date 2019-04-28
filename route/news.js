var express = require('express')
var router = express.Router()

var lun = require('../models/news')

router.route('/val').get((req, res) => {
    lun.find({},(err, news) => {
        if (err) {
            console.log(err)
        }
        res.json(news)
    })
})

// router.get('/val', function(req, res, next) {
// 	//5.查询mongoDB的goods数据  基于mongoose实现商品列表的查询
// 	Goods.find({},function(err,doc){
// 		if(err){
// 			res.json({
// 				status:'1',
// 				msg:err.message
// 			})
// 		}else{
// 			res.json({
// 				status:'0',
// 				msg:'',
// 				result:{
// 					count:doc.length,
// 					list:doc
// 				}
// 			})
// 		}
 
// 	})
//   	// res.send('hello,goods');
// });
module.exports = router