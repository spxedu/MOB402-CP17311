// npm install mongoose --save
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/demo_login11')
        .catch((err)=>{
            console.log(err);
        });
module.exports = {mongoose};