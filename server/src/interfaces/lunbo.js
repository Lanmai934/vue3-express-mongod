var express = require('express')
var router = express.Router()
const Lunbo = require('../dbs/models/lunbo')

//查：查看建议
router.get("/find", async(req, res) => {
    console.log("Suggest");
    // res.send("mmmmmm");
    Lunbo.find().then((data) => {
        console.log(data)
        res.send({
            code: 0,
            data,
            total: data.length
        })
    })
})



module.exports=router;