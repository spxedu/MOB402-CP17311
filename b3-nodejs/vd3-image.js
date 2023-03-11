const http = require('http');
const fs   = require('fs'); // quản lý file
const sv = http.createServer( (req,res)=>{
    // ghi log địa chỉ truy cập
    console.log(req.url);

    switch(req.url){
        case '/logo.png':  // trả về client hình ảnh
            fs.readFile('./logo.png', (err, data)=>{
                if(err)
                    throw err;

                // nếu không có lỗi đọc file
                return res.end(data);// không cần writeHead.
            })
        break;
        case '/':// trang chủ
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end("<meta charset='utf-8'/>Trang chủ <img src='/logo.png' />");
        break;
    }
    res.end();
});
sv.listen(8080);
console.log("Server đang chạy cổng 8080");