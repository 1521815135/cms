/**
 * Created by Administrator on 2016/3/19.
 */
var express = require('express');
var userModel = require('../modules/mongo/ur_user');
var route = express.Router();
route.get('/', function (req, res,next) {
   res.render('register');
});
route.post('/', function (req, res, next) {
    var userName = req.body['userName'];
    var userPwd = req.body['userPwd'];
    var userConfirmPwd = req.body['userConfirmPwd'];
    var userEntity = new userModel({
        'ur_username' : userName,
        'ur_pwd' : userPwd,
        'ur_sex':'true',
        'ur_age':null,
        'ur_location':null,
        'ur_create_date':new Date(),
        'ur_update_date':new Date()
    });
    userModel.find({'ur_username':userName}, function (err, docs) {
       if(docs.length > 0){
           //res.render('error',{error_no:'500',error_info:'重复注册'});
           console.log('重复用户名');
           res.json({'success':false,'info':'重复注册'}, 200);
           return;
       }
    });
    userEntity.save(function (err, userEntity, effect) {
        if(err){
            res.json({'success':false,'info':'服务端异常'},200);
            return;
        }else{
            res.json({'success':true,'info':'/index'},200);
            return;
        }
    });
});
module.exports = route;