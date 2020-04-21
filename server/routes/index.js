var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/app', function(req, res, next) {
  res.send('responded with a resource');
});

module.exports = router;
