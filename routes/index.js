var express = require('express');
var router = express.Router();
var vm = require('../modules/viewModel/viewmodel');
/* GET home page. */
router.get('/', function(req, res, next) {
  var uid = req.session.Uid;
  //session 取值，使用中间件验证session
  if(uid){
    vm.loginModel.ur_username = uid;
    res.render('index', vm.loginModel);
  }else {
    res.redirect('/login');
  }
});

module.exports = router;
