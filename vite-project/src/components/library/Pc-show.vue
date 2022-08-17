<template>
<!-- 首页--精品家居 -->
  <div class="home-new">
    <div class="p">
      <span class="p_1">精品家居|Boutique</span>
      <span class="p_2">
        <el-icon class="circle-plus-filled">
          <circle-plus-filled />
          </el-icon>
          <router-link to="/member">  更多精品家居</router-link>
      </span>
    </div>
    <div class="one">
      <PcImg ></PcImg>
    </div>
  </div>
</template>
<style lang="less" scoped>
*{
//  outline: 1px solid red;
margin-bottom: 10px;

}
.home-new{
  // background-color: #F6F6F6;
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
    min-height: 6.25rem;
    // background-color: antiquewhite;
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
<script>
import PcImg from "@/components/library/PC-img.vue"
export default {
  name:'pc-show',
    components: {  // 挂载组件，子组件关联到父组件
    PcImg
  },
  setup() {
    
  },
}
</script>

