var express = require('express')
var router = express.Router()
const Carts= require('../dbs/models/carts')

//用户购物车
router.post("/post", async(req, res) => {
    // console.log(JSON.parse(JSON.stringify(req.body)),"登录mmm");
    const {name,goodsname, price,goodscount,goodsdate} =req.body
    console.log({name,goodsname, price,goodscount,goodsdate},"用户购物车");
    const carts=Carts({name,goodsname, price,goodscount,goodsdate})
    carts.save()
})

module.exports = router;