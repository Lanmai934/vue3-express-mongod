import { createRouter, createWebHashHistory } from 'vue-router'


import Home from '../views/Home.vue'
import Member from '../views/Member.vue'
import Cart from '../views/Cart.vue'
import Me from '../views/Me.vue'
import Login from '../views/Login.vue'
import Regin from '../views/Regin.vue'
import Shop from '../views/Shop.vue'
import Admin from '../views/Admin.vue'
import Addren from '../views/Addren.vue'
import Adminpage from '../views/Adminpage.vue'

const routes=[
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/adminpage",
    component: Adminpage,
  },
    {
      path: "/",
      component: Home,
    },
    {
      path: "/member",
      component: Member,
    },
    {
      path: "/cart",
      component: Cart,
    },
    {
      path: "/me",
      component: Me,
    },
    {
      path:"/regin",
    component:Regin
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/addren",
      component: Addren,
    },
    {
      path: "/shop",
      component: Shop,
      meta:{
        requireAuth:true,    //表示，这个组件需要登录
      }
    },
    
  ];
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  

router.beforeEach((to, from ,next) => {
  const token =JSON.parse(localStorage.getItem("user"))
  if(to.meta.requireAuth && token==null){
      next({path:'/login'})
  }else{
     next()
  }
  return
})


  export default router