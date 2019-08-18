<template>
    <ul class="record-list">
        <li class="record-item border-top" 
            v-for="(item,index) in listData" :key="index"
            >
            <div class="touxiang">
                <img :src="item.picUrl" alt="">
                <div class="detail">
                    <h3>{{item.name}}</h3>
                    <p>{{item.time}}</p>
                </div>
            </div>
           
            <div class="money">￥{{item.money}}.00</div>
        </li>
    </ul>
</template>

<script>
export default {
    name:'record-list',
    props:{
       listData:Array 
    }
}
</script>

<style lang="scss" scoped>
    .record-list{
        .record-item{
            display:flex;
            justify-content:space-between;
            padding:0.5333rem 0;
            .touxiang{
                display:flex;
                align-self:center;
                img{
                    width:0.8133rem;
                    height:0.8133rem;
                }
                .detail{
                    padding-left:0.4267rem;
                    h3{
                        width:0.8933rem;
                        height:0.4267rem;
                        font-size:0.4533rem;
                        font-family:PingFang SC;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                        line-height:0.2667rem;
                    }
                    p{
                        height:0.2rem;
                        font-size:0.2667rem;
                        font-weight:500;
                        color:rgba(153,153,153,1);
                        line-height:0.2667rem;
                        padding-top:0.1333rem;
                    }
                }
            }
            
            .money{
                align-self: center;
                width:2.4933rem;
                height:0.4rem;
                font-size:0.4533rem;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height:0.2667rem;
            }
        }
    }
</style>