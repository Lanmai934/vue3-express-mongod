<template>
<!-- 登录页面 -->
    <div class="main">
        <Top></Top>
        <Header></Header>
        <pc-login></pc-login>
    </div>

</template>
<script>
import PcLogin from '../components/library/Pc-login.vue'
import Top from "@/components/Top.vue"
import Header from "@/components/Header.vue"
export default {
    name:"Login",
  components: { PcLogin,Top,Header },
    setup() {
        
    },
}
</script>
<style lang="less" scoped>
.main{
    min-height: 18.75rem;
}
</style>

