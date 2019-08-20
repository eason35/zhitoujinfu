<template>
  <div>
    <div class="page subpage" id="tender">
      <app-header title="投标" :left="iconUrl" :leftAction="()=>this.$router.go(-1)" />
      <div class="tender_txt">
        <div class="tender-cont">
          <li class="box">
            <p>总金额 (元)</p>
            <p>1000.00 (元)</p>
          </li>
          <div class="tender-funct">
            <li class="post">
              <p>昨天收益 (元)</p>
              <p>0.00 (元)</p>
            </li>
            <li class="post">
              <p>持有收益 (元)</p>
              <p>0.00 (元)</p>
            </li>
            <li class="post">
              <p>累计收益 (元)</p>
              <p>0.00 (元)</p>
            </li>
          </div>
        </div>
        <div class="tender_cte">
          <span class="unct">
            <router-link to="/mine/tender/recording">
              <img src="/images/pice/pic5.png" alt />
              <p>收益记录</p>
            </router-link>
          </span>
          <span class="unct">
            <router-link to="/mine/tender/transactions">
              <img src="/images/pice/pic6.png" alt />
              <p>交易记录</p>
            </router-link>
          </span>
        </div>
        <div class="tender_crte">
          <h4>海南智投金服信息服务有限公司</h4>
          <h4>本页面非任何法律文件，收益数据全供参考。过往 业绩不预期未来表现，市场有风险，投资需谨慎</h4>
          <h4>该页面由智投金服平台设计并提供</h4>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: "tender",
 
  data() {
    return {
      iconUrl: "/images/back.png"
    };
  }
};
</script>

<style lang="scss" scoped>
#tender {
  height: 100%;
  .tender_txt {
    width: 100%;
    position: absolute;
    left: 0;
    top: 1.1733rem;
    bottom: 0;
    .tender-cont {
      width: 92%;
      height: 4.6133rem;
      margin: 1rem .36rem 0 .36rem;
      .box {
        width: 100%;
        height: 2.88rem;
        p {
          font-size: 0.4533rem;
          text-align: center;
          line-height: 1.5467rem;
          color: #333333;
        }
        p:nth-child(2) {
          font-size: 0.3067rem;
          line-height: 0;
          padding-bottom: 0rem;
        }
      }
      .tender-funct {
        width: 100%;
        height: 1.7333rem;
        display: flex;
        justify-content: space-around;
        .post {
          float: left;
          flex: 1;
          p {
            line-height: 1.2rem;
            text-align: center;
            font-size: 0.3067rem;
            color: #333333;
          }
          p:nth-child(2) {
            font-size: 0.2533rem;
            line-height: 0;
            padding-bottom: 0rem;
          }
        }
      }
    }
    .tender_cte {
      display: flex;
      flex: 0.0133rem;
      margin-top: 0.7467rem;
      justify-content: space-around;
      img {
        width: 0.7867rem;
        height: 0.7867rem;
        margin-left: 0.2667rem;
      }
      p {
        text-align: center;
        line-height: 1.0667rem;
        font-size: 0.3067rem;
      }
    }
    .tender_crte {
      width: 100%;
      max-width: 7.0133rem;
      position: absolute;
      bottom: 0.4667rem;
      left: 1.5067rem;
      justify-content: space-around;
      h4 {
        font-size: 0.3067rem;
        margin-top: 0.1333rem;
        text-align: center;
      }
    }
  }
}
</style>