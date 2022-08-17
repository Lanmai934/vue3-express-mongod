<template>
<!-- 注册 -->
  <div class="main">
         <el-form
    :label-position="top"
    label-width="100px"
    :model="formLabelAlign"
    class="form"
  >
  <el-form-item label="">
    <p>注册页面</p>
         <p>{{agin}}</p>
     </el-form-item>
    <el-form-item label="">
      <span class="example-demonstration">名字:</span><el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="">
      密码:<el-input v-model="formLabelAlign.password" />
    </el-form-item>
    <el-form-item label="">
     联系方式:<el-input v-model="formLabelAlign.tel" />
    </el-form-item>
     <el-form-item label="">
     邮箱:<el-input v-model="formLabelAlign.email" />
    </el-form-item>
     <el-form-item label="">
        <el-button type="success" plain @click="Postfrom" class="bot">注册</el-button>
       <p class="bo">
          <span type="success" plain  @click="back">登录/</span>
         <span type="success" plain @click="back1" >管理者登录</span>
       </p>
     </el-form-item>
     
  </el-form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import http, { Regin } from '@/utils/index'
import { useRouter } from 'vue-router'
import CryptoJS from 'crypto-js'

export default {
  setup(){
    const router = useRouter()
    const formLabelAlign = reactive({
       name: '',
      password: '',
      tel: '',
      email:''
    })
    const agin=ref()
    

    const state=reactive(formLabelAlign )
     const back=()=>{

        router.push({ path:'/login'})
    }
     const back1=()=>{

        router.push({ path:'/admin'})
    }

    const Postfrom = async () => {
      console.log("post",state)
      const body= await http("Post",Regin,{
          name:JSON.stringify(state.name),
          password:JSON.stringify(state.password),
          tel:state.tel,
          email:state.email
      });
     console.log("rrr",body)
    if(body.code===0){
         agin.value=body.msg;
         ElMessage(body.msg)
        router.push("/")
         console.log("llll",agin.value)
     }else{
         agin.value=body.msg;
          ElMessage(body.msg)
         console.log("llll",agin.value)
     }
  };
  
return {formLabelAlign,Postfrom,agin,back,back1}
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
    background-color: #fff;
     outline: 1px solid rgb(25, 114, 37);
    .el-form-item{
      color: #000;
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


