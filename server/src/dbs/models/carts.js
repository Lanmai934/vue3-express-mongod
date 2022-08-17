const mongoose=require('mongoose')

const Schema=mongoose.Schema

const CartsSchema=new Schema({
    name:{
        type:String,
    } ,
    goodsname:{
        type:String,
    } ,
    price: {
        type:String,
    },
    goodsimg: {
        type:String,
    },
    goodscount: {
        type:String,
    },
   goodsdate: {
        type:String,
    },
    payurl:{
        type:String,
    }
})

module.exports=mongoose.model("carts",CartsSchema)