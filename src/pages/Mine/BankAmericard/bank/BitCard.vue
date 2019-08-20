<template>
  <div>
    <div class="page subpage" id="bitcard">
      <app-header :left="iconUrl" :leftAction="()=>this.$router.go(-1)"/>
      <!-- <div class="ddd">
        <h1>头部</h1>
      </div> -->
      <div class="bitcard-top">
        <div class="bitcard-h1">
          <h1>添加银行卡</h1>
        </div>
        <div class="bitcard_conet">
          <div class="bitcard_tet">
            <input type="text" class="tet" placeholder="请添加李福利的银行卡" />
          </div>
          <div class="bitcard_tet">
            <span>卡号</span>
            <input type="text" class="tet" placeholder="请绑定持卡人本人的银行卡" />
            <img src="/images/pice/pic3.png" alt />
          </div>
        </div>
        <div class="bitcard_botton">
          <router-link to="/mine/bankamericard/bankcard">
          <button class="but">下一步</button>
          </router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '../../../../components/Header';
export default {
  name: "bitcard",
  components: {
    [Header.name]: Header,
  },
  data() {
    return {
      iconUrl: "/images/back.png"
    };
  }
};
</script>

<style lang="scss" scoped>
#bitcard {
  width: 100%;
  height: 100%;
  .ddd {
    width: 100%;
    height: 1.1733rem;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: bisque;
  }
  .bitcard-top {
    width: 100%;
    position: absolute;
    top: 1.1733rem;
    left: 0;
    bottom: 0;
    .bitcard-h1 {
      width: 100%;
      height: 2.88rem;
      text-align: center;
      line-height: 2.88rem;
    }
    .bitcard_conet {
      width: 100%;
      .bitcard_tet {
        margin-left: 0.5333rem;
        border-bottom: 0.0133rem solid #e4e4e4;
        .tet {
          height: 0.7467rem;
          width: 79%;
          font-size: 0.36rem;
          margin-top: 0.2667rem;
          border: none;
        }
        span {
          padding-right: 0.7867rem;
        }
        img {
          padding-top: 0.5333rem;
        }
      }
    }
    .bitcard_botton {
      width: 100%;
      .but {
        height: 1.1467rem;
        width: 90%;
        border: none;
        margin-left: 0.5333rem;
        margin-top: 1.5067rem;
        font-size: 0.4667rem;
        background: #1f7dfd; 
      }
    }
  }
}
</style>