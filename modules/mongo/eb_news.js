/**
 * Created by Administrator on 2016/3/20.
 */
var mongo = require('./mongoConfig');

var eb_news = new mongo.Schema({
    "new_Title":String,
    "new_Author":String,
    "new_Description":String,
    "new_Content":String,
    "new_Is_Active":Boolean,
    "new_Create_id":String,
    "new_Create_Date":Date
});

module.exports = mongo.model('eb_news',eb_news);
