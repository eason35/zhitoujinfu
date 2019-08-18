<template>
    <div>
        <div class="page" id="manage">
        <ul class="manage-title">
            <li class="title-item" v-for="item in titleList" :key="item.id">
                <router-link :to="item.path">
                    <img :src="item.picUrl"/>
                    <p>{{item.title}}</p>
                </router-link>
            </li>
        </ul>
        <div class="big-title"><img src="/images/manage/fire.png" alt=""/><span>高人气</span></div>
        <div class="hot">
             <p class="plan">新手专享15天授权方案<span>限购一次</span><i>即转及到</i></p>
             <div class="big-word">
                 <div class="left-word">
                     <div class="left-percent"><span>6</span>%+6%</div>
                     <p class="little-info">历史参考扣费后利率</p>
                 </div>
                 <div class="right-word">
                     <div class="right-days"><span>15</span>天</div>
                     <p class="little-info">锁定期</p>
                 </div>
             </div>
             <div class="tender">
                <router-link class="toNovice" to="/manage/novice">立即投标</router-link>
             </div>
             <p class="lixi">
                 万元预计利息29.32元
             </p>
        </div>

        <div class="content-wrap">
            <div class="my-title">新手专享</div>
            <div class="exclusive" v-for="item in freshmanList" :key="item.id">
                <p class="newplan">新手专享<strong>{{item.days}}</strong>天授权方案<span>限购一次</span><i>即转及到</i></p>
                <div class="tender-wrap">
                    <div class="left-word">
                        <div class="left-percent"><span>{{item.rate}}</span>%+3.5%</div>
                        <p class="little-info">历史参考扣费后利率</p>
                    </div>
                    <div class="right-word">
                        <div class="right-days"><span>{{item.days}}</span>天</div>
                        <p class="little-info">锁定期</p>
                     </div>
                     <div class="tendernow">立即投标</div>
                </div>
            </div>

            <div class="my-title">转让即到</div>
            <div class="exclusive" v-for="item in transferList" :key="item.id">
                <p class="newplan">向日葵<strong>{{item.days}}</strong>天max方案<i>会员</i><i>转让即到</i></p>
                <div class="tender-wrap">
                    <div class="left-word">
                        <div class="left-percent"><span>{{item.rate}}</span>%+3.5%</div>
                        <p class="little-info">历史参考扣费后利率</p>
                    </div>
                    <div class="right-word">
                        <div class="right-days"><span>{{item.days}}</span>天</div>
                        <p class="little-info">锁定期</p>
                     </div>
                     <div :class="item.tender==='已满标'?'tenderfill':'tendernow'">{{item.tender}}</div>
                </div>
            </div>
        </div>  
    </div>

    <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            titleList:[
                {id:1,picUrl:'/images/manage/record.png',title:"投标记录",path:"/manage/biddingrecord"},
                {id:2,picUrl:'/images/manage/introduction.png',title:"项目说明",path:"/manage/description"},
                {id:3,picUrl:'/images/manage/agree.png',title:"相关协议",path:"/manage/agreements"},
            ],
            freshmanList:[
                {id:1,days:"30",rate:"6.5"},
                {id:2,days:"90",rate:"7"},
                {id:3,days:"180",rate:"7.8"}
            ],
            transferList:[
                {id:4,days:"365",rate:"9.8",tender:"立即投标"},
                {id:5,days:"540",rate:"10.2",tender:"已满标"},
                {id:6,days:"730",rate:"10.4",tender:"立即投标"},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    #manage{
        box-sizing:border-box;
        padding:0 0.56rem;
        .manage-title{
            display:flex;
            justify-content:space-between;
            .title-item{
                padding:0.5333rem 0.2667rem 0 0.2667rem;
                img{
                    height:0.8267rem;
                    width:1rem;
                }
                p{
                    font-size:0.2667rem;
                    line-height:0.64rem;
                    font-size:#333;
                }
            }
        }
        .big-title{
            margin:0.4667rem 0 0.5333rem 0;
            img{
                width:0.4rem;
                height:0.4667rem;
            }
            span{
                font-size:0.4667rem;
                font-weight:bold;
                margin-left:0.2267rem;
            }
        }
        .hot{
            padding-top:0.6667rem;
             box-shadow:rgba(0,0,0,.2) 0 0.0133rem 0.2rem 0rem;
            .plan{
                margin-left:0.4667rem;
                margin-bottom:1.04rem;
                font-size:0.2933rem;
                font-size:#333;
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
                display:flex;
                justify-content: space-between;
                .left-word{
                    text-align:center;
                    flex:1;
                    .left-percent{
                    font-size:0.4rem;
                    color:#fa5555;
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
                    font-size:0.4667rem;
                    color:#333;
                    // margin-right:1.0533rem;
                    span{
                        font-size:0.8rem;
                    }
                }
                }
                
            }
            .tender{
                height:1.1867rem;
                width:7.7733rem;
                background:rgba(42,137,250,1);
                border-radius:0.6rem;
                font-size:0.4rem;
                font-family:'PingFangSC-Regular';
                font-weight:400;
                
                line-height:1.1867rem;
                text-align:center;
                margin:0 auto;
                .toNovice{
                display:inline-block;
                height:100%;
                width:100%;
                color:rgba(254,254,255,1);
                }
            }
            .lixi{
                line-height:1.4933rem;
                font-size:0.32rem;
                color:#333;
                text-align:center;
            }    
        }
        .content-wrap{
          
            .my-title{
            line-height:1.5733rem;
            font-size:0.5067rem;
            font-weight:bold;
            // background:#fff;
            }
            .exclusive{
                background:#fff;
                box-shadow:rgba(0,0,0,.2) 0 0.0133rem 0.2rem 0rem;
                padding:0.5333rem;
                margin-bottom:0.2667rem;
                .newplan{
                margin-left:0.4667rem;
                margin-bottom:1.04rem;
                font-size:0.2933rem;
                font-size:#333;
                
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
                .tender-wrap{
                    display:flex;
                    .left-word{
                        text-align:center;
                        flex:1;
                        .left-percent{
                        font-size:0.4rem;
                        color:#fa5555;
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
                        font-size:0.4667rem;
                        color:#333;
                        // margin-right:1.0533rem;
                        span{
                            font-size:0.8rem;
                            }
                        }
                    }
                    .tendernow{
                        height:0.8rem;
                        width:1.88rem;
                        color:#fff;
                        background:#2a89fa;
                        line-height:0.8rem;
                        text-align:center;
                        border-radius:0.4rem;
                    }
                    .tenderfill{
                        height:0.8rem;
                        width:1.88rem;
                        color:#fff;
                        background:#b7b7b7;
                        line-height:0.8rem;
                        text-align:center;
                        border-radius:0.4rem;
                    }
                }
            }
        }
    }
</style>