<template>
<!-- 导航 -->
    <div>
         <ul class="app-header-nav">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/member">精品家居</router-link></li>
            <li><router-link to="/cart">家居配件</router-link></li>
            <li><router-link to="/me">特价优惠</router-link></li>
        </ul>
    </div>
</template>
<style scoped lang="less">
.app-header-nav {
  width: 62.5rem;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  z-index: 999;
  > li {
    margin-right: 40px;
    width:5rem;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
  }
}
</style>
