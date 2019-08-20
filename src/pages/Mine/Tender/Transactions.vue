<template>
  <div class="page subpage" id="transactions">
    <app-header title="交易记录" :left="iconUrl" :leftAction="()=>this.$router.go(-1)" />
    <h1>交易记录</h1>
  </div>
</template>
<script>

export default {
  name: "transactions",
 
  data() {
    return {
      iconUrl: "/images/back.png"
    };
  }
};
</script>