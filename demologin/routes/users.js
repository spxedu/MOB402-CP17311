var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user.controller');
var check_login = require('../middlewares/check_login');
// có thể viết middleware ở trên này ....
router.use( (req,res, next)=>{
    console.log('===> gọi middleware ========> ');
    next();
} );



/* GET users listing. */ // /users/
router.get('/', check_login.yeu_cau_login, function(req, res, next) {
  res.send('DS use r ');
});


//    /users/login 
router.get('/login', userCtrl.Login);
router.post('/login', userCtrl.Login);

router.get('/reg', userCtrl.Reg); //    /users/reg
router.post('/reg', userCtrl.Reg);

router.get('/logout', userCtrl.Logout);  //    /users/logout
module.exports = router;
