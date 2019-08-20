<template>
  <div>
    <div class="page subpage" id="bankamericard">
      <app-header title="选择银行卡" :left="iconUrl" :leftAction="()=>this.$router.go(-1)"/>
      <div class="content_con">
        <ul class="americard">
          <li class="americard_item">
            <div class="pic">
              <img src="/images/pice/pic_03.png" />
            </div>
            <div class="title">
              <h3>中国邮政银行</h3>
              <p>尾号5678存储卡</p>
            </div>
          </li>
          <li class="americard_item">
            <div class="pic">
              <img src="/images/pice/pic_03.png" />
            </div>
            <div class="title">
              <h3>中国邮政银行</h3>
              <p>尾号1234存储卡</p>
            </div>
          </li>
          <li class="americard_item">
            <div class="titc">
              <router-link to="/mine/bankamericard/bitcard">
                <img src="/images/pice/pic2.png" />
                <span>添加银行卡</span>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../../../components/Header";
import BankCard from "./bank/BankCard";
import BitCard from "./bank/BitCard";
export default {
  name: "bankamericard",
  components: {
    [Header.name]: Header,
    [BankCard.name]: BankCard,
    [BitCard.name]: BitCard
  },
  data() {
    return {
      iconUrl: "/images/back.png"
    };
  }
};
</script>


<style lang="scss" scoped>
#bankamericard {
  width: 100%;
  height: 100%;
  .content_con {
    width: 100%;
    position: absolute;
    left: 0;
    top: 1.1733rem;
    bottom: 0;
    .americard {
      height: 100%;
      .americard_item {
        max-width: 8.9467rem;
        height: 1.6133rem;
        background: #fff;
        margin-bottom: 0.2667rem;
        margin-left: 0.52rem;
        margin-right: 0.5333rem;
        box-shadow: 0.0267rem 0.0267rem 0.0667rem 0.0133rem rgba(184, 181, 181, 0.6);
        .pic {
          img {
            width: 0.8133rem;
            height: 0.8133rem;
            float: left;
            margin: 0.4rem 0.4267rem 0.4rem 0.2rem;
          }
        }
        .title {
          padding-top: 0.3733rem;
          font-size: 0.3067rem;
          float: left;
          h3 {
            padding-bottom: 0.0667rem;
            font-size: 0.3067rem;
          }
          p {
            font-size: 0.3067rem;
          }
        }
        .titc {
          img {
            float: left;
            padding: 0.5867rem 0.8133rem 0.6267rem 0.64rem;
          }
          span {
            font-size: 0.3067rem;
            line-height: 1.6133rem;
          }
        }
      }
    }
  }
}
</style>