<template>
  <div>
    <div class="page">
      <h1>我的</h1>
      <h1>
        <router-link to="/mine/realname">实名认证</router-link>
      </h1>
      <h1>
        <router-link to="/mine/message">信息</router-link>
      </h1>
      <h1>
        <router-link to="/mine/property">总资产</router-link>
      </h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>