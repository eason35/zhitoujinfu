<template>
      <div>
          <div class="page" id="home">
        <app-swiper class="banner">
            <app-swiper-item><img src="/images/home/home_banner.png"/></app-swiper-item>
            <app-swiper-item><img src="/images/home/home_banner.png"/></app-swiper-item>
            <app-swiper-item><img src="/images/home/home_banner.png"/></app-swiper-item>
        </app-swiper>
        <div class="safe">
            <div class="days"><img src="/images/home/home_anquan.png"/><span>平台已经合规运营<i class="blueword">1</i>年<i class="blueword">206</i>天</span></div>
            <div class="totaldata">

                <div class="showdata" @click="toInfo">
                    <p><span>530</span>亿+</p>
                    <p>累计总交易额(元)</p>
                </div>
                <div class="showdata" @click="toInfo">
                    <p><span>758</span>万+</p>
                    <p>累计注册用户(人)</p>
                </div>
                <div class="showdata" @click="toInfo">
                    <p><span>12</span>亿+</p>
                    <p>累计为用户赚取(元)</p>
                </div>

            </div>
        </div>

        <div class="fresh">
            <h1>新手福利</h1>
            <p class="title">新手入门即得超值好礼</p>
            <div class="gift">
                <img src="/images/home/home_licai.png" alt="">
                <div class="getit">点击领取</div>
                <p>已有<span>785234</span>人领取成功</p>
            </div>  
        </div>

        <div class="advantage">
             <p>互联网金融会员</p>
             <p>互联网金融会员</p>
             <p>互联网金融会员</p>
             <p>互联网金融会员</p>
        </div>

        <div class="explain">历史参考扣费利率不代表实际利率</div>
    </div>
        <router-view></router-view>
      </div>
</template>

<script>
import swiper from './children/swiper'
import swiperItem from './children/swiper-item'
export default {
    components:{
        [swiper.name]:swiper,
        [swiperItem.name]:swiperItem
    },
    methods:{
        toInfo(){
            this.$router.push('/home/info')
        }
    }
}
</script>

<style lang="scss" scoped>
    #home{
        .banner{
            width:100%;
            img{
                width:100%;
            }
        }
        .safe{
            margin-bottom:0.2533rem;
            padding:0.5333rem;
            background:#fff;
            .days{
                width:100%;
                background:lightblue;
                padding:0.1333rem 0;
                text-align:center;
                border-radius:0.0667rem;
                img{
                    height:0.6667rem;
                    
                }
                span{
                    margin-left:0.2667rem;
                    color:#000;
                    font-size:0.5333rem;
                    font-weight:bold;
                    .blueword{
                        color:deepskyblue;
                        font-size:0.5333rem;
                        font-weight:normal;
                    }
                }
            }
            .totaldata{
                
                display:flex;
                justify-content: space-between;
                .showdata{
                    width:2.8rem;
                    margin-top:0.5333rem;
                    background:deepskyblue;
                    p{
                        color:#fff;
                        font-size:0.32rem;
                        text-align:center;
                        span{
                            font-size:0.6667rem;
                            padding-right:0.1333rem;
                        }
                        &:nth-of-type(2){
                            padding-bottom:0.2667rem;
                        }
                    }
                }
            }

        }

        .fresh{
            background:#fff;
            margin-bottom:0.2667rem;
            h1{
                color:dodgerblue;
                text-align:center;
                margin-top:0.2667rem;
            }
            .title{
                line-height:0.5333rem;
                font-size: 0.32rem;
                color:#999;
                text-align:center;
            }
            .gift{
                width:6.6667rem;
                margin:0.1333rem auto;
                // border:solid 1px #999;
                box-shadow:rgba(0,0,0,.2) 0 0.0133rem 0.2rem 0rem;
                padding:0.2667rem;
                text-align:center;
                img{
                    width:100%;
                }
                .getit{
                    width:100%;
                    height:0.96rem;
                    background:rgba(42,137,250,1);
                    border-radius:0.48rem;
                    color:#fff;
                    font-size:0.32rem;
                    margin-top:0.4rem;
                    line-height:0.96rem;
                }
                p{
                    text-align:center;
                    font-size:0.32rem;
                    color:#333;
                    margin-top:0.2667rem;
                    span{
                        color:orange;
                    }
                }
            }

        }

        .advantage{
            margin-top:0.4rem;
            display:flex;
            justify-content:space-around;
            background:#eee;
            p{
            color:#999;
            }
        }

        .explain{
            margin-top:0.6667rem;
            color:#ddd;
            text-align:center;
        }
    }
    
</style>
