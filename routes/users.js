var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  next();
});
router.get("/",function(req,res,next){
  res.send("next arr info ");
});


module.exports = router;
