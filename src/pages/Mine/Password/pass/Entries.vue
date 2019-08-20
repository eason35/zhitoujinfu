<template>
  <div>
    <div class="page subpage" di="entries">
      <app-header title="设置登录密码" :left="iconUrl" :leftAction="()=>this.$router.go(-1)" />
      <div class="entries-top">
        <h5>
          如果你未设置智投密码，可以在本页面设置密码，
          后续可以通过手机号+密码登录智投
        </h5>
        <div class="entries-cont">
          <div class="entries-left">
            <span class="dert1">密码</span>
            <input type="password" class="pass" placeholder="请输入6位数字交易密码" />
          </div>
          <div class="entries-left">
            <span class="dert2">确认密码</span>
            <input type="password" class="pass" placeholder="请再次输入密码" />
          </div>
        </div>
        <div class="entries-but">
          <router-link to="/mine/password">
            <button class="but">完成</button>
          </router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../../../../components/Header";
export default {
  name: "entries",
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
.entries-top {
  width: 100%;
  position: absolute;
  left: 0;
  top: 1.1733rem;
  bottom: 0;
  h5 {
    height: 0.8rem;
    font-size: 0.3467rem;
    line-height: 0.8rem;
    margin-left: 0.52rem;
    margin-right: 0.5067rem;
    margin-bottom: 1.2533rem;
    margin-top: 0.3867rem;
  }
  .entries-cont {
    width: 100%;
    .entries-left {
      //  width: 100%;
      margin-left: 0.5333rem;
      border-bottom: 0.0133rem solid #e4e4e4;
      .dert1 {
        padding-right: 1.6rem;
        font-size: 0.3733rem;
      }
      .dert2 {
        padding-right: 0.8rem;
        font-size: 0.3733rem;
      }
      .pass {
        width: 70%;
        height: 1.6rem;
        border: none;
        font-size: 0.3733rem;
      }
    }
  }
  .entries-but {
    .but {
      width: 88%;
      height: 1.1467rem;
      border: none;
      background: #1f7dfd;
      color: #fff;
      font-size: 0.4667rem;
      margin: 1.52rem 0.5333rem 0 0.5333rem;
    }
  }
}
</style>