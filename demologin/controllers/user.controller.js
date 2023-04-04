var md = require('../models/user.model');
exports.Reg = async (req, res, next) =>{
    let msg = '';
    if(req.method == 'POST'){
        console.log(req.body);
        // kiểm tra hợp lệ
        if(req.body.passwd != req.body.passwd2){
            msg = 'Xác nhận password không đúng';
            return  res.render('user/reg', {msg: msg});
        } 
        // một số lệnh kiểm tra hợp lệ khác SV tự viết.

        let objU =  md.userModel();
        objU.username = req.body.username;
        objU.passwd   = req.body.passwd;
        objU.email    = req.body.email;

        try {
            await objU.save();
            msg = 'Đăng ký thành công';

        } catch (error) {
            msg = error.message;
        }


    }
    res.render('user/reg', {msg: msg})
}

exports.Login = async (req, res, next)=>{
    let msg = '';
    if(req.method =='POST'){
        // lấy thông tin dựa vào username
        try {
            let objU = await md.userModel.findOne({username:req.body.username});
            console.log(objU);
            if(objU != null){
                // có tồn tại user ==> kiểm tra password
                if(objU.passwd == req.body.passwd){
                    // đúng pass ==> lưu vào session 
                    req.session.userLogin = objU; 
                    // chuyển trang về màn hình chính hoặc danh sách 
                    return res.redirect ('/users');
                }else{
                    // không đúng pass
                    msg = 'Sai password';
                }

            }else{
                msg = 'Không tồn tại user ' + req.body.username; 
            }


        } catch (error) {
            msg = error.message;
        }
    }
 
    res.render('user/login', {msg:msg})
}

exports.Logout = (req, res, next) =>{

}