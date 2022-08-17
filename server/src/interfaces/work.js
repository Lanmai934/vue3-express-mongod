var express = require('express')
var router = express.Router()
const Work = require('../dbs/models/work')
    
//增：发布招聘
router.post("/add", async(req, res) => {
    // 将请求体中的信息结构出来type, workname, date, work, sum, workdate, ask1, ask2 
    const Adddata = req.body;
    console.log(...Adddata, "xxxxxxxx")
    const worklist = new Work(Adddata)
    worklist.save()
})

//查：查看招聘信息
router.get("/find", async(req, res) => {
    console.log("查看招聘列表");
    Work.find().then((data) => {
        console.log(data)
        res.send({
            code: 0,
            data,
            total: data.length
        })
    })

})



module.exports = router;