<template>
<!-- 商品列表 -->
  <el-row>
    <el-col
      v-for="item in state"
      :key="item"
      :span="5"
      class="col"
    >
      <el-card  shadow="hover" @click="addToCar(item)">
        <img :src="`/src/assets/images/${item.img}`" alt="" class="image"> 
        <div style="padding: 14px">
          <span>{{item.name}}</span>
          <div class="bottom">
            <time class="time">价格：{{item.price}}</time><br>
              <el-button type="text" class="button">加入购物车</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { ref } from 'vue'
import { useStore } from "vuex";
import http, { Furniture } from '@/utils/index'
export default {
  setup() {
    // const currentDate = ref(new Date())
    //状态数据
      const store=useStore()
        const state = ref();
        // const {commit}= useStore();
         const a=ref(true)
        //获取图数=>据
        const getGoods= async () => {
            const result = await http("GET",Furniture);
            console.log("ggg",result.data)
            state.value=result.data
            console.log("wwww",state.value,a.value)
        };
        //请求图数据
        getGoods();
       

         const addToCar=(value)=>{

            console.log("添加购物车");
            // 拼接出一个要保存到store中car数组里的商品信息对象
            const goodsinfo = {
              price:value.price,
              name:value.name,
              img:value.img,
              count:++value.count
            };
            a.value=false
             console.log("添加购物车", goodsinfo);
            // 调用store中的mutations来将商品加入购物车
            store.commit("addToCar", goodsinfo);
        };
    return {state,addToCar,a};
  }
}
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}
.col{
  margin: .5rem 1.6875rem;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
