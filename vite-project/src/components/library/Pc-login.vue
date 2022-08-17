<template>
  <div class="main">
    <div class="left">
    </div>
         <el-form
          :label-position="left"
          label-width="100px"
          :model="formLabelAlign"
          class="form"
        >
    <el-form-item label="名字:">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="密码:">
      <el-input v-model="formLabelAlign.password" />
    </el-form-item>
     <el-form-item label="">
        <el-button type="success" plain @click="Postfrom" class="bot">登录</el-button>
        <p class="bo">
          <span type="success" plain @click="back" >注册/</span>
        <span type="success" plain @click="back1" >管理者登录</span>
        </p>
     </el-form-item>
     
  </el-form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import http, { Login } from '@/utils/index'
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

        router.push({ path:'/admin'})
    }

    const Postfrom = async () => {
      console.log("post",state)
      const body= await http("Post",Login,{
          name:state.name,
          password:state.password,
      });
     console.log("rrr",body)
    if(body.code===0){
        agin.value=body.msg;
        // user.value=body.user;
        // adduser(user.value);
        localStorage.setItem('token',body.user)
        store.commit("adduser",body.user)
        console.log("lllll",JSON.parse(localStorage.getItem("user")))
        setTimeout(()=>{
          ElMessage("登录成功")
          router.push("/")
        },1000)
     }else{
         agin.value=body.msg;
         console.log("llll",agin.value.user)  
     }
    }

  
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
    width:31.25rem;
    color:#000;
     margin:.625rem auto;
    outline: 1px solid #DDE0E7;
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
  .form:hover{
      box-shadow:0rem .9375rem 1.875rem rgba(193, 190, 190, 0.2)
  }
}
.example-block {
  margin:8px;
}
.example-demonstration {
  // margin: 1rem;
}
</style>


