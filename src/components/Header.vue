<template>
    <div class="myheader border-bottom">
         <div class="left" v-if="left" @click="leftAction ? leftAction() : null">
             <img :src="left" alt="">
         </div>
         <div class="title" v-if="title">{{title}}</div>
         <div class="right" v-if="right" @click="rightAction ? rightAction() : null">{{right}}</div>
    </div>
</template>

<script>
export default {
    name:'app-header',
    props:{
        title:{
            type:String,
            default:''
        },
        left:String,
        right:String,
        leftAction:Function,
        rightAction:Function
    }
}
</script>

<style lang="scss" scoped>
    .myheader{
        position:absolute;
        left:0;
        top:0;
        height:1.1733rem;
        width:100%;
        background:#fff;
        color:#333;
        font-size:0.4533rem;
        .left{
            position:absolute;
            margin-top: 0.3333rem;
            left:0.5467rem;
            width: 0.2933rem;
            height: 0.5067rem;
            img{
                width: 100%;
            }
        }
        .right{
            top:0;
            position:absolute;
            line-height:1.1733rem;
            right:0.5467rem;
        }
        .title{
            text-align:center;
            line-height:1.1733rem;
            font-size:0.4533rem;
            font-weight:bold;
            color: #333;
        }
    }
</style>