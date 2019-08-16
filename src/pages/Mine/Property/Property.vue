<template>
  <div>
    <div class="page subpage" id="property">
      <app-header title="资产构成" :left="iconUrl" :leftAction="()=>this.$router.go(-1)" right="账单" :rightAction="()=>this.$router.push('/mine/property/bill')"/>
      <div class="content">
        <div class="property-wrap">
          <div class="now-property">
            <p class="money">100000000</p>
            <p class="title">当前总资产(元)</p>
          </div>
        </div>
        <ul class="balance-wrap border">
          <li class="account-balance border-right">
            <p class="name">账户余额</p>
            <p class="money">￥<i>100000000.00</i></p>
          </li>
          <li class="account-balance">
            <p class="name">冻结余额</p>
            <p class="money">￥<i>0.00</i></p>
          </li>
        </ul>
        <div class="btn">
          <span class="btn-item" v-for="item in btn" :key="item.id">{{item.name}}</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'property',
    data () {
      return {
        iconUrl:"/images/back.png",
        balance:[
          {id:1,name:'账户余额',path:'/images/mine/doto1.png'},
          {id:2,name:'冻结余额',path:'/images/mine/doto2.png'}
        ],
        btn:[
          {id:1,name:'提现'},
          {id:2,name:'充值'}
        ]
      }
    },
}
</script>

<style lang="scss" scoped>
#property{
  .property-wrap{
    width:4rem;
    height:4rem;
    border:0.6667rem solid rgba(31,125,253,1);
    border-radius:50%;
    margin: 0.64rem auto 1.3333rem;
    position: relative;
    .now-property{
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      .money{
        font-size: 0.64rem;
        font-weight: bold;
        color: #333333;
        margin-bottom: 0.2rem;
      }
      .title{
        font-size:0.4rem;
        color: #999;
      }
    }
  }
  .balance-wrap{
    display: flex;
    text-align: center;
    .account-balance{
      padding: 0.4rem 0 ;
      flex: 1;
      font-size: 0.48rem;
      &:nth-of-type(2){
        .name{
          background: url("/images/mine/doto2.png") no-repeat 1.2rem center ;
          background-size: 0.2rem 0.2rem ;
        }
      }
      .name{
        margin-bottom: 0.3133rem;
        background: url("/images/mine/doto1.png") no-repeat 1.2rem center ;
        background-size: 0.2rem 0.2rem ;
      }
    }
    .block-balance{
      flex:1;
    }
  }
  .btn{
    margin: 1.68rem 1.96rem 0;
    display: flex;
    justify-content: space-between;
    .btn-item{
      display: inline-block;
      width:2.0533rem;
      height:0.7867rem;
      line-height:0.7867rem;
      text-align: center;
      background:rgba(31,125,253,1);
      color: #fff;
      font-size: 0.4rem;
    }
  }
}
</style>
