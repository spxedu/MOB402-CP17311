var express = require('express');
var router = express.Router();
var spCtrl = require('../controllers/sanpham.controller')

router.get('/', spCtrl.list);

router.get('/add', spCtrl.add);
router.post('/add', spCtrl.add);

router.get('/edit/:idsp', spCtrl.editSP);
router.post('/edit/:idsp', spCtrl.editSP);


module.exports = router;