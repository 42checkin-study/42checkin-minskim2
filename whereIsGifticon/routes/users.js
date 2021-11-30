var express = require('express');
var router = express.Router();
var multer = require('multer');

var fs = require('fs');

//var upload = multer({ dest: 'uploads/' });
const { User } = require('../models');

const userController = require('../controllers/userController');

// multer setting -> 저장 경로및 파일 명
const upload = multer({
	storage: multer.diskStorage({
	  // set a localstorage destination
	  destination: (req, file, cb) => {
		cb(null, 'uploads/');
	  },
	  // convert a file name
	  filename: (req, file, cb) => {
		cb(null, req.params.name + "_" + new Date().valueOf() + "_" + file.originalname);
	  },
	}),
  });

// 파일 업로드
router.post('/:name/upload', upload.single('userfile'), userController.uploadProfile);

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
		fs.readdir('uploads', function(error, filelist) {
			//console.log(filelist);
			var arr = [];
			for (file in filelist) {
				console.log(file);
				if (filelist[file].indexOf(user[0].name) === 0) {
					arr.push(filelist[file]);
				}
			}
			res.render('friends', { title: user[0].name, userData: user[0], filelist: arr});
		})
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
