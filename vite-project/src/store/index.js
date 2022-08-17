import { createStore, Store, useStore as baseUseStore } from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
  });
export const store = createStore({
state: {
    carts: [],
    admin:''||localStorage.getItem('admin'),
    user:''||localStorage.getItem('user')
},
//更改state数据，由外部更改  commit
mutations: {
    updateuser(state,playlod){
        state.user.name=playlod
    },
    //添加购物车的方法
    addToCar(state, goodsinfo) {
        var flag = false;
        //1.看要添加的商品在购物车中是否存在
        state.carts.forEach((item) => {
            //2.如果存在，则修改购物车中商品的购买数量就可以了
            if (item.name == goodsinfo.name) {
            item.count += parseInt(goodsinfo.count);
            flag = true;
            return true;
            }
        });

        //3.如果不存在，则直接将商品添加到购物车
        if (flag == false) {
            state.carts.push(goodsinfo);
        }
    },
    //添加用户的方法
    adduser(state, usersinfo) {
        // state.user.push(usersinfo);
         state.user=usersinfo
         localStorage.setItem("user",JSON.stringify(state.user))
    },
    addadmin(state,admininfo) {
        // state.user.push(usersinfo);
         state.admin=admininfo
         localStorage.setItem("user",JSON.stringify(state.admin))
    },
    //退出登录
    removeuser(state) {
        window.localStorage.clear()
        window.location.reload()
        console.log("state.user", localStorage,JSON.stringify(state.user))

    },
    //退出登录
    removeadmin(state) {
        window.localStorage.clear()
        window.location.reload()
        console.log("state.user", localStorage,JSON.stringify(state.admin))

    },
    //更新vuex中的商品信息的方法
    updateCar(state, info) {
        state.carts.forEach((item) => {
          if (item.name == info.name) {
            item.count = info.count;
          }
        })
    },
    removeFormCar(state, name) {
        // 根据Id，从store 中的购物车中删除对应的那条商品数据
        state.carts.some((item, i) => {
            if (item.name == name) {
                state.carts.splice(i, 1)
                return true;
            }
        })
    },
    updateGoodsSelected(state, info) {
        state.carts.some(item => {
            if (item.name == info.name) {
                item.selected = info.selected
            }
        })
    }

},
//方法
getters: {
    testuser(state){
        return state.user.name+"你好"
    },
    userName(state){
        state.user
    },
    //返回购物车中所有商品的个数
    getAllGoodCount(state) {
        var count = 0;
        state.carts.forEach((item) => {
            count += item.count;
        });
        return count;
    },
    //获取名字
    getAllGoodname(state) {
        const goodsname=[]
        state.carts.forEach(e=>{
            goodsname.push(e.name)
        })
        return  JSON.stringify(goodsname);
    },
    //返回商品id所对应的购买数量的信
    getAllSelectInfo(state){
        var obj = {
          totalSelect:0,
          totalPrice:0
        }
        state.carts.forEach((item) => {
          if(item.selected){
            obj.totalSelect += item.count
            obj.totalPrice += item.count * item.price
          }
        });
        return obj;
      },
      getGoodsSelected(state) {
        var o = {}
        state.car.forEach(item => {
            o[item.id] = item.selected
        })
        return o
    },
    getGoodsCountAndAmount(state) {
        var o = {
            count: 0, // 勾选的数量
            amount: 0 // 勾选的总价
        }
        state.car.forEach(item => {
            if (item.selected) {
                o.count += item.count
                o.amount += item.price * item.count
            }
        })
        return o
    }
   
},
//方法
actions:{
    updateuser(context,playlod){
        setTimeout(()=>{
            context.commit("update",playlod)
        })
    },
   
},

plugins: [vuexLocal.plugin],

}); 
  



  export function useStore() {
    return baseUseStore;
  }