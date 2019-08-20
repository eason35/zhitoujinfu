<template>
  <div class="applys">
    <div class=" apply">
        <h3 @click="()=>{this.$router.go(-1)}">关闭</h3>
        <h4>
          <img src="../../../assets/logo.png" alt=""><span>智投金服  申请试用</span>
        </h4>
        <h2>你的微信头像、昵称、地区和性别信息</h2>
        <p>你可以选择使用不同的个人信息登录</p>
        
         <div class="content border-top">
            <img src="../../../assets/Sign in_touxiang1@2x.png" alt="">
            <div class="ll">
              <h2>来日方长</h2>
              <h5>微信个人信息</h5>
            </div>
            <span>
              <img src="../../../assets/Return@2x.png" alt="">
            </span>
        </div>

         <div class="content border-top">
            <img src="../../../assets/Sign in_icon@2x.png" alt="">
            <div class="ll">
              <h2>新建头像昵称</h2>
             
            </div>
            <span>
              <img src="../../../assets/Return@2x.png" alt="">
            </span>
        </div>

        <div class="last border-top">
            <p class="one">同意</p>
        </div>
         <div class="footer">
            <p class="two">拒绝</p>
        </div>
    </div>

  </div>
</template>

<script>
export default {

}

</script>


<style lang="scss" scoped>
.applys{
  position: absolute;
  left:0;
  top: 0;
  bottom:0;
  z-index:34;
  background:#fefefe;
  .apply{
    h3{
      font-size: .426667rem;
      font-weight: 600;
      padding:.066667rem 0 1.2rem .266667rem; 
    }
    h4{
     
      height: 1.2rem;
      padding-left: .266667rem;
          img{
          width: 1rem;
          padding-top:5px;
        }
        span{
         
          line-height: 1rem;
          padding-left: .133333rem;
          width:1.533333rem;
          height:.346667rem;
          font-size:.373333rem;
          font-family:PingFang SC;
          font-weight:400;
          color:rgba(20,20,20,1);
        }
    }
    h2{
      font-size: .666667rem;
      font-weight: 700;
      padding: .133333rem 0 0 .266667rem;


    } 
    p{
      font-size: .52rem;
      color: #333333;
      padding: .4rem 0;
      padding-left: .266667rem;
    }
  }
  .content{
    display: flex;
    height: 1.066667rem;
    padding: .533333rem 0;  
  h2{
    font-size: .4rem;
    padding-bottom:.066667rem;
  }
  h5{
    font-size: .4rem;
    padding-left: .266667rem;
    color: #333;
  }
  img{
    width: .533333rem;
    height: .533333rem;
    line-height: 1.066667rem;
  }
  span{
    padding: .266667rem 0 0 5.866667rem;
  }

  }
  .last{
    text-align: center;
    line-height: .533333rem;
    margin-bottom: .266667rem;
    padding-top: .533333rem;
    
    .one{
      margin-left: 2.866667rem;
      width: 4rem;
      background:#05C262;
      border-radius: .266667rem;
    }
  }
    .footer{
        text-align: center;
    line-height: .533333rem;
    margin-bottom: .266667rem;
    padding-top: .533333rem;
  .two{
        margin-left: 2.866667rem;
        width: 4rem;
        background: #EDEDED;;
        border-radius: .266667rem;
      }
    }
}

</style>