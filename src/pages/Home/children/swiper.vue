<template>

    <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
        <slot/>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    </div>

</template>

<script>
export default {
    name:'app-swiper',
    methods:{
        update(){
            this.swiper && this.swiper.update();
        }
    },
    props:{

    },
    mounted(){
        this.swiper = new Swiper(this.$refs.swiper, {
        // autoplay: 2000,//可选选项，自动滑动
        pagination : '.swiper-pagination'
        })
    }
}
</script>

<style lang="scss" scoped>

</style>