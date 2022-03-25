var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'reg'
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/registration', function(req, res, next) {
 res.render('registration_form');
});

router.post('/process', function(req, res, next) {
   var name=req.body.name;
   var age=req.body.age;
  // res.send(`Name is ${name} and Age is ${age} `);

    connection.query("INSERT INTO `registration`(`name`, `age`) VALUES (?,?)",[name,age],function(err){

      res.send("Record Added Successfully!");
    });
 });


module.exports = router;
