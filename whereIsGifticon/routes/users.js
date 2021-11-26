var express = require('express');
var router = express.Router();
const { User } = require('../models');

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.redirect(`/users`);
	User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })
});

router.get('/:name', function (req, res, next) {
	User.findAll({where: {name: req.params.name}})
    .then((user) => {
	  res.render('friends', { title: user[0].name, userData: user[0]});
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })
});

router.post('/', function (req, res, next) {
	User.create({
		email: req.body.email,
		name: req.body.name,
		snsId: req.body.snsId
	})
	.then((result) => {
		console.log(result);
		res.status(200).json(result);
	  })
	.catch((err) => {
		console.error(err);
		next(err);
	})
});

router.put('/:name', function (req, res, next) {
	User.update({
		email: req.body.email,
		snsId: req.body.snsId
	}, {
		where: {name: req.params.name}
	})
	.then((result) => {
		console.log(result);
		res.status(200).json(result);
	  })
	.catch((err) => {
		console.error(err);
		next(err);
	})
});

router.delete('/:name', function (req, res, next) {
	User.destroy({where: {name: req.params.name}})
	.then((result) => {
		console.log(result);
		res.status(200).json(result);
	  })
	.catch((err) => {
		console.error(err);
		next(err);
	})
});

module.exports = router;
