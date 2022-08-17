var express = require('express')
var router = express.Router()
const Goods = require('../dbs/models/goods')

//增
 router.post("/add"),async(req,res)=>{
     console.log("查看建议add");
     const data=req.body;
     const goodlist=new Goods(data)
     goodlist.save()
 }
//删
 router.get("/delete"),async(req,res)=>{
     console.log("dele查看建议",req.query.id);
    const id =req.body
    Goods.remove({
        _id:id
    }).then(function(){
        res.render({
            code:0
        })
        
    })
 }

//查
router.get("/find", async(req, res) => {
    console.log("findGoods");
    // res.send("mmmmmm");
    Goods.find().then((data) => {
        console.log(data)
        res.send({
            code: 0,
            data,
            total: data.length
        })
    })
})

//改
 router.post("/chage"),async(req,res)=>{
     console.log("chahe查看建议");
     const data=req.body;
     Goods.find().then((data) => {
        console.log("goosd")
        res.send({
            code: 200,
            data,
            total: data.length
        })
    })
 }
module.exports = router;