var express = require('express');
const {render} = require("ejs");
var router = express.Router();
var multer =  require('multer');
var upload = multer({dest:'upload/'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  var name ='minh nguyễn'
  var tuoi = 20;
  var  mang = [2,4,5,6,7,6,6,77];
  var mangten = ['huy','minh'];
  res.render('home',{
    ten:name,
    year:tuoi,
    arr1:mang,
    arr2 : mangten,

  });
})
router.get('/buttons.ejs', function(req, res, next) {
  res.render('buttons', { title: 'Express' });
});
router.get('/cards.ejs', function(req, res, next) {
  res.render('cards', { title: 'Express' });
})
router.get('/charts.ejs', function(req, res, next) {
  res.render('charts', { title: 'Express' });
})
router.get('/404.ejs', function(req, res, next) {
  res.render('404', { title: 'Express' });
})
router.get('/bank.ejs', function(req, res, next) {
  res.render('bank', { title: 'Express' });
})
router.get('/forgot-password.ejs', function(req, res, next) {
  res.render('forgot-password', { title: 'Express' });
})
router.get('/login.ejs', function(req, res, next) {
  res.render('login', { title: 'Express' });
})
router.get('/register.ejs', function(req, res, next) {
  res.render('register', { title: 'Express' });
})
router.get('/tables.ejs', function(req, res, next) {
  res.render('tables', { title: 'Express' });
})
router.get('/utilities-animation.ejs', function(req, res, next) {
  res.render('utilities-animation', { title: 'Express' });
})
router.get('/utilities-border.ejs', function(req, res, next) {
  res.render('utilities-border', { title: 'Express' });
})
router.get('/utilities-color.ejs', function(req, res, next) {
  res.render('utilities-color', { title: 'Express' });
})
router.get('/utilities-other.ejs', function(req, res, next) {
  res.render('utilities-other', { title: 'Express' });
})
router.post('/dangky',upload.array('file',6),function (req, res){
 var email = req.body.email;
 var password = req.body.password;
 var filename = req.file.filter();
 console.log(password);
 console.log(filename);
  res.send('upload file thành công' + email);
    })


module.exports = router;
