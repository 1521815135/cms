/**
 * Created by Administrator on 2016/3/26.
 */
var express = require('express');
var router = express.Router();
var model = require('../modules/mongo/eb_news');
var vm = require('../modules/viewModel/viewmodel');

router.get('/', function (req, res, next) {
    var query = {};
    model.find(query, function (err, docs) {
        res.render('news/index',{res:docs});
    });
});
router.get('/detail', function (req, res, next) {
   res.render('news/detail',{});
});
router.get('/insert', function (req, res, next) {
    res.render('news/insert', vm.newsModel);
});

router.post('/insert',function(req,res,next){
    var title = req.body['new_Title'];
    var author = req.body['new_Author'];
    var desc = req.body['new_Description'];
    var content = req.body['new_Content'];
    var entity = new model({
        "new_Title":title,
        "new_Author":author,
        "new_Description":desc,
        "new_Content":content,
        "new_Is_Active":false,
        "new_Create_id":null,
        "new_Create_Date":new Date()
    });
    vm.newsModel.new_Title = title;
    vm.newsModel.new_Author = author;
    vm.newsModel.new_Description = desc;
    vm.newsModel.new_Content = content;

    model.find({'new_Title':title}, function (error, docs) {
        if(!error) {
            if (docs.length > 0) {
                vm.newsModel.new_Error = '标题名称不允许重复'+new Date();
                res.render('news/insert', vm.newsModel);
            } else {
                entity.save(function (err, entity, effects) {
                    if (!err) {
                        res.redirect('/news/detail?id=' + entity._id);
                    } else {
                        vm.newsModel.new_Error = '内部异常' + err + '，请联系管理员';
                        res.render('news/insert', vm.newsModel);
                    }
                });
            }
        }else{
            vm.newsModel.new_Error = '内部异常' + error + '，请联系管理员';
        }
    });
});

router.get('/update', function (req, res, next) {
    res.render('news/update', {});
});

router.post('/update',function(req,res,next){
    res.render('news/index',{});
});
module.exports = router;