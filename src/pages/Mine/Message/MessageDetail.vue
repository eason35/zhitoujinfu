<template>
  <div class="page subpage" id="message-detail">
    <app-header title="详情" :left="iconUrl" :leftAction="()=>this.$router.go(-1)"/>
    <app-scroll class="content">
      <h3 class="title">互动圈升级维护公告</h3>
      <p class="time">智投金服2019-07-18 14:00:00  公告</p>
      <p>尊敬的向上用户：</p>
      <p>您好！</p>   
      <p>向上互动圈将于今日（7月18日）起进行升级维护，期间可能会出现互动圈无法访问等情况，届时请您不必担心、耐心等待；升级成功时间将另行通知。</p>
      <p>由此给您带来的不便敬请谅解。</p>
      <p>如您有任何疑问请联系在线客服或拨打客服热线：4000-688-166。</p>
      <div class="pic">
        <img src="/images/mine/qrcode.png" alt="">
      </div>
      <div class="scan">扫一扫加小美微信好友了解更多详情</div>
    </app-scroll>
  </div>
</template>

<script>
export default {
    name:'message-detail',
    data () {
      return {
        iconUrl:"/images/back.png",
      }
    }
}
</script>

<style lang="scss" scoped>
#message-detail{
  .content{
    position: absolute;
    left: 0;
    top: 1.1733rem;
    bottom: 0;
    padding: 0 0.4933rem;
    font-size: 0.2933rem;
    line-height: 0.6667rem;
    .title{
      font-size: 0.4rem;
      line-height: 0.9333rem;
    }
    .time{
      font-size: 0.32rem;
    }
    .pic{
      width: 4.16rem;
      height: 4.4rem;
      margin: 1.7067rem auto 0.7867rem;
      img{
        width: 100%;
      }
    }
    .scan{
      width: 4rem;
      text-align: center;
      font-size: 0.4rem;
      font-weight: bold;          
      margin: 0 auto;
      color:#333;
    }
  }
}

</style>