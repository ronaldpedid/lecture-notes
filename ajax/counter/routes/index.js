var express = require('express');
var router = express.Router();

let counter = 0;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Counter', counter });
});

router.get('/api/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

module.exports = router;
