var myMD = require('../models/sanpham.model');

exports.list = async (req, res, next)=>{
    
    
    var list = await myMD.spModel.find().sort( { name: 1 } );


    res.render('sanpham/list', { listSP: list })
}

exports.add = (req, res, next)=>{
    
    res.render('sanpham/add')

}