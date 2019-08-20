<template>
  <div class="page subpage" id="terrace">
    <app-header title="设置平台交易密码" :left="iconUrl" :leftAction="()=>this.$router.go(-1)" />
    <div class="terrace-top">
      <div class="terrace-cont">
        <div class="terrace-retr">
          <span class="dert1">密码</span>
          <input type="password" class="pass" placeholder="请输入6位数字交易密码" />
        </div>
        <div class="terrace-retr">
          <span class="dert2">确认密码</span>
          <input type="password" class="pass" placeholder="请再次输入密码" />
        </div>
      </div>
      <div class="terrace-but">
        <router-link to="/mine/password">
          <button class="but">完成</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../../../components/Header";
export default {
  name: "terrace",
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
.terrace-top {
  width: 100%;
  position: absolute;
  left: 0;
  top: 1.1733rem;
  bottom: 0;
  .terrace-cont {
    width: 100%;
    .terrace-retr {
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
  .terrace-but {
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