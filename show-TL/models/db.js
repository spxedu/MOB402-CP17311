const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bh_17311')
        .catch((err)=>{
            console.log("Loi ket noi CSDL");
            console.log(err);
        });
module.exports = { mongoose };
// chú ý: một số trường hợp báo lỗi  ... timeout 1000000...
// thì thay thế chữ localhost thành 127.0.0.1

