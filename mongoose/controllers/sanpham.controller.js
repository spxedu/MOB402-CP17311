var myMD = require('../models/sanpham.model');

exports.list = async (req, res, next)=>{
    // tạo chức năng lọc dữ liệu trên danh sách
    let dieu_kien_loc = null;
    if(typeof( req.query.price != 'undefined')){
        dieu_kien_loc = { price: req.query.price };
    }
    
    var list = await myMD.spModel.find( dieu_kien_loc ).sort( { name: 1 } );


    res.render('sanpham/list', { listSP: list })
}

exports.add = async (req, res, next)=>{
    // tạo biến lưu câu thông báo
    let msg = ''; // dùng truyền ra view 
    if(req.method =='POST'){
        // kiểm tra hợp lệ dữ liệu

        // tạo đối tượng model để gán dữ liệu
        let objSP = new myMD.spModel();
        objSP.name = req.body.name; 
        objSP.price = req.body.price;
        // ghi CSDL
        try {
            let new_sp = await objSP.save();
            console.log(new_sp);
            msg = 'Đã thêm thành công';
        } catch (error) {
            msg = 'Lỗi '+ error.message();
            console.log(error);
        }
    }
    res.render('sanpham/add',{ msg: msg  })
}