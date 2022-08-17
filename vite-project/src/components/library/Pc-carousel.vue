<template>
<!-- 轮播图 -->
  <el-carousel height="39.1875rem" autoplay="true" interval="1000" class="lunbo">
    <el-carousel-item v-for="item in state" :key="item" >
      <img :src="`/src/assets/images/${item.img}`" alt="" class="img"> 
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import { defineComponent, ref, reactive, toRefs } from "vue";
import http, { LunboUrl } from '@/utils/index'
export default {
  setup() {
    //状态数据
        const state = ref();
        //获取轮播图数据
        const getLunbotu = async () => {
            const result = await http("GET",LunboUrl);
            console.log("ggg",result.data)
            state.value=result.data
        }
        //请求轮播图数据
        getLunbotu();
        return {state};
  },
}
</script>
<style scoped>
*{
  margin: 0rem;
  padding: 0rem;

}
.lunbo{
  /* outline: 1px red solid; */
  margin-bottom:1.875rem; 
}
.img{
 padding-left:8.125rem;
  width:120rem;
  height:62.5rem !important;
  /* outline: 1px yellow solid; */
}
</style>
