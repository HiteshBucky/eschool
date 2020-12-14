var express = require('express');
var router = express.Router();
var {registerController, loginController} = require('../controllers/users')
var userModel = require('../Models/User')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', data : '' });
});


/* Register Routes*/
router.get('/register', (req, res, next) => res.render('register'))
router.post('/register', registerController)



//Login page
router.get('/login',(req, res, next) => res.render('login'))
router.post('/login', loginController)





module.exports = router;
