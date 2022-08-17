<template>
<Top></Top>
<router-link to="/shop"> ＜返回上一页</router-link>  
<pc-addren></pc-addren>
<Footer></Footer>
</template>
<style scoped>

</style>
<script>
import Top from "@/components/Top.vue"
import Footer from '@/components/Footer.vue';
import PcAddren from '../components/library/Pc-addren.vue';

export default {
  name:"Home",
    components: {
    Top,
    Footer,
        PcAddren
    }
    
}
</script>