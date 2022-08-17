<template>
   <div class="all">
     <div>
         <p class="p">收货地址</p>
         <span class="sp">收货人：</span><input type="text>" v-model="addren.name" placeholder="名字"><br><br>
         <span class="sp">手机号码：</span><input type="text>" v-model="addren.phone" placeholder="手机号" ><br><br>
         <span class="sp">详细地址:</span><br><textarea rows="10" cols="30" v-model="addren.ste" placeholder="小区楼栋/乡村名称"></textarea>
     </div> 
    <div v-for="item in $store.state.carts" :key="item.name" class="two">
        <p><img :src="`/src/assets/images/${item.img}`" alt=""></p>
        <p>名称：{{item.name}}</p>
        <p>价格：{{item.price*item.count}}</p>
    </div>
    <div class="clear"></div>
    <div class="str">
        <span class="so">合 计 :</span><span class="st">￥ {{$store.getters.getAllSelectInfo.totalPrice}}</span><button @click="play">支付宝支付</button>  
    </div>
    
    </div> 
</template>
<style scoped>
.all{
    margin: 2.5rem;
    padding:1.25rem;
    /* outline: 1px solid rebeccapurple; */
    min-height: 50rem;
}
.all:hover{
    box-shadow:0rem .9375rem 1.875rem rgba(193, 190, 190, 0.5) 
}
.p{
    /* outline: 1px solid red; */
    height: 3.125rem;
    line-height:3.125rem;
    padding-left:0.625rem;
    background-color:#333333;
    color:#CDCDCD;
    margin-bottom:1.25rem;
}
.sp{
    color: #333333;
    font-weight: bold;
}
input{
    border-radius:.5rem;
    height:2.1875rem;
    outline: none;
    border: none;
    background-color: #F1F3F4;
    padding:.625rem;
}
input:hover{
    border: .0625rem solid #F5BD00;
}
textarea{
    border-radius:.5rem;
    outline: none;
    border: none;
    background-color: #F1F3F4;
    margin-left:5rem;
}
textarea:hover{
    border: .0625rem solid #F5BD00;
}
.two{
    float: left;
    margin: 1.25rem;
    list-style: none;
  
}
.clear{
    clear: both;
}
.str{
    margin-top: 1.25rem;
    /* outline: 1px solid red; */
    padding: 1.25rem;
}
.so{
   color: #333333;
    font-weight: bold;  
}
.st{
    color: red;
    font-weight: bold;
    font-size:1.25rem;
}
button{
    margin-left:11.25rem;
    height:3.125rem;
    line-height:3.125rem;
    border: none;
    background-color:rgb(83, 83, 248);
    color: #fff;
    border-radius:.5rem;
}
button:hover{
    background-color: green;
}
</style>
<script>
import {  ref, reactive, toRefs, computed } from "vue";
import { useStore } from 'vuex'
import http, { Usershop,test} from '@/utils/index'
import { ElMessage } from 'element-plus'
import router from "@/router";
export default {
    setup() {
        const store = useStore() 
        const { getters, commit } = useStore();
        const addren={
            name:'',
            phone:'',
            ste:''
        };
        const play=async()=>{
            if(addren.name===''||addren.phone===''||addren.ste===''){
                 ElMessage("请填写完整的收货信息！")
            }else{
                const body=await http("Post",Usershop,{
                name:store.state.user,
                goodsname:store.getters.getAllGoodname,
                price:store.getters.getAllSelectInfo.totalPrice,
                goodscount:store.getters.getAllGoodCount,
                ad_name:addren.name,
                ad_phone:addren.phone,
                ad_ste:addren.ste,
                goodsdate:new Date(),
            });
                console.log("post", body)
                console.log("mmm",addren)
                
                if(body.code===0){
                    ElMessage(body.msg)
                    router.go(-1)
                    store.state.carts=[]
                }else{
                    ElMessage(body.msg)
                }
            }
        }
            
        return{
            getters,
             commit,
             play,
             addren,
            
        }
    },
}
</script>
