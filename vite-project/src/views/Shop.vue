<template>
<!-- 购物车页面 -->
<div>
   <Top></Top>
    <Header></Header>
    <div v-if="a===true">
      <el-row  v-for="item in $store.state.carts" :key="item.name" class="one">
      <el-col :span="4"><div class="grid-content"><el-radio v-model="item.selected" @change="checkboxChanged($event, item.name)" label="1" size="large"></el-radio></div></el-col>
      <el-col :span="4"><div class="grid-content"><img :src="`/src/assets/images/${item.img}`" alt="" class="img"> </div></el-col>
      <el-col :span="4"><div class="grid-content">名称：{{item.name}} </div></el-col>
      <el-col :span="4"><div class="grid-content">价格：{{item.price*item.count}}</div></el-col>
      <!-- <el-col :span="4"><div class="grid-content">数量： <el-input-number v-model="num" :min="0" step="1"  @change="handleChange($event, item.name)"/>{{item.count}}</div></el-col> -->
      <el-col :span="4"><div class="grid-content">数量： <el-input-number v-model="item.count" @change="stepperChanged(item.name, $event)"/></div></el-col>
      <el-col :span="4"><div class="grid-content"> <el-button type="danger" @click="removeFormCar(item.name)">删除</el-button></div></el-col>
    </el-row>
    </div>
    <div v-if="b===true" class="two">
      <el-row >
      <el-col :span="8"><div class="grid-content">已勾选 <span class="red">{{$store.getters.getAllSelectInfo.totalSelect}}</span> 件</div></el-col>
      <el-col :span="8"><div class="grid-content"><span class="red">￥{{$store.getters.getAllSelectInfo.totalPrice}}</span></div></el-col>
      <el-col :span="8"><div class="grid-content"><el-button type="success" class="bot" @click="all">结算</el-button></div></el-col>
    </el-row>
    </div>
</div>
 
    
</template>


<style lang="less" scoped>
.one:hover{
  box-shadow:0rem .9375rem 1.875rem rgba(193, 190, 190, 0.2)
  
}
.two{
  margin-top: 2.5rem;
}
.bot{
  margin: 0rem auto;
  width: 12.5rem;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
  // border: 1px solid #000;
}

.el-col:nth-child(2){
  text-align: center;
  height: 1.875rem;
  line-height: 1.875remx;
  font-size: 1.25rem;
}
.el-col:nth-child(3){
  text-align: center;
  height: 1.875rem;
  line-height: 1.875remx;
  font-size: 1.25rem;
}
.el-col:nth-child(4){
  text-align: center;
  height: 1.875rem;
  line-height: 1.875remx;
  font-size: 1.25rem;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 15.625rem;
  text-align: center;
}

</style>

<script>
import { defineComponent, ref, reactive, toRefs, computed } from "vue";
import { useStore } from 'vuex'
import http, { Usershop } from '@/utils/index'
import Top from "../components/Top.vue"
import Header from "@/components/Header.vue"
import router from "@/router";
import { ElMessage } from 'element-plus'
export default{
  
  setup(props) {
    const checked = ref(true)
    const store = useStore()
    const goodsuser=store.state.user
   
    const { getters, commit } = useStore();
    //更新vuex数据
    const stepperChanged = (name, e) => {
        store.commit('updateCar', {
            id,
            count: e
        })
    }
    const b=ref(true)
    const a=ref()
    const star=()=>{
      if(store.getters.getAllGoodCount!==0){
        a.value=true
      }else{
        a.value=false
      }
    }
    star()
    

  //提交订单跳转
  const all=()=>{
    if(store.getters.getAllSelectInfo.totalSelect==0){
      ElMessage("订单不能为空！")
    }else{
          router.push('/addren')
    }
  }
    //删除商品
    const removeFormCar=(name)=>{
       console.log("删除商品");
       store.commit("removeFormCar",name);

    }
    

    const checkboxChanged = (e, name) => {
        store.commit('updateGoodsSelected', {
            name,
            selected: e
        })
    }


    const goPay = async () => {
      //订单备注
      var beizhu = "";
      state.carts.map(item => {
          beizhu += item.title + ";购买数量" + item.count;
      });
      //订单总金额
      var selectedMoney = getters.getGoodsCountAndAmount.amount;
      var obj = {
          price: selectedMoney,
          beizhu
      };
      //发送请求
      let result= await http("GET", PayUrl, { params: { ...obj } });
      //跳转支付网页
      window.open(result)
    }

    return {
       getters,
       commit,
     stepperChanged,
       checked,
       all,
       removeFormCar,
       checkboxChanged,
       a,
       b
    };
  },
  components: {Top,Header }
};
</script>