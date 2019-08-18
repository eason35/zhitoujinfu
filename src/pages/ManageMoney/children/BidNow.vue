<template>
    <div class="bid-now page subpage">
        <app-header title="投标" right="撤销" left="/images/back.png" class="border-bottom"
                :leftAction="()=>{this.$router.go(-1)}" :rightAction="()=>{cancel=true}" />
        <div class="bid-wrap">
            <div class="bid-progress " >
                 <div class="bid-detail">
                     <p><img src="/images/manage/logo.png" alt=""><span>海南智投金服有限公司</span></p>
                     <p>￥{{$route.params.money}}元</p>
                     <p v-text="cancel?'投标已撤回':'投标成功'"></p>
                 </div>
            </div>
            <div :style="cancel && {visibility:'hidden'}" class="bid-info border-bottom">
                <div class="info-wrap">
                    <div class="info-left">
                        <img src="/images/manage/bid_progress.png" alt="">
                    </div>
                    <div class="info-right">
                        <p class="start-time">07-11  星期一  确认投标  开始计算收益</p>
                        <p class="end-time">07-26  星期一  结束计算收益</p>
                    </div>
                </div>
                <p class="count">买入价格按照投标时间计算净值</p>
            </div>
            <div  class="bid-details" :class="cancel && 'border-top'">
                <h3 class="bid-status">投标信息</h3>
                <ul class="bid-list">
                    <li class="bid-item"><span>投标产品</span><i>新手专享15天授权方案</i></li>
                    <li class="bid-item"><span>投标金额</span><i>{{$route.params.money}}(元)</i></li>
                    <li class="bid-item"><span>投标时间</span><i>2019-8-18 20:51:21</i></li>
                </ul>
            </div>
        </div>
        <div class="bid-again">
            再投一笔
        </div>
    </div>
</template>

<script>
import AppHeader from '../../../components/Header'
export default {
    name:"bid-now",
    components:{
        [AppHeader.name]:AppHeader
    },
    data(){
        return {
            cancel:false
        }
    }
}
</script>

<style lang="scss" scoped>
    .bid-now{
        .bid-wrap{
            position:absolute;
            left:0;
            top:1.1733rem;
            bottom:1.3067rem;
            width:100%;
            .bid-progress{
                padding-top:1.2133rem;
                .bid-detail{
                    text-align:center;
                    img{
                        height:0.72rem;
                        width:0.72rem;
                    }
                    p{
                        font-size:0.32rem;
                        font-family:PingFang SC;
                        font-weight:bold;
                        color:rgba(0,0,0,1);
                        line-height:0.6667rem;
                    }
                }
            }
            .bid-info{
                padding:0 0.5333rem 0.44rem 0.5333rem ;
                margin-top:1.3733rem;
                .info-wrap{
                    display:flex;
                    .info-left{
                        img{
                            width:0.56rem;
                            height:1.72rem;
                        }
                    }
                    .info-right{
                        padding-top:0.1333rem;
                        padding-bottom:0.1333rem;
                        padding-left:0.2133rem;
                        flex:1;
                        display:flex;
                        flex-direction:column;
                        justify-content:space-between;
                        .start-time{
                            font-size:0.32rem;
                            font-family:PingFang SC;
                            font-weight:bold;
                            color:rgba(102,102,102,1);
                            line-height:0.2667rem;
                        }
                        .end-time{
                            font-size:0.32rem;
                            font-family:PingFang SC;
                            font-weight:bold;
                            color:rgba(102,102,102,1);
                            line-height:0.2667rem;
                        }
                    }
                }   
                .count{
                    font-size:0.32rem;
                    font-family:PingFang SC;
                    font-weight:bold;
                    color:rgba(102,102,102,1);
                    line-height:0.2667rem;
                    margin-top:0.84rem;
                }
            }

            .bid-details{
                padding:0 0.5333rem;
                .bid-status{
                    font-size:0.4rem;
                    font-family:PingFang SC;
                    font-weight:bold;
                    color:rgba(51,51,51,1);
                    line-height:1.3067rem;
                }
                .bid-list{
                    .bid-item{
                        display:flex;
                        justify-content:space-between;
                        font-size:0.32rem;
                        font-family:PingFang SC;
                        font-weight:400;
                        color:rgba(102,102,102,1);
                        line-height:0.7467rem;
                    }
                }
            }
        }

        .bid-again{
            height:1.3067rem;
            background:rgba(42,137,250,1);
            position:absolute;
            left:0;
            width:100%;
            bottom:0;
            font-size:0.64rem;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(254,254,254,1);
            line-height:1.3067rem;
            text-align:center;
        }
    }
</style>