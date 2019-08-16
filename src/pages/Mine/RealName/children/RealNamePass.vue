<template>
  <div class="real-name-pass">
      <div class="top">
        <img src="/images/mine/realname.png" alt="">
      </div>
      <div class="real-name-info">
          <h3 class="tips">您已通过实名认证</h3>
          <div class="name-wrap">
            <p class="your-name">姓名</p>
            <p class="name">陈泽涵</p>
          </div>
          <div class="name-wrap">
            <p class="your-name">身份证</p>
            <p class="name">330723199802212536</p>
          </div>
      </div>
      
  </div>
</template>

<script>
export default {
    name:'real-name-pass'
}
</script>

<style lang="scss" scoped>
.real-name-pass{
  .top{
    height:4.6533rem;
    background:linear-gradient(90deg,rgba(137,167,249,1) 0%,rgba(102,135,247,1) 100%);
    img{
      width: 5.32rem;
      height: 2.8667rem;
      margin: 0.4533rem 0 0 1.9733rem;
    }
  }
  .real-name-info{
    width: 7.84rem;
    background-color: #f8f8f8;
    box-shadow:0px 0px 20px 0px rgba(169,169,169,0.2);
    position: absolute;
    left: 50%;
    top:3.6rem;
    margin-left:-3.92rem; 
    .tips{
      margin-top: 1.1467rem;
      font-size:0.5333rem;
      font-weight:bold;
      color: #000;
      text-align: center;
    }
    .name-wrap{
      &:nth-of-type(1){
        margin:1.4133rem 0 0.7467rem; 
      }
      &:nth-of-type(2){
        margin-bottom:1.4933rem; 
      }
      display: flex;
      .your-name{
        margin-left:0.8rem;
        width: 1.7333rem;
        color: #828388;
        font-size:0.4267rem;
      }
      .name{
        font-size:0.4533rem;
        font-weight:bold;
        color: #000;
      }
    }
  }
}

</style>