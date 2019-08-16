<template>
    <div class="myheader">
<<<<<<< HEAD
         <div class="left" v-if="left" @click="leftAction">{{left}}</div>
=======
         <div class="left" v-if="left" @click="leftAction">
             <img :src="left" alt="">
         </div>
>>>>>>> 52f8685e2e407b65913b21b3904ed6a9786ab3d2
         <div class="title" v-if="title">{{title}}</div>
         <div class="right" v-if="right" @click="rightAction">{{right}}</div>
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
<<<<<<< HEAD
        leftAction:Function
=======
        leftAction:Function,
        rightAction:Function
>>>>>>> 52f8685e2e407b65913b21b3904ed6a9786ab3d2
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
<<<<<<< HEAD
            line-height:1.1733rem;
            left:0.4667rem;
=======
            margin-top: 0.3333rem;
            left:0.5467rem;
            width: 0.2933rem;
            height: 0.5067rem;
            img{
                width: 100%;
            }
>>>>>>> 52f8685e2e407b65913b21b3904ed6a9786ab3d2
        }
        .right{
            top:0;
            position:absolute;
            line-height:1.1733rem;
<<<<<<< HEAD
            right:0.4667rem;
=======
            right:0.5467rem;
>>>>>>> 52f8685e2e407b65913b21b3904ed6a9786ab3d2
        }
        .title{
            text-align:center;
            line-height:1.1733rem;
        }
    }
</style>