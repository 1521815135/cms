/**
 * Created by Administrator on 2016/3/6.
 */
var mongo = require('./mongoConfig');
var userschema = new mongo.Schema({
    'ur_username':String,
    'ur_login_name':String,
    'ur_pwd':String,
    'ur_sex':Boolean,
    'ur_age':Number,
    'ur_location':String,//地址
    'ur_create_date':Date,
    'ur_update_date':Date
});

var userModel = mongo.model('ur_user',userschema);

module.exports = userModel;

