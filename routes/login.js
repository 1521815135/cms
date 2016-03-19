/**
 * Created by Administrator on 2016/3/6.
 */
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next) {
    console.log('test');
    res.render('login');
});
router.post("/", function (req, res, next) {
   var username = req.body['userName'];
    var pwd = req.body['userPwd'];
    if(username=="shizf" && pwd == "shizf"){
        //res.render('index',{'username':username});
        res.redirect('index',{'username':username});
    }
});
module.exports = router;