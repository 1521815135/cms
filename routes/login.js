/**
 * Created by Administrator on 2016/3/6.
 */
var express = require('express');
var router = express.Router();
var vm = require('../modules/viewModel/viewmodel');
var userModel = require('../modules/mongo/ur_user');

router.get('/',function(req,res,next) {
    res.render('login',vm.loginModel);
});
router.post("/", function (req, res, next) {
   var username = req.body['userName'];
    var pwd = req.body['userPwd'];
    userModel.find({'ur_username':username,"ur_pwd":pwd},function(error,docs){
        vm.loginModel.ur_username = username;
        if(docs.length>0 && docs.length==1) {
            //session
            req.session.Uid = vm.loginModel.ur_username;
            res.redirect('/index');
        }else{
            vm.loginModel.ur_error = '用户名或者密码错误';
            res.render('login',vm.loginModel);
        }
    });
});
module.exports = router;