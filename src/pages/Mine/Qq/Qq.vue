<template>
  <div class="qq subpage page">
      <div class="header">
          <p>使用QQ登录</p>
          <p @click="()=>{this.$router.go(-1)}">取消</p>
      </div>

      <div class="content">
        <div class="left">
            <img src="../../../assets/tt.png" alt="">
            <p>来日方长</p>
            <p>切换账号</p>
        </div>
        <div class="center">
            <img src="../../../assets/dd_03.jpg" alt="">
        </div>
        <div class="right">
             <img src="../../../assets/logoo.png" alt="">
            <p>智投金服</p>
            <p>移动应用</p>
        </div>
      </div>
      <div class="footer">
          <h3>登录后应该应用将获得以下权限:</h3>
        <ul class="list">
            <li>*访问你的详细资料</li>
            <li>*访问你的基础资料</li>
            <li>*关注该网站认证空间</li>
        </ul>
            <h2>登录</h2>
      </div>
  </div>
</template>

<script>
export default {

}

</script>
<style lang="scss" scoped>
    .qq{
    width: 100%;
      height: 100%;
      background: #ffffff;;
      position: absolute;
      top:0;
      left:0;
      z-index: 22;
    .header{
        p{
            float: left;
            text-align: center;
            padding: 0.4rem 0.1333rem 0.4rem 3.3333rem;
            font-size: 0.4rem;
            font-weight: 600;
           margin-bottom: 1.3333rem;
        }
    }
    .content{
        width: 100%;
        height: 3.2rem;
       
        display: flex;
        justify-content:space-between;
        text-align: center;
       
    .left{
        flex:1;
        text-align: center;
        img{
            padding: 0.4rem 0;
        }
        p{
            font-size: 0.4rem;
            font-weight: 600;
        }
        p:nth-of-type(2){
            color:#98d1ee;
        }


    }
    .center{
        flex:1;
        text-align: center;
        img{
            padding:0.8667rem 0;
        }
    }
    .right{
        flex:1;
        text-align: center;
         img{
            padding: 0.4rem 0;
        }
        p{
            font-size: 0.4rem;
            font-weight: 600;
        }
        p:nth-of-type(2){
            color:#aaa9b0;
        }
    }
    }
    .footer{
        width: 100%;
        box-sizing:border-box;
        height:100%;
        margin-top:7.0667rem;
        padding:0.533rem 0 0.5333rem 0.3rem;
        background: #f7f7f7;
        h3{
            padding-bottom: 0.2667rem;
        }
        li{
            padding-bottom: 0.1333rem;
            color: #6b6b6b;
            font-size: 0.4rem;
        }
        h2{
            width:9.3333rem;
            height:1.0667rem;
            background: #04cdfe;
            text-align: center;
            line-height: 1.0667rem;
            color: #ffffff;
        }
    }
}
</style>