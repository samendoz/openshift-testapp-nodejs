var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({status: 1, payload: {name: 'Openshift Mock Web Service', env: 'NodeJs'}});
});

module.exports = router;
