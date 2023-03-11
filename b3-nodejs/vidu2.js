// tạo web có 2 màn hình: trang chủ và trang giới thiệu
// phải xác định người dùng truy cập vào địa chỉ trang nào.
const http = require('http');
const sv = http.createServer( (req, res)=>{
    console.log( req.url );

    switch( req.url)
    {
        case '/':                   homPage( req, res);     break;
        case '/gioithieu.html' :    aboutPage (req, res);   break;
        default:
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end("<h2>Dia chi ban truy cap khong ton tai</h2>");
        break;
    }

});
const homPage = (req, res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.end("<meta charset='utf-8'/> <h2>Đây là trang chủ</h2>");
}
const aboutPage = (req, res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.end("<meta charset='utf-8'/> <h2>Trang giới thiệu</h2>");
}
sv.listen(8080); 
console.log("Server dang chay:  http://localhost:8080");