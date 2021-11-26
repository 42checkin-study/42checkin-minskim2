var express = require('express');
var router = express.Router();
const { User } = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
	User.findAll()
	.then((users) => {
		res.render('whereIsGifticon', { title: '내 기프티콘 어딨어?!', userData: users});
	})
});

module.exports = router;
