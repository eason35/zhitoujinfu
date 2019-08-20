<template>
  <div class="page subpage" id="bankcard">
    <app-header :left="iconUrl" :leftAction="()=>this.$router.go(-1)" />
    <!-- <div>
        <h1>添加银行卡</h1>
    </div> -->
    <div class="bankcard-con">
      <li class="bankcard-bang">
        <p>绑定成功</p>
      </li>
      <li class="bankcard-te">
        <div class="pic">
          <img src="/images/pice/pic_03.png" />
        </div>
        <div class="title">
          <h3>中国邮政银行</h3>
          <p>尾号1234存储卡</p>
        </div>
      </li>
      <li class="bankcard-btnt">
        <router-link to="/mine/bankamericard">
            <button class="btut">完成</button>
        </router-link>
    </li>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '../../../../components/Header';
export default {
  name: "bankcard",
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
#bankcard {
    width: 100%;
    height: 100%;
    z-index: 30px;
  h1 {
    width: 100%;
    height: 88px;
    position: absolute;
    top: 0;
    left: 0;
    background: antiquewhite;
  }
  .bankcard-con {
    width: 100%;
    position: absolute;
    left: 0;
    top: 1.1733rem;
    bottom: 0;
    .bankcard-bang {
      widows: 100%;
      height: 229px;
      p{
        line-height: 229px;
        text-align: center;
        font-size: 46px;
      }
    }
    .bankcard-te {
      max-width: 8.9467rem;
      height: 1.6133rem;
      background: #fff;
      margin-bottom: 0.2667rem;
      margin-left: 0.52rem;
      margin-right: 0.5333rem;
      box-shadow: 0.0267rem 0.0267rem 0.0667rem 0.0133rem rgba(184, 181, 181, 0.6);
      .pic {
        img {
          width: 1.0533rem;
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
    }
  .bankcard-btnt{
      margin: 0 0.5333rem;
      .btut{
        width: 100%;
        height: 1.1467rem;
        border: none;
        font-size: 0.4667rem;
        color: #fff;
        margin-top: 1.5067rem;
        background: blue;
          
      }
  }
  }
}
</style>