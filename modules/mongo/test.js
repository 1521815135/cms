/**
 * Created by Administrator on 2016/2/28.
 */
var mongo = require("mongoose");
var config = require("../config");

//创建数据库连接
mongo.connect(config.mongo_cfg.connection);
console.log('test');
//表结构骨架，相当于sql建表语句
var Schema = mongo.Schema;
var userschema = new Schema({
    ur_username:String,
    ur_loginname:String,
    ur_pwd     :String,
    ur_age     :Number,
    ur_idcard  :String,
    ur_create_date:Date,
    ur_create_id:String,
    ur_update_date:Date,
    ur_update_id:String
});
//前面定义的表结构绑定到指定的集合上
var user = mongo.model('userModel',userschema);
var userinfo = new user({
    ur_username :'张梦瑶',
    ur_loginname:'zmy001',
    ur_pwd     :'123456',
    ur_age     :25,
    ur_idcard  :'330523199105212586',
    ur_create_date:new Date().getTime(),
    ur_create_id:'1',
    ur_update_date:new Date().getTime(),
    ur_update_id:1
});
console.log(userinfo.ur_username);
userinfo.save(function (err, userinfo, numaffect) {
    if (err) {
        console.log('add error');
    } else {
        console.log('add success');
    }
});
console.log('success');