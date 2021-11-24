var express = require('express');
var router = express.Router();
const { User } = require('../models');

/* GET users listing. */
router.get('/users', function (req, res, next) {
	User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })
});

router.post('/users', function (req, res, next) {
	res.send("test_post");
});

router.put('/users', function (req, res, next) {
	res.send("test_put");
});

router.delete('/users', function (req, res, next) {
	res.send("test_delete");
});

module.exports = router;
