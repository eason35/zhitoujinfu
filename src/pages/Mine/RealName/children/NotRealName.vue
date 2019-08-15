<template>
  <div class="not-real-name">
    <h3 class="tips">温馨提示：</h3>
    <p class="tips-notice">认证实名身份信息是您投标的必要条件，为保障您的资金安全，请务必保证信息正确有效</p>
    <div class="info-wrap">
      <div class="name">姓名</div>
      <input class="real-name" type="text" placeholder="真实姓名" />
      <div class="name-img">
        <img src="/images/mine/idcard.png" alt />
      </div>
    </div>
    <div class="info-wrap">
        <div class="name">身份证</div>
        <input class="real-name" type="text" placeholder="第二代18位身份证号" />
    </div>
    <div class="submit">认证</div>
  </div>
</template>

<script>
export default {
  name: "not-real-name"
};
</script>

<style lang="scss" scoped>
.not-real-name {
  .tips {
    margin-left: 0.5333rem;
    height: 1.3867rem;
    line-height: 1.3867rem;
    color: #cd6e6d;
  }
  .tips-notice {
    margin-left: 0.5333rem;
    width: 8.4667rem;
    height: 1.0667rem;
    font-size: 0.4rem;
    color: rgba(153, 153, 153, 1);
    line-height: 0.5333rem;
  }
  .info-wrap {
    display: flex;
    margin-top:0.5467rem; 
    height: 1.5733rem;
    line-height: 1.5733rem;
    background: rgba(244, 244, 244, 1);
    .name {
      padding-left: 0.5467rem;
      width: 2.2267rem;
      font-size: 0.4267rem;
      color: rgba(51, 51, 51, 1);
    }
    .real-name{
        background-color: rgba(244, 244, 244, 1);
        border:0;
        width: 5.9467rem;
        font-size: 0.4267rem;
    }
    .name-img{
        width: 0.5333rem;

        img{
            margin-top: 0.5333rem;
            width: 100%;
           
        }
    }
  }
  .submit{
    margin: 1.48rem 0.5333rem 0;
    height:1.3067rem;
    line-height:1.3067rem;
    text-align: center;
    background:rgba(31,127,253,1);
    border-radius:0.0667rem;
    font-size: 0.4533rem;
    color: #fff;
  }
}
</style>
