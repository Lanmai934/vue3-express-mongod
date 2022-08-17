var express = require('express')
var router = express.Router()
const Carts= require('../dbs/models/carts')

//用户购物车
router.post("/post", async(req, res) => {
    // console.log(JSON.parse(JSON.stringify(req.body)),"登录mmm");
    const {name,goodsname, price,goodscount,goodsdate,ad_name, ad_phone, ad_ste} =req.body
    console.log({name,goodsname, price,goodscount,goodsdate,ad_name, ad_phone, ad_ste},"用户购物车");
    const carts= new Carts({name,goodsname,price,goodscount,goodsdate,ad_name, ad_phone, ad_ste})
    carts.save().then(function(carts,err){
        if (err) {
            res.status(200).json({
                code: -1,
                msg: "支付失败"
            })
            return;
        }
            res.status(200).json({
                code: 0,
                msg: "支付成功"
            })
            return;
    })

})

//查看订单
router.get("/find", async(req, res) => {
    console.log("caertfind");
    // res.send("mmmmmm");
    Carts.find().then((data) => {
        console.log(data,"caertfind")
        res.send({
            code: 0,
            data,
            // total: data.length
        })
    })
})


module.exports = router;