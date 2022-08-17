<template>
 <!-- 首页 -->
    <div class="main">
        <div class="home-banner">
            <Top></Top>
            <Header></Header>
            <PcCarousel></PcCarousel>
            <PcShowVue ></PcShowVue>
            <PcCallVue></PcCallVue>
            <PCFurniture></PCFurniture>
            <Footer></Footer>
        </div>
         
    </div>

</template>
<style lang="less" scoped>
</style>
<script>
import PcCarousel from "@/components/library/Pc-carousel.vue";
import PcShowVue from "@/components/library/Pc-show.vue";
import PcCallVue from "@/components/library/Pc-call.vue";
import PCFurniture from "@/components/library/Pc-furniture.vue"
import Top from "@/components/Top.vue"
import Header from "@/components/Header.vue";
import Footer from '@/components/Footer.vue';
export default{
    name:"Home",
    components: {
    PcCarousel,
    PcShowVue,
    PcCallVue,
    PCFurniture,
    Top,
    Header,
    Footer
    }
}
</script>

