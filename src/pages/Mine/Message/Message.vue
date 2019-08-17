<template>
<div class="page subpage">
  <div id="message">
      <app-header title="消息" :left="iconUrl" :leftAction="()=>this.$router.go(-1)"/>
      <app-scroll class="content">
        <ul class="announcement">
          <li class="announcement-item" @click="goMessageDetail()">
            <div class="title">互动圈升级维护公告</div>
            <div class="time">2019-07-18 14:00</div>
            <div class="pic">
              <img src="/images/mine/announcement.png" alt="">
            </div>
          </li>
          <li class="announcement-item">
            <div class="title">互动圈升级维护公告</div>
            <div class="time">2019-07-18 14:00</div>
            <div class="pic">
              <img src="/images/mine/announcement.png" alt="">
            </div>
          </li>
          <li class="announcement-item">
            <div class="title">互动圈升级维护公告</div>
            <div class="time">2019-07-18 14:00</div>
            <div class="pic">
              <img src="/images/mine/announcement.png" alt="">
            </div>
          </li>
          <li class="announcement-item">
            <div class="title">互动圈升级维护公告</div>
            <div class="time">2019-07-18 14:00</div>
            <div class="pic">
              <img src="/images/mine/announcement.png" alt="">
            </div>
          </li>
          <li class="announcement-item">
            <div class="title">互动圈升级维护公告</div>
            <div class="time">2019-07-18 14:00</div>
            <div class="pic">
              <img src="/images/mine/announcement.png" alt="">
            </div>
          </li>
          <li class="announcement-item">
            <div class="title">互动圈升级维护公告</div>
            <div class="time">2019-07-18 14:00</div>
            <div class="pic">
              <img src="/images/mine/announcement.png" alt="">
            </div>
          </li>
        </ul>
      </app-scroll>
  </div>
  <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
    <router-view></router-view>
  </transition>
  </div>
</template>

<script>
export default {
    name:'message',
    data () {
      return {
        iconUrl:"/images/back.png",
      }
    },
    methods: {
      goMessageDetail(){
        this.$router.push('/mine/message/detail/1111')
      }
    }
}
</script>

<style lang="scss" scoped>
#message{
  .content{
    position: absolute;
    left: 0;
    top: 1.1733rem;
    bottom: 0;
  }
  .announcement{
    .announcement-item{
      padding: 0 0.5333rem;
      margin-bottom: 1.3067rem;
    }
    .title{
      font-size:0.48rem;
      color: #333333;
      font-weight:500;
      line-height: 0.96rem;
    }
    .time{
      color: #999999;
      font-size:0.3467rem;
       line-height: 0.96rem;
    }
    .pic{
      width: 8.1733rem;
      height: 5.3333rem;
      img{
        width: 100%;
      }
    }
  }
}


</style>