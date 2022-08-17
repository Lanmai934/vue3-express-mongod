<template>
<!-- 注册页面 -->
    <div class="main">
        <Top></Top>
        <Header></Header>
        <PcRegin></PcRegin>
    </div>

</template>

<script>
import PcRegin from '../components/library/pc-regin.vue'
import Header from '@/components/Header.vue'
import Top from '@/components/Top.vue'

export default {
    name:"Regin",
  components: { PcRegin, Header ,Top},
    setup() {
        
    },
}
</script>
<style lang="less" scoped>
.main{
    min-height: 18.75rem;
}
</style>

