const http = require("http");
const server = http.createServer(  (req, res )=> { 

    res.writeHead( 200, "Ket noi thanh cong", {
        'Content-Type':'text/html'
    } );

    res.write("<h1> Xin chao </h1>");

    res.end();// kết thúc luồng dữ liệu trả về cho client

 }   );

 // khai báo cổng lắng nghe kết nối
 server.listen(8080, 'localhost', (err)=>{
        if(err)
            console.log(err);
        console.log("Server run port: 8080");
 });
 // chạy lệnh: node vidu1.js    ==> vào web với địa chỉ: http://localhost:8080