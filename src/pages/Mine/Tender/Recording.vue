<template>
  <div class="page subpage" id="recording">
    <app-header title="投标" :left="iconUrl" :leftAction="()=>this.$router.go(-1)" />
    <h1>收益记录</h1>
  </div>
</template>

<script>
import Header from "../../../components/Header";
export default {
  name: "recording",
  components: {
    [Header.name]: Header
  },
  data() {
    return {
      iconUrl: "/images/back.png"
    };
  }
};
</script>

<style lang="scss" scoped>

</style>