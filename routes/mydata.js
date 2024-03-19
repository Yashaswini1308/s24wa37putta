var express = require('express');
var router = express.Router();

/* GET this page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Sai Shivani Yashaswini Putta' });
});

module.exports = router;