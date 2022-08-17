const mongoose=require('mongoose')

const Schema=mongoose.Schema

const GoodsSchema=new Schema({
    name:{
        type:String,
    } ,
    price: {
        type:String,
    },
    img: {
        type:String,
    },
    count: {
        type:String,
    },
    name: {
        type:String,
    },
})

module.exports=mongoose.model("Goods",GoodsSchema)