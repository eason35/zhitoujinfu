<template>
  <div class="page subpage">
    <app-header title="账单" :left="iconUrl" :leftAction="()=>this.$router.go(-1)"/>
    <div class="title content">
      <span>本月</span>
    </div>
    <app-scroll class="content">

    </app-scroll>
  </div>
</template>

<script>
export default {
    name:"bill",
    data () {
      return {
        iconUrl:"/images/back.png",
      }
    }
}
</script>

<style>

</style>