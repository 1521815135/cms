/**
 * Created by Administrator on 2016/3/6.
 */

var mongo = require('mongoose');
mongo.connect(require('../config').mongo_cfg.connection);

var schema = mongo.Schema;

var userschema = new schema({
    'ur_username':String,
    'ur_pwd':String,
    'ur_create_date':Date,
    'ur_update_date':Date
});

var model = mongo.model('userinfo',userschema);

var userinfo = new model({
    'ur_username':"shizf",
    'ur_pwd':"shizf",
    'ur_create_date':new Date(),
    'ur_update_date':new Date()
});

