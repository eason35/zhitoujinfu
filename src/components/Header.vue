<template>
    <div class="myheader">
         <div class="left" v-if="left" @click="leftAction">{{left}}</div>
         <div class="title" v-if="title">{{title}}</div>
         <div class="right" v-if="right">{{right}}</div>
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
        leftAction:Function
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
            line-height:1.1733rem;
            left:0.4667rem;
        }
        .right{
            top:0;
            position:absolute;
            line-height:1.1733rem;
            right:0.4667rem;
        }
        .title{
            text-align:center;
            line-height:1.1733rem;
        }
    }
</style>