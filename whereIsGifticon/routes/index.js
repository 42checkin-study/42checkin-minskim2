var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res, next) {
	res.send("test_get");
});

router.post('/test', function (req, res, next) {
	res.send("test_post");
});

router.put('/test', function (req, res, next) {
	res.send("test_put");
});

router.delete('/test', function (req, res, next) {
	res.send("test_delete");
});

module.exports = router;
