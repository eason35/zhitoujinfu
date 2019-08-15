<template>
     <div class="page subpage">
         <app-header title="常见问题" left="back" :leftAction="handleback"/>
         <ul class="help-list">
             <li class="help-item">
                <h3>1、忘记密码</h3>
                <p>输入手机号后，选择“用短信验证码啊登录”，
                    登录成功后请及时在我的“个人中心-密码管理”中修改登录密码</p>
             </li>
             <li class="help-item">
                <h3>1、忘记密码</h3>
                <p>输入手机号后，选择“用短信验证码啊登录”，
                    登录成功后请及时在我的“个人中心-密码管理”中修改登录密码</p>
             </li>
             <li class="help-item">
                <h3>1、忘记密码</h3>
                <p>输入手机号后，选择“用短信验证码啊登录”，
                    登录成功后请及时在我的“个人中心-密码管理”中修改登录密码</p>
             </li>
             <li class="help-item">
                <h3>1、忘记密码</h3>
                <p>输入手机号后，选择“用短信验证码啊登录”，
                    登录成功后请及时在我的“个人中心-密码管理”中修改登录密码</p>
             </li>
         </ul>
     </div>
</template>

<script>
import AppHeader from "../../../../components/Header"
export default {
    components:{
        [AppHeader.name]:AppHeader
    },
    methods:{
        handleback(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
    .help-list{
        padding:0.6667rem;
        position:absolute;
        left:0;
        top:1.1733rem;
        .help-item{
            color:#333;
            margin-bottom:0.6667rem;
            h3{
                line-height:1.0667rem;
                font-size: 0.4267rem;
                font-weight:bold;
            }
            p{
                line-height:0.5333rem;
                font-size:0.32rem;
                color:#666;
            }
        }
    }
</style>