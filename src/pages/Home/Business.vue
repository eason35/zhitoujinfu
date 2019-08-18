<template>
    <div class="page subpage" id="business">
         <p class="time">平台数据<span>(截止至)</span></p>
         <div class="total-money">
            <p class="detail">平台自成立以来的累计交易金额</p>
            <p class="cash">
                854,526,522.6<span>元</span>
            </p>
            <p class="total-times">累计交易笔数:</p>
         </div>
         <div class="rest">
             理财余额
            <span>305,145,522<i>元</i></span>
         </div>
         <ul class="count-list">
             <li class="list-item">
                 <p class="count-top">累计理财人数量</p>
                 <div class="count-bottom">5591234人</div>
             </li>
             <li class="list-item">
                 <p class="count-top">累计理财人数量</p>
                 <div class="count-bottom">5591234人</div>
             </li>
             <li class="list-item">
                 <p class="count-top">累计理财人数量</p>
                 <div class="count-bottom">5591234人</div>
             </li>
             <li class="list-item">
                 <p>累计理财人数量</p>
                 <div class="count-bottom">5591234人</div>
             </li>
         </ul>
         <div class="fees">
            <h2>收费标准</h2> 
         </div>
    </div>
</template>

<script>
export default {
    name:'business',

}
</script>

<style lang="scss" scoped>
     #business{
         position:absolute;
         left:0;
         top:2.3733rem;
         padding: 0 0.4667rem;
         box-sizing:border-box;

         .time{
             line-height:1.9733rem;
             font-size:0.44rem;
             color:#366ae9;
             font-weight:700;
             span{
                 font-size:0.3467rem;
                 font-weight:normal;
                 margin-left:0.3067rem;
             }
         }
        .total-money{
            background:linear-gradient(to right,#26a2ff,#353bc5);
            height:3.36rem;
            border-radius:0.0667rem;
            padding:0 0.4667rem;
            color:#fff;
            .detail{
                padding-top:0.7467rem;
                
                font-size:0.2933rem;
            }
            .cash{
                font-size:0.7733rem;
                
                span{
                    font-size:0.3733rem;
                    padding-left:0.0667rem;
                }
            }
            .total-times{
                
                font-size:0.2933rem;
                margin-top:0.48rem;
            }
            
        }
        .rest{
             line-height:1.8933rem;
             color:#757c88;
             
            span{
                float:right;
                color:#333;
                font-size:0.7467rem;
                i{
                    font-size:0.2933rem;
                }
            }
        }
        .count-list{
            display:flex;
            flex-wrap:wrap;
            width:100%;
            .list-item{
                width:49.5%;
                border-top:#ececec solid 0.0133rem;

                p{
                    font-size:0.3333rem;
                    color:#9196a0;
                    line-height:0.5333rem;
                }
                .count-bottom{
                    line-height:0.9333rem;
                    color:#333;
                    font-size:0.44rem;
                    font-weight:bold;
                }
                &:nth-of-type(2),&:nth-of-type(4){
                    padding-left:0.5733rem;
                    border-left:solid 0.0133rem #ececec;
                    box-sizing:border-box;
                }
            }
        }

        .fees{
            h2{
                color:#4676eb;
                line-height:1.8933rem;
            }
        }
     }
</style>