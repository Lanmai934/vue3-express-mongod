<template>
    <div class="main">
        <!-- Adim页面 -->
       <div class="top">
            <div class="logo">
                <span class="s"></span>
            </div>
            <div class="top-r">
               <span class="e">欢迎管理员【{{$store.state.admin.username}}】登录</span>
           </div>
           <div class="w">
                <span  class="e" @click="back($store.state.admin)">退出登录</span>
           </div>
           
       </div>
       <div class="center">
           <div class="left">
                <el-collapse v-model="activeName" accordion class="cc">
                    <el-collapse-item title="商品详情" name="3">
                        <li @click="fnn(1)"><span>查看订单</span></li>
                        <li @click="fnn(2)"><span>商品管理</span></li>
                    </el-collapse-item>
                </el-collapse>
               <!-- <li @click="fnn(3)"><span>用户信息</span></li> -->
               <li @click="fnn(4)"><span>游客预约</span></li>
           </div>
           <div class="right">
            <div v-if="su===1">
                <el-table :data="tableData1" border style="width: 100%">
                    <el-table-column prop="name" label="名字" width="180" />
                    <el-table-column prop="goodsname" label="商品" width="180"/>
                    <el-table-column prop="price" label="价格" width="180"/>
                    <el-table-column prop="goodscount" label="数量" width="180" />
                    <el-table-column prop="goodsdate" label="购买日期" width="180" />
                </el-table>
            </div>
            <div v-else-if="su===2">
                <el-table :data="tableData2" border style="width: 100%">
                    <el-table-column prop="name" label="名字" width="180" />
                    <el-table-column prop="price" label="单价" width="180"/>
                    <el-table-column prop="cun" label="库存" width="180" />
                    <el-table-column prop="count" label="已售" width="80" />
                    <el-table-column fixed="right" label="操作" width="200">
                        <template #default="scope">
                        <el-button text size="small" @click.prevent="deleteRow(scope.$index)">
                        删除商品
                        </el-button>
                       </template>
                    </el-table-column>
                </el-table>
                <el-table>
                    <el-table-column>
                        <input label="名字" v-model="uname"/>
                    </el-table-column>
                     <el-table-column>
                        <input v-model="uname"/>
                    </el-table-column>
                </el-table>
                <input class="i" placeholder="名字" v-model="uname"/>
                <input class="i" placeholder="单价" v-model="uprice"/>
                <input class="i" placeholder="库存" v-model="ucun"/>
                <input class="i" placeholder="已售" v-model="ucount"/>
                <el-button class="mt-4" style="width:100px" @click="onAddItem">添加</el-button>
            </div>
            <div v-else-if="su===3">s</div>
            <div v-else-if="su===4">
                <el-table :data="tableData4" border style="width: 100%">
                    <el-table-column prop="mianji" label="面积大小" width="180" />
                    <el-table-column prop="tel" label="联系方式" width="180"/>
                    <el-table-column prop="size" label="户型" width="180"/>
                    <el-table-column prop="city" label="居住城市" width="180" />
                </el-table>
            </div>
           </div>
       </div>
    </div>

</template>
<style lang="less" scoped>
.top{
    background-color: cadetblue;
    height: 6.25rem;
    padding: .625rem;
}
.logo {
    width: 200px;
    // outline: 1px solid red;
    float: left;
     .s{
      display: block;
    height:6.25rem;
      width:100%;
      text-indent: -9999px;
      background: url(../assets/images/logo.png) no-repeat center 18px / contain;
    }
  }
  .top-r{
      float:left;
      margin-left:6.25rem;
      height:6.25rem;
      line-height: 6.25rem;
      .e{
          font-size: 1.25rem;
      }
  }
  .w{
      float: right;
      margin-right: 2.5rem;
  }
.center{
    margin-top: 1.25rem;
}
input{
    border: none;
}
.i{
    height: 1.875rem;
    outline: 1px solid #EBEEF5;
    line-height: 1.875rem;
    margin-right: 5px;
}
.left{
    float: left;
    width: 18%;
    // outline: ipx solid red;
    // min-height: 18.75rem;
    background-color: #EBEEF5;
}
li{
    list-style: none;
    height: 3rem;
    line-height: 3rem;
    background-color: #FFFFFF;
    margin-top:.0625rem;
}
li:hover{
    // border-color:1px solid #aqua;
    background-color: #5F9EA0;
}
.cc:hover{
        background-color: #5F9EA0;

}
.right{
    float:left;
    width: 80%;
    margin-right: 1.25rem;
    outline: ipx solid yellow;
     min-height: 18.75rem;
    //  background-color: aqua;
}

</style>
<script>
import { defineComponent, ref, reactive, toRefs, computed } from "vue";
import { useStore } from 'vuex'
import http, { goods_add,goods_delete,goods_find,goods_chage,carts_add,carts_delete,carts_find,carts_chage,suggest_find } from '@/utils/index'
import AdminLogin from '../components/library/Admin-login.vue'
import router from "@/router";
export default{
    name:"Adim",
    components: {  // 挂载组件，子组件关联到父组件
        AdminLogin
  },
  setup(){
       //状态数据
    const store = useStore()
    const tableData1=ref()
    const tableData2=ref()
    const tableData3=ref()
    const tableData4=ref()
    const su=ref(1)
    const search = ref('')
    const handleEdit = (index, row) => {
        console.log(index, row)
        }
      //获取商品数据
     const getLunbotu = async () => {
            const result = await http("GET",goods_find);
           tableData2.value=result.data
            console.log("ggg2",result.data,tableData2.value)
    }
    //删除商品
    const deleteRow = (index,row) => {
        // console.log("ll",a)
        tableData2.value.splice(index, 1)
        // const result=await http("GET",goods_delete)
        // console.log("ooo",result)
    }
    //添加数据
    const uname=ref()
    const uprice=ref()
    const ucun=ref()
    const ucount=ref()
    const onAddItem = () => {
        // now.setDate(now.getDate() + 1)
        tableData2.value.push({
            // date: dayjs(now).format('YYYY-MM-DD'),
            name:uname.value,
            price: uprice.value,
            cun: ucun.value,
            count:ucount.value,
        })
         uname.value=""
         uprice.value=""
         ucun.value=""
         ucount.value=""
    }
    //查看订单
    const getcart = async () => {
        const result = await http("GET",carts_find);
           tableData1.value=result.data
            console.log("ggg1",result.data,tableData1.value)
    }
    getcart()
    //查看游客预约
    const getsuggest= async () => {
        const result = await http("GET",suggest_find);
           tableData4.value=result.data
            console.log("uuuu",tableData4.value,result.data)
    }
    //退出登录
    const back=(value)=>{
        console.log("退出登录");
       store.commit("removeadmin",value);
       router.go(-1)
    }
    const fnn=(index)=>{
         su.value=index
         console.log("two",su.value)
         if( su.value===2){
             console.log("two22lunbo",)
            getLunbotu() 
         }else if( su.value===1){
             getcart()
             console.log("one")
         }else if( su.value===4){
            getsuggest()
             console.log("one")
         }else{
             console.log("lll")
         }
    }
    return{
        tableData1, tableData2,tableData3,tableData4,fnn,su,deleteRow,onAddItem,uname,uprice,ucun,ucount,back
    }
    
  }
}
</script>

