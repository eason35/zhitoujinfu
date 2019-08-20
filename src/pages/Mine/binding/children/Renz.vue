<template>
   <div>
     <div class="renz">
      <div class="wenxin border-top">
          <img src="../../../../assets/weixin.png" alt="">
          <div class="center">
            <p>微信</p>
            <p>未绑定</p>
          </div>
          
          <router-link to="/mine/binding/apply">
            <p class="right">添加绑定</p>
          </router-link>
      </div>

       <div class="qq border-top">
          <img src="../../../../assets/qq.png" alt="">
          <div class="center">
            <p>QQ</p>
            <p>来日方长</p>
          </div>
          <router-link to="/mine/binding/qq">
            <p class="right">添加绑定</p>
           </router-link>
      </div>
      
      </div>
      <router-view></router-view>
     
  </div>
</template>

<script>
export default {
  name:"binding-renz"
}

</script>
<style lang="scss" scoped>
  .renz{
      width: 100%;
      height: 100%;
      background: #ffffff;;
      position: absolute;
      top:65px;
      left:0;
      z-index: 20;
    .wenxin{
      width: 100%;
      background: #fefefe;
      display: flex;
      box-sizing:border-box;
      padding: .266667rem;
      img{
        height:1rem;
        width:1rem;
      }
      .center{
        padding-left:.533333rem;
        flex:1;
        justify-content:space-between;
       p:nth-of-type(1){
       font-size: .4rem;
       color: #333333;
       padding-bottom: .066667rem;
        }
        p:nth-of-type(2){
       font-size: .266667rem;
       color: #999999;
       
        }
      }
      .right{
        color:#1F7FFD;
        font-size: .4rem;
        text-align: center;
        padding-right: .4rem;
      }
    }

      .qq{
      width: 100%;
      height: 1.2rem;
      background: #fefefe;
      display: flex;
      box-sizing:border-box;
      padding: .266667rem;
    img{
        height:1rem;
        width:1rem;
      }
      .center{
        padding-left:.533333rem;
        flex:1;
        justify-content:space-between;
       p:nth-of-type(1){
       font-size: .4rem;
       color: #333333;
       padding-bottom: .066667rem;
        }
        p:nth-of-type(2){
       font-size: .266667rem;
       color: #999999;
       
        }
      }
      .right{
        color:#1F7FFD;
        font-size: .4rem;
        text-align: center;
        padding-right: .4rem;
      }
    }

  }
 

</style>