<template>
  <div class="scroll-wrap" ref="scroll">
      <div class="scroll-content">
            <slot/>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
    name:'app-scroll',
    // 组件挂载时构建滚动视图
    mounted () {
        let scroll = this.scroll = new BScroll(this.$refs.scroll,{
            click:true,
            tap:true,
            scrollY:true
        });
        scroll.on('beforScrollStart',()=>{
            scroll.refresh();
        })
    }

}
</script>

<style lang="scss" scoped>

.scroll-wrap{
    overflow: hidden;
}

</style>