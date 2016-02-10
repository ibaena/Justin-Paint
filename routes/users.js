var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/click', function(req, res, next) {
  res.sendFile('./Bootcamp2/clickgame/home.html')
});

module.exports = router;
