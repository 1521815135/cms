/**
 * Created by Administrator on 2016/3/20.
 */
var mongo = require('mongoose');
mongo.connect(require('../config').mongo_cfg.connection);

module.exports = mongo;