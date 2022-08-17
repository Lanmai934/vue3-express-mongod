var express = require('express')
var router = express.Router()
const Admin = require('../dbs/models/admin')


//处理登录请求
router.post("/login", async(req, res) => {
    console.log(JSON.parse(JSON.stringify(req.body)),"登录mmm");
    const { username, password } = JSON.parse(JSON.stringify(req.body));
    console.log({ username, password },"登录");
    Admin.findOne({ username: username, password }, (error, admin) => {
        if (error) {
            res.status(200).json({
                code: -1,
                msg: error.message,
            });
            return;
        } else {
            if (!admin) {
                res.status(200).json({
                    code: 1,
                    msg: "账号密码错误",
                });
                return;
            } else {
                // 登录成功后将数据保存到session会话中
                 req.session.admin = req.body;
                 console.log("ppp",req.body)
                res.status(200).json({
                    code: 0,
                    data:req.session.admin,
                    msg: "登录成功",
                   
                });
                console.log("ooo",req.session.admin)
            }
        }
    })

})

router.get("/userinfo", (req, res) => {
    if (req.session.admin) {
        const { username, password} = req.session.admin;
        res.status(200).json({
            code: 0,
            data: {
                username:username,
                password: password,
                login: true
            }
        })
    } else {
        res.status(200).json({
            code: -1,
            data: {
                username: "",
                password: "",
                login: false
            }
        })
    }
})



module.exports = router;