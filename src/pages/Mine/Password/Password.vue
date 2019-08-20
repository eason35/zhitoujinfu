<template>
  <div>
    <div class="page subpage" id="password">
      <app-header title="密码管理" :left="iconUrl" :leftAction="()=>this.$router.go(-1)" />
      <div class="password-top">
          <div class="word-fre">
            <input type="text" placeholder="登录密码管理" class="tet"/>
            <router-link to="/mine/password/entries">
            <img src="/images/pice/pic4.png" alt="" class="pic" >
            </router-link>
          </div>
          <div class="word-fre">
            <input type="password" placeholder="平台交易密码管理" class="tet"/>
            <router-link to="/mine/password/terrace">
            <img src="/images/pice/pic4.png" alt="" class="pic">
            </router-link>
          </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../../../components/Header";
import Entries from "./pass/Entries";
import Terrace from "./pass/Terrace";
export default {
  name: "password",
  components: {
    [Header.name]: Header,
    [Entries.name]: Entries,
    [Terrace.name]: Terrace
  },
  data() {
    return {
      iconUrl: "/images/back.png"
    };
  }
};
</script>

<style lang="scss" scoped>
#password{
  .password-top{
    width: 100%;
    position: absolute;
    left: 0;
    top: 1.1733rem;
    bottom: 0;
    .word-fre{
      margin-left: 0.5333rem;
      .tet{
        width: 95%;
        height: 1.3067rem;
        border: none;
        font-size: 0.3467rem;
        border-bottom: 0.0133rem solid #333;
      }
      .pic{
        width: 0.1333rem;
        height: 0.1467rem;
        padding-top: 0.5733rem;
      }
    }
  }
}  
</style>