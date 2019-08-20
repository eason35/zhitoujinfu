<template>
  <div>
    <div class="page" id="mine">
      <header class="head">
        <div class="head-img">
          <img src="/images/mine/head.png" alt />
        </div>
        <div class="head-wrap">
          <div class="head-info">
            <div class="head-top">
              <span class="phone">188****9123</span>
              <i class="vip">
                <img src="/images/mine/vip.png" alt />
              </i>
            </div>
            <router-link to="/mine/realname" class="real-name">实名认证</router-link>
          </div>
          <div class="head-right">
            <span class="service">
              <img src="/images/mine/service.png" alt />
            </span>
            <router-link to="/mine/message" class="message">
              <img src="/images/mine/message.png" alt />
            </router-link>
          </div>
        </div>
      </header>
      <app-scroll class="mine-content content">
        <div class="property">
          <div class="total-property">
            <router-link to="/mine/property">
              <p class="title">总资产(元)</p>
              <p class="money"><span>0.00</span></p>
            </router-link>
          </div>
          <div class="property-interest">
            <div class="interest">
              <p class="title">昨日利息(元)</p>
              <p class="money">0.00</p>
            </div>
            <div class="total-interest">
              <p class="title">累计赚取(元)</p>
              <p class="money">0.00</p>
            </div>
          </div>
          <div class="tips">平均1分钟赚取不足0.01元...努力啊！</div>
        </div>
        <ul class="mine-list">
          <li class="mine-item border-bottom" v-for="item in mineList" :key="item.id">
            <i class="icon"><img :src="item.path" alt=""></i>
            <span class="title">{{item.name}}</span>
          </li>
        </ul>
        <div class="loginout">退出登录</div>
      </app-scroll>
    </div>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mineList:[
        {id:1,name:'投标',path:'/images/mine/bid.png'},
        {id:2,name:'银行卡',path:'/images/mine/bankcard.png'},
        {id:3,name:'密码管理',path:'/images/mine/password.png'},
        {id:4,name:'三方账户绑定',path:'/images/mine/bind.png'},
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
#mine {
  .head {
    padding: 0 0.5333rem 0 0.2933rem;
    display: flex;
    width: 100%;
    height: 1.5733rem;
    box-sizing: border-box;
    .head-img {
      height: 100%;
      margin-right: 0.2133rem;
      img {
        height: 100%;
      }
    }
    .head-wrap {
      width: 7.3067rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .head-info {
        .head-top {
          margin-bottom: 0.1333rem;
          .phone {
            font-size: 0.3467rem;
            margin-right: 0.1733rem;
          }
          .vip {
            display: inline-block;
            width: 0.72rem;
            height: 0.4rem;
            img {
              width: 100%;
            }
          }
        }
        .real-name {
          display: inline-block;
          padding: 0.0667rem 0.2rem;
          text-align: center;
          font-size: 0.2667rem;
          color: #999;
          border: 1px solid rgba(153, 153, 153, 1);
          border-radius: 0.5333rem;
        }
      }
      .head-right {
        display: flex;
        .service {
          margin-right: 0.4rem;
          img {
            width: 0.4667rem;
          }
        }
        .message {
          img {
            width: 0.5333rem;
          }
        }
      }
    }
  }
  .mine-content{
    top:1.5733rem;
  .property{
    margin: 0.7067rem 0.5333rem 0;
    background:rgba(31,125,253,1);
    border-radius:0.2667rem;
    .total-property{
      width: 40%;
      overflow: hidden;
      .title{
        margin: 0.52rem 0 0.28rem 0.5467rem;
        font-size:0.3467rem;
        font-weight:500;
        color:#fff;
        opacity:0.5;
        background: url('/images/mine/list.png') no-repeat;
        background-size: 0.1333rem 0.1333rem ; 
        background-position: 1.78rem 0.2rem;
      }
      .money{
        padding-left: 0.5467rem;
        font-size: 0.5067rem;
        color:#fff;
      }
    }
    .property-interest{
      display: flex;
      .interest{
        margin-right: 0.9333rem;
      }
      .title{
        padding: 0.52rem 0 0.28rem 0.5467rem;
        font-size:0.3467rem;
        font-weight:500;
        color:#fff;
        opacity:0.5;
      }
      .money{
        padding-left: 0.5467rem;
        font-size: 0.5067rem;
        color:#fff;
      }
    }
    .tips{
      font-size:0.32rem;
      opacity:0.5;
      color: #fff;
      padding: 0.8rem 0 0.4rem 0.5467rem ;
    }
  }
  .mine-list{
    margin: 0.6667rem 0.5333rem 2.2rem;
    .mine-item{
      height: 1.6rem;
      line-height: 1.6rem;
      background: url('/images/mine/list.png') no-repeat right center;
      background-size: 0.1333rem 0.1333rem ; 
      font-size: 0.4rem;
      display: flex;
      align-items: center;
      .icon{
        display: inline-block;
        height: 0.4rem;
        margin-right: 0.36rem;
        img{
          height: 100%;
        }
      }
    }
  }
  .loginout{
    margin: 0 0.5333rem;
    background-color: #1F7DFD;
    border-radius:0.1333rem;
    color: #FFFFFF;
    padding: 0.3067rem 0 ;
    text-align: center;
  }
  }
}

</style>