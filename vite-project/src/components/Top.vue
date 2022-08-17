<template>
<!-- 顶部导航 -->
  <nav class="app-topnav">
    <div class="container">
      <ul> 
           <template v-if="name===true">
            <li><RouterLink to="/" @click="removeuser($store.state.user)">退出登录</RouterLink></li>
            <li ><RouterLink to="/shop">
                <el-badge :value="$store.getters.getAllGoodCount" class="item">
                  我的订单
                </el-badge>
            </RouterLink></li>
          </template>
         <template v-else>
            <li><RouterLink to="/login">请先登录</RouterLink></li>
         </template>
        <!-- <li><RouterLink to="/help">帮助中心</RouterLink></li>
        <li><RouterLink to="/about">关于我们</RouterLink></li> -->
        <!-- <li><RouterLink to="/"><i class="iconfont icon-phone"></i>手机版</RouterLink></li> -->
      </ul>
    </div>
  </nav>
</template>
<script>
import { useStore } from "vuex";
import { defineComponent, ref, reactive, toRefs, computed } from "vue";
export default defineComponent({
  setup() {
    const store = useStore()
    const state = reactive({
      active: 0,
    });
    const name=ref('')
    const fn=()=>{
      console.log("9999",name.value)
      if(JSON.parse(localStorage.getItem("user")) !==null){
        name.value=true
         console.log("9999",name.value)
      }else{
        name.value=false
         console.log("99999",name.value)
      }
    };
    fn()
    
    const removeuser=(value)=>{
      console.log("退出登录");
       store.commit("removeuser",value);
    }
    const { getters } = useStore();
    return { ...toRefs(state),getters,removeuser,name};
  },
});
</script>
<style scoped lang="less">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color:#27BA9B;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
// ~ 选择器作用：选择当前选择器后的所有元素
</style>