<template>
<!-- 精品家居 -->
    <div class="main">
        <Top></Top>
        <Header></Header>
        <PcCart></PcCart>
    </div>

</template>
<script>
import PcCart from "@/components/library/Pc-cart.vue";
import Top from "@/components/Top.vue"
import Header from "@/components/Header.vue"
export default {
    setup() {
    },
    components: { PcCart,Top,Header }
}
</script>
<style lang="less" scoped>
.main{
    min-height: 18.75rem;
}
</style>

