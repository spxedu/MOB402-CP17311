var db = require('./db');
// khởi tạo khuôn mẫu cho model 
const spChema = new db.mongoose.Schema(
    {
        // định nghĩa cấu trúc của đối tượng sản phẩm
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: false},
        id_theloai: { type: db.mongoose.Schema.Types.ObjectId, ref: 'theLoaiMD'}
    },
    {
        collection: 'san_pham'
    }
);
// nếu định nghĩa về thể loại thì có thể viết tiếp ở dưới, 
// không cần tọa file riêng 

const theloaiSchema = new db.mongoose.Schema(
    {
        name: {type:String, required:true}
    },
    {
        collection: 'the_loai'
    }
);

// tạo model
let spModel = db.mongoose.model('spModel', spChema );
let theLoaiMD = db.mongoose.model('theLoaiMD', theloaiSchema);

module.exports = {spModel, theLoaiMD };