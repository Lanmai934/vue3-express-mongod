var express = require('express')
var router = express.Router()
const User = require('../dbs/models/user')
// 处理注册请求
router.post("/register", async(req, res) => {
    // 将请求体中的信息结构出来
    const { name, password, tel, email } = req.body;
    console.log({ name, password, tel, email },"注册mmm");

    // 通过数据库查询方式放入user中
    const user = await User.find({ name })
    if (user.length) {
        res.status(200).json({
            code: -1,
            msg: "用户名已被注册"
        })
        return;

    }
    const users = new User(req.body)
    users.save().then(function(user, err) {
        if (err) {
            res.status(200).json({
                code: -1,
                msg: "注册失败"
            })
            return;
        }
        res.status(200).json({
            code: 0,
            msg: "注册成功"
        })
        return;
    })
})

//处理登录请求
router.post("/login", async(req, res) => {
    console.log(JSON.parse(JSON.stringify(req.body)),"登录mmm");
    const { name, password } = JSON.parse(JSON.stringify(req.body));
    console.log({ name, password },"登录mmm");
    User.findOne({ name: name, password }, (error, user) => {
        if (error) {
            res.status(200).json({
                code: -1,
                msg: error.message,
            });
            return;
        } else {
            if (!user) {
                res.status(200).json({
                    code: 1,
                    msg: "账号密码错误",
                });
                return;
            } else {
                // 登录成功后将数据保存到session会话中
                req.session.user = req.body.name;
                console.log("ppp",req.body.name)
                res.status(200).json({
                    code: 0,
                    msg: "登录成功",
                    user:req.session.user
                });
            }
        }
    })

})
router.get("/userinfo", (req, res) => {
    if (req.session.user) {
        const { name, password, tel, email, resource } = req.session.user;
        res.status(200).json({
            code: 0,
            data: {
                name: name,
                password: password,
                tel: tel,
                email: email,
                // resource: resource,
                login: true
            }
        })
    } else {
        res.status(200).json({
            code: -1,
            data: {
                name: "",
                password: "",
                tel: "",
                email: "",
                // resource: "",
                login: false
            }
        })
    }
})


module.exports = router;