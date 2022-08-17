<template>
  <div class="main">
         <el-form
    :label-position="top"
    label-width="100px"
    :model="formLabelAlign"
    class="form"
  >
  <el-form-item label="">
    <p>管理者登录</p>
     </el-form-item>
    <el-form-item label="">
      <span class="example-demonstration">名字:</span><el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="">
      密码:<el-input v-model="formLabelAlign.password" />
    </el-form-item>
     <el-form-item label="">
        <el-button type="success" plain @click="Postfrom" class="bot">管理者登录</el-button>
       <p  class="bo">
          <span @click="back1" >登录/</span>
        <span type="success" plain @click="back">注册</span>
       </p>
     </el-form-item>
     
  </el-form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import http, { admin_login } from '@/utils/index'
import { useRouter } from 'vue-router'
import { useStore } from "vuex";
import { ElMessage } from 'element-plus'

export default {
  setup(){
    const store=useStore()
    const router = useRouter();
    const formLabelAlign = reactive({
       name: '',
      password: '',
    });
    const agin=ref()
    const user=ref()

    const state=reactive(formLabelAlign )
    
    const back=()=>{
        router.push({ path:'/regin'})
    }
    const back1=()=>{
        router.push({ path:'/login'})
    }
    const Postfrom = async () => {
      console.log("post",state)
      const body= await http("Post",admin_login,{
          username:state.name,
          password:state.password,
      });
     console.log("rrr",body)
    if(body.code===0){
        agin.value=body.msg;
        localStorage.setItem('token',body.data)
        store.commit("addadmin",body.data)
        // console.log("lllll",body.data,JSON.parse(localStorage.getItem(body.data)))
        setTimeout(()=>{
           ElMessage(body.msg)
          router.push("/adminpage")
        },1000)
     }else{
         agin.value=body.msg;
         console.log("llll",agin.value.user)  
     }
    }

    //  const adduser=(value)=>{
    //     console.log("添加用户",value);
    //     // 拼接出一个要保存到store中car数组里的商品信息对象
    //    const usersinfo = {
    //      name:value.name
    //    };
    //     console.log("添加用户", usersinfo);
    //    // 调用store中的mutations来将商品加入购物车
    //    store.commit("adduser", usersinfo);
    // };

  
return {formLabelAlign,Postfrom,agin,back,user,back1}

}
}

</script>

<style scoped lang="less">
.main{
  margin: 3.125rem 0rem;
  background: url(@/assets/images/01.gif);
   width: 100%;
 height:40rem;
 background-repeat: no-repeat;
 background-position: center center;
 background-attachment: fixed;
 background-size: cover;
  padding:40px;
  .form{
    padding: 1.25rem;
    width: 31.25rem;
    color:#000;
    margin:.625rem auto;
    // outline: 1px solid rgb(25, 114, 37);
    background-color: #fff;
    .el-form-item{
     color:#000;
    }
   p{
      margin: 0 auto;
    }
    .bo{
      margin-top:-10px;
      margin-right: 1.25rem;
    }
  }
}
.example-block {
  margin:8px;
}
.example-demonstration {
  // margin: 1rem;
}
</style>


