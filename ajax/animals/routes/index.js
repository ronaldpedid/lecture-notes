var express = require('express');
var router = express.Router();
const debug = require("debug")("animals:router")

let animals = [{
  "id": 1,
  "name": "American red bird"
}, {
  "id": 2,
  "name": "Feral rock pigeon"
}, {
  "id": 3,
  "name": "Fox, grey"
}, {
  "id": 4,
  "name": "Southern tamandua"
}];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', animals });
});

router.get('/delete/:id', (req, res) => {
  try {
    animals = animals.filter(animal => animal.id != req.params.id);
    res.json({ deleted: true });
  }
  catch (e) {
    debug(e);
  }
});

module.exports = router;
