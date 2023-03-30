var express = require('express');
var router = express.Router();
var homCtrl = require('../controllers/home.controller')

router.get('/', homCtrl.index );


module.exports = router;
