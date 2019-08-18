<template>
  <div  class="page subpage" id="withdrawal">
    <app-header title="提现" :left="iconUrl" :leftAction="()=>this.$router.go(-1)"/>
     <div class="content">
       <div class="bankcard-wrap">
         <div class="bankcard-pic"><img src="/images/mine/chinapost.png" alt=""></div>
         <div class="bankcard-info">
           <p class="bank">中国邮政银行</p>
           <p class="bankcard">尾号1234存储卡</p>
         </div>
       </div>
       <div class="withdrawal-money">
         <p class="title">提现金额</p>
         <div class="inpt border-bottom "><span>￥</span><input type="number" /></div>
         <p class="tips">可提现余额<span>100.00</span></p>
       </div>
     </div>
  </div>
</template>

<script>
export default {
    name:'withdrawal',
    data () {
    return {
      iconUrl:"/images/back.png",
    }
  },
}
</script>

<style lang="scss" scoped>
#withdrawal{
  .content{
    margin-top: 0.5067rem;
    .bankcard-wrap{
      width:8.9467rem;
      height:1.6133rem;
      margin: 0 auto 0.2533rem;
      box-shadow:0px 0px 20px 0px rgba(169,169,169,0.2);
      display: flex;
      align-items: center;
      font-size: 0.32rem;
      background: url("/images/mine/down.png") no-repeat 8.4rem center ;
      background-size: 0.1867rem 0.0933rem;
      .bankcard-pic{
        height: 0.8rem;
        padding: 0 0.4rem 0 0.2rem;
        img{
          height: 100%;
        }
      }
    }
    .withdrawal-money{
      width:8.9467rem;
      margin: 0 auto;
      box-shadow:0px 0px 20px 0px rgba(169,169,169,0.2);
      .title{
        padding: 0.6rem 0 0.5067rem 0.4267rem;
      }
      .inpt{
        margin: 0 0.4rem;
        height: 0.64rem;
        span{
          display: inline-block;
          margin-right: 0.1333rem;
        }
        input{
          border: 0;
        }
      }
      .tips{
        padding: 0.52rem 0 0.5867rem 0.4rem;
      }
    }
  }
}


</style>