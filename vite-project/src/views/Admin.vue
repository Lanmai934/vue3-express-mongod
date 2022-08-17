<template>
    <div class="main">
        <!-- Adim页面 -->
        <top></top>
        <header></header>
        <admin-login></admin-login>
    </div>

</template>
<style lang="less" scoped>


</style>
<script>
import AdminLogin from '../components/library/Admin-login.vue'
import Top from '@/components/Top.vue'
import Header from '@/components/Header.vue'
export default{
    name:"Adim",
    components: {
    AdminLogin,
    Top,
    Header
}
}
</script>

