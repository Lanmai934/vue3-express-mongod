var express = require('express')
var router = express.Router()
const Suggest = require('../dbs/models/suggest')

//增：添加建议请求
router.post("/add", async(req, res) => {
    // 将请求体中的信息结构出来
    const {mianji,size,tel,city} = req.body;
    console.log({mianji,size,tel,city}, "xxxxxxxx")
    console.log(Suggest)
    // console.log(city, "xxxxxxxx")
    const suggests = new Suggest({mianji,size,tel,city})
    suggests.save().then(function(carts,err){
        if (err) {
            res.status(200).json({
                code: -1,
                msg: "提交失败"
            })
            return;
        }
            res.status(200).json({
                code: 0,
                msg: "提交成功"
            })
            return;
    })
})

//删
router.get("/delete"),async(req,res)=>{
    console.log("查看建议");
    Suggest.find().then((data) => {
       console.log("Suggest")
       res.send({
           code: 200,
           data,
           total: data.length
       })
   })
}


//查：查看建议
router.get("/find", async(req, res) => {
    console.log("Suggest");
    // res.send("mmmmmm");
    Suggest.find().then((data) => {
        console.log(data)
        res.send({
            code: 0,
            data,
            // total: data.length
        })
    })
})

//改
router.post("/change"),async(req,res)=>{
    console.log("查看建议");
    Goods.find().then((data) => {
       console.log("Suggest")
       res.send({
           code: 200,
           data,
           total: data.length
       })
   })
}


module.exports = router;