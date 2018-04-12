var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/', function(req, res){
  res.send(req.body);
});

router.get('/', function(req,res){
	var user={
		first_name:'Barak',
		sur_name:'Obama',
		address:'The White House',
		facebook_friends:'100000000'
	};
	console.log(user)
	res.render('index',{ title:'User',user:user})
});

module.exports = router;

