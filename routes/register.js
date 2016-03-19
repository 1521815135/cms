/**
 * Created by Administrator on 2016/3/19.
 */
var express = require('express');
var ur_user = require('../modules/mongo/ur_user');
var route = express.Router();
route.get('/', function (req, res,next) {
   res.render('register');
});
route.post('/', function (req, res, next) {
    var userName = req.body['userName'];
    var userPwd = req.body['userPwd'];
    var userConfirmPwd = req.body['userConfirmPwd'];
    var userinfo = new ur_user({
        'ur_username' : userName,
        'ur_pwd' : userPwd,
        'ur_sex':'true',
        'ur_age':null,
        'ur_location':null,
        'ur_create_date':new Date(),
        'ur_update_date':new Date()
    });
    userinfo.save(function (err, userinfo, effect) {
        if(err){

        }else{
            res.render('index',{'ur_username':userName});
        }
    });
});
module.exports = route;