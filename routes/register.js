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
    //注意异步嵌套的问题
    userModel.find({'ur_username':userName}, function (err, docs) {
       if(docs.length > 0){
           //res.render('error',{error_no:'500',error_info:'重复注册'});
           console.log('重复用户名');
           res.send({'success':false,'info':'重复注册'});
       }else {
           userEntity.save(function (err, userEntity, effect) {
               if (err) {
                   res.send({'success': false, 'info': '服务端异常'});
               } else {
                   res.send({'success': true, 'info': '/index'});
               }
           });
       }
    });
});
module.exports = route;