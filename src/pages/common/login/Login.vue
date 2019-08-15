<template>
    <div>
        <div class="page subpage" id="login">
        <app-header :title="hasPhone?'登录':'注册/登录'" />
        <div class="login-content">
            <div class="pic">
                <img src="/images/login/login.png"/>
            </div>
            <p class="word">智投金服已接入银行存管系统</p>
            <!-- 手机号输入框 -->
            <div v-if="!hasPhone">
            <div class="ipt-wrap">
                <input v-model="phone" type="text"  class="ipt" placeholder="请输入手机号"/>
            </div>
            <div :class={hide:!hasPhone} class="ways-wrap" >
                <span v-show="isShow" @click="changeIsShow">密码登录</span><span v-show="!isShow" @click="changeIsShow">短信验证码登录</span>
            </div>
            <div class="next" @click="phoneBtnAction">下一步</div>
            </div>
            <!-- 验证码输入框 -->
            <div v-else-if="isShow">
            <div class="ipt-wrap" >
                <input v-model="code" type="text"  class="ipt" placeholder='请输入验证码'/>
                <div v-if="hasPhone" class="eyes-wrap">
                    <span v-show="isShow" @click="getCodeAction">获取验证码</span>
                </div>
            </div>
            <div :class={hide:!hasPhone} class="ways-wrap" >
                <span v-show="isShow" @click="changeIsShow">密码登录</span><span v-show="!isShow" @click="changeIsShow">短信验证码登录</span>
            </div>
            <div class="next" @click="codeBtnAction">下一步</div>
            </div>
            <!-- 密码输入框 -->
            <div v-else-if="!isShow">
            <div class="ipt-wrap">
                <input v-model="pass" type="text"  class="ipt" placeholder="请输入6-12位密码"/>
                <div v-if="hasPhone" class="eyes-wrap">
                    <img v-show="!isShow" class="eyes" src="/images/login/eyes.png" alt=""/>
                </div>
            </div>
            <div :class={hide:!hasPhone} class="ways-wrap" >
                <span v-show="isShow" @click="changeIsShow">密码登录</span><span v-show="!isShow" @click="changeIsShow">短信验证码登录</span>
            </div>
            <div class="next" @click="passBtnAction">下一步</div>
            </div>

            <p class="help"><router-link class="to-help" to="/login/help">需要帮助?</router-link></p>
            <div class="other">
                <div class="otherway weixin"><img src="/images/login/weixin.png"/><span>微信登录</span></div>
                <div class="otherway qq"><img src="/images/login/qq.png"/><span>QQ登录</span></div>
            </div>
        </div>
    </div>
    <router-view></router-view>
    </div>

</template>

<script>
import Header from '../../../components/Header'
export default {
    name:'app-login',
    components:{
        [Header.name]:Header
    },
    props:{

    },
    data(){
        return {
            phone:"",
            pass:"",
            code:"",
            currentPhone:'',
            hasPhone:false,
            isShow:true
        }
    },
    methods:{
        phoneBtnAction(){
           if(!(/^1[3456789]\d{9}$/.test(this.phone))){
               console.log('手机号格式不对')
           }else{
                console.log('手机号格式对了');
                this.hasPhone=true;
                this.currentPhone=this.phone;
                //将手机号发送到仓库，去请求发送验证码
                
           }   
        },
        //获取验证码
        getCodeAction(){

        },
        codeBtnAction(){
            console.log('code');
            //将phone和验证码发送到仓库，去请求发送验证码

            console.log(this.phone);
            this.code=""
        },
        passBtnAction(){
            console.log('pass');
            //将phone和pass发送到仓库，去请求发送验证码
            this.pass=""
        },
        changeIsShow(){
            this.isShow=!this.isShow;
        }
    }
}
</script>

<style lang="scss" scoped>
    #login{
        .login-content{
            width:100%;
            box-sizing:border-box;
            padding:0 0.6667rem;
            position:absolute;
            top:1.1733rem;
            .pic{
                width:4.4533rem;
                height:3.0667rem;
                margin:1.3333rem 0 0 2.3rem;
                img{
                    width:100%;
                }
            }
            .word{
                color:#999999;
                font-size:0.32rem;
                padding-top:0.6667rem;
                width:100%;
                text-align:center;
            }

            .ipt-wrap{
                width:100%;
                display:flex;
                border-bottom:solid 2px #dddd;
                margin-top:2.3067rem;
                padding: 0.4rem 0;
                .ipt{
                // line-height:0.6667rem;
                font-size:0.4rem;
                border:none;
                flex:1;
                }
                .eyes-wrap{
                    img{
                        height:0.4667rem;
                        width:0.4667rem;
                    }
                    span{
                        width:1.92rem;
                        height:0.3733rem;
                        font-size:0.4rem;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(58,86,200,1);
                        line-height:0.2667rem;
                    }
                }
            }
            .ways-wrap{
                text-align:right;
                margin-bottom:0.7467rem;
                margin-top:0.1333rem;
                &.hide{
                    visibility: hidden;
                }
                span{
                    width:1.3467rem;
                    height:0.3467rem;
                    font-size:0.3733rem;
                    font-family:"PingFangSC-Regular";
                    font-weight:400;
                    color:rgba(157,158,160,1);
                    line-height:0.2667rem;
                }
            }

            .next{
                width:100%;
                height:1.3867rem;
                background:rgba(184,184,184,1);
                border-radius:0.0667rem;
                font-size:0.48rem;
                font-family:"PingFangSC-Regular";
                font-weight:bold;
                color:rgba(255,255,255,1);
                line-height:1.3867rem;
                text-align:center;

            }
            .help{
                width:100%;
                height:0.3067rem;
                margin-top:0.32rem;
                font-size:0.32rem;
                font-family:"PingFangSC-Regular";
                font-weight:400;
                line-height:0.2667rem;
                text-align:right;
                .to-help{
                    color:rgba(58,86,200,1);
                }
            }
            .other{
                margin-top:2.56rem;
                width:100%;
                display:flex;
                .otherway{
                    flex:1;
                    text-align:center;
                    img{
                        width:0.48rem;
                        height:0.4267rem;
                    }
                    span{
                        padding-left:0.2667rem;
                        height:0.3067rem;
                        font-size:0.32rem;
                        font-family:"PingFangSC-Regular";
                        font-weight:400;
                        color:rgba(114,113,122,1);
                        line-height:0.2667rem;
                    }
                }
                .weixin{
                    border-right:solid 1px #ccc;
                }
            }
        }
    }
</style>