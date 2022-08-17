const express = require('express');
//挂载mongoodb
const mongoose = require("mongoose");
// 引入body-parser
const bodyParser = require('body-parser');

const expressSession = require('express-session')

const app = express();

// 用户数据接口
const user = require('./interfaces/user')
const admin = require('./interfaces/admin')
const suggest = require('./interfaces/suggest')
const lunbo=require('./interfaces/lunbo')
const work = require('./interfaces/work')
const goods=require('./interfaces/goods')
const carts=require('./interfaces/cart')


// 导入数据库链接文件
const dbConfig = require('./dbs/dbConfig');


// 连接数据库
mongoose.connect(dbConfig.dbs)

// 挂载body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(
    expressSession({
        secret: "password",
        resave: false,
        saveUninitialized: false,
    })
);

app.use('/api', user)
app.use('/api/admin', admin)
app.use('/api/suggest', suggest)
app.use('/api/lunbo',lunbo)
app.use('/api/work', work)
app.use('/api/goods', goods)
app.use('/api/carts', carts)




app.listen("9990", () => {
    console.log("9990服务器已启动")
})