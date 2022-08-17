<template>
<!-- 首页--家居配件 -->
  <div class="home-new">
<div class="p">
      <span class="p_1">家居配件|furniture</span>
      <span class="p_2">
        <el-icon class="circle-plus-filled">
          <circle-plus-filled />
          </el-icon>
          <router-link to="/cart">  更多家居配件</router-link>
      </span>
    </div>
      <div class="one">
        <PcCartVue></PcCartVue>
    </div>
  </div>
</template>
<script>
import PcCartVue from "./Pc-cart.vue"
export default {
    name:'Pc-furniture',
    components: {  // 挂载组件，子组件关联到父组件
    PcCartVue,


  },
    setup() {
        
    },
}
</script>
<style lang="less" scoped>

.home-new{
  // background-color: aqua;
  .p{
    text-align: center;
    height: 1.25rem;
    line-height: 1.25rem;
    margin: 3.125rem 0rem;

     .p_1{
      //  color:#696969;
       font-size: 1.25rem;
     }
     .p_2{
      //  color:#D68D8F;
       float: right;
       margin-right: 1.25rem;
       .circle-plus-filled{
         font-size: 1.25rem;
        //  color:#D68D8F;
       }
     }
  }
.one{
    // min-height: 6.25rem;
    // background-color: antiquewhite;
    .img{
        min-height: 6.25rem;
    }
}
.two{
min-height: 6.25rem;
// background-color: rosybrown;
}
.three{
 min-height: 6.25rem;
//  background-color: royalblue;
}

}
</style>

