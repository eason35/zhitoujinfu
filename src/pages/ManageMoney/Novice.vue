<template>
    <div>
            <div class="page subpage" id="novice">
        <app-header class="border-bottom" title="新手专享" left="/images/back.png" :leftAction="()=>{this.$router.go(-1)}"/>
        <div class="novice-wrap">
             <div class="hot">
                 <p class="novice-title">新手专享30天授权<span>限购一次</span><i>转让即到</i></p>
                 <div class="big-word">
                    <div class="left-word">
                        <div class="left-percent"><span>6</span>%+6%</div>
                        <p class="little-info">年利率</p>
                    </div>
                    <div class="right-word">
                        <div class="right-days"><span>15</span>天</div>
                        <p class="little-info">期限</p>
                    </div>
                </div>
                <van-progress :percentage="72" />
                <div class="cash">
                    <div class="remain-money cash-content">
                        <p>10000</p>
                        <p>剩余金额(元)</p>
                    </div>
                    <div class="total-money cash-content">
                        <p>1400000</p>
                        <p>总金额(元)</p>
                    </div>
                </div>
             </div>

             <ul class="novice-typelist">
                 <li class="novice-typeitem border-bottom">
                     <div class="left-typeitem">项目类型</div>
                     <div class="right-typeitem">信用贷</div>
                 </li>
                 <li class="novice-typeitem border-bottom">
                     <div class="left-typeitem">起息时间</div>
                     <div class="right-typeitem">放款日起息</div>
                 </li>
                 <li class="novice-typeitem border-bottom">
                     <div class="left-typeitem">招募期</div>
                     <div class="right-typeitem">15天</div>
                 </li>
                <li class="novice-typeitem border-bottom">
                     <div class="left-typeitem">相关协议</div>
                     <div class="right-typeitem"><img src="/images/manage/return.png"/></div>
                 </li>
             </ul>
             
        </div>
        <div class="novice-tab border-top">
             <div class="tab-cash">投标金额</div>
             <input name="tab-input" v-model="money" placeholder="￥最小投金额100.00元" type="text">
             <div class="tab-confirm" @click="gonovice">投标</div>
        </div>
    </div>
    <router-view></router-view>
    </div>
</template>
    
<script>
import { Progress } from 'vant';
import AppHeader from '../../components/Header'
export default {
    components:{
        [AppHeader.name]:AppHeader,
        [Progress.name]:Progress
    },
    data(){
        return {
            money:''
        }
    },
    methods:{
        gonovice(){
            if(this.money && this.money>=100){
                this.$router.push(`/manage/novice/bidnow/${this.money}`);
            }else{
                this.money="";
            }
        }
    }
}
</script>

<style>

.van-progress{
    margin-top:1.04rem;
}
.van-progress .van-progress__pivot{
    color:#666 !important;
    background:#fff !important;
    top:-0.4rem;
}   
</style>

<style lang="scss" scoped>
    #novice{
        .novice-wrap{
            position:absolute;
            top:1.1733rem;
            bottom:0;
            background:#fff;
            padding: 0 0.5333rem;
            box-sizing:border-box;
            width:100%;
            .hot{
                margin-bottom:0.2667rem;
                width:100%;
                .novice-title{
                margin-top:0.5333rem;
                margin-bottom:1.04rem;
                font-size:0.2933rem;
                color:#333;
                span{
                    background:#f95554;
                    color:#fff;
                    margin-left:0.16rem;
                    padding:0 0.0667rem;
                    border-radius:0.0667rem;
                }
                i{
                    padding:0 0.0667rem;
                     margin-left:0.16rem;
                    color:#d5ae6a;
                    border:solid 0.0133rem #d5ae6a;
                }
                }
                 .big-word{
                    width:100%;
                    display:flex;
                    justify-content: space-between;
                .left-word{
                    text-align:center;
                    flex:1;
                    .left-percent{
                    font-size:0.4rem;
                    color:#333;
                    // margin-left:1.76rem;
                    span{
                        font-size:0.8133rem;
                        font-weight:bold;
                    }
                    }
                }
                .little-info{
                    font-size:0.2667rem;
                    line-height:1.12rem;
                    color:#9da4ad;
                    // margin-left:1.52rem;
                    text-align:center;
                }
                .right-word{
                    text-align:center;
                    flex:1;
                    .right-days{
                    font-weight:bold;
                    font-size:0.4667rem;
                    color:#333;
                    // margin-right:1.0533rem;
                    span{
                        font-size:0.8rem;
                    }
                }
                }
                
                }

                .cash{
                    display:flex;
                    justify-content: space-between;
                    .cash-content{
                        p{
                            &:nth-of-type(1){
                                font-size:0.48rem;
                                font-family:DIN Alternate;
                                font-weight:bold;
                                color:rgba(51,51,51,1);
                                line-height:1.0133rem;
                            }
                            &:nth-of-type(2){
                                font-size:0.3467rem;
                                font-family:"Adobe Heiti Std";
                                font-weight:bold;
                                color:rgba(102,102,102,1);
                                line-height:0.2667rem;
                            }
                        }
                        &.total-money{
                            display:flex;
                            flex-direction:column;
                            align-items:flex-end;
                        }
                    }
                }
            }

            .novice-typelist{
                margin-top:0.2667rem;
                .novice-typeitem{
                    display:flex;
                    justify-content:space-between;
                    line-height:1.6667rem;
                    align-items:center;
                    .left-typeitem{
                        font-size:0.4rem;
                        font-family:"PingFang SC";
                        font-weight:400;
                        color:rgba(51,51,51,1);
                        
                    }
                    .right-typeitem{
                        font-size:0.4rem;
                        font-family:"PingFang SC";
                        font-weight:bold;
                        color:rgba(51,51,51,1);
                       img{
                           height:0.1333rem;
                           width:0.1333rem;
                           vertical-align:middle;
                       } 
                    }   
                }
            }
        }

       .novice-tab{
           height:1.3067rem;
           display:flex;
           position:absolute;
           justify-content: space-between;
           left:0;
           width:100%;
           bottom:0;
           height:1.3067rem;
            .tab-cash{
                width:0.88rem;
                height:0.9067rem;
                font-family:"PingFang SC";
                font-weight:500;
                font-size:0.3733rem;
                color:rgba(51,51,51,1);
                margin:auto 0;
                margin-left:0.5333rem;
            }
            input[name="tab-input"]{
                width:3.5067rem;
                height:0.8933rem;
                background:rgba(248,248,248,1);
                border:1px solid rgba(220,220,220,1);
                font-size:0.32rem;
                margin:auto 0;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(153,153,153,1);
                line-height:0.2667rem;
                opacity:0.5;
                border:solid 0.0133rem #DCDCDC;
            }
            .tab-confirm{
                width:4.0933rem;
                height:1.3067rem;
                background:rgba(42,137,250,1);
                text-align:center;
                font-size:0.64rem;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(254,254,254,1);
                line-height:1.3067rem;
            }
       }
    }
</style>