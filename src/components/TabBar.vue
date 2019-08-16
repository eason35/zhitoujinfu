<template>
    <nav class="tab-bar">
        <template v-for="item in list">
            <router-link class="tab-item"  :key="item.id" :to="item.path">

                <span class="icon" :style="item.path===$route.path ? {backgroundImage:'url('+item.selectUrl+')'}: {backgroundImage:'url('+item.imgUrl+')'}"></span>
                <span class="name">{{item.name}}</span>
                
            </router-link>
        </template>
    </nav>
</template>

<script>

export default {
    name:'tab-bar',
    data(){
        return {
            list:[
                {id:1,name:"首页",path:"/home",imgUrl:"/images/tab/home.png",selectUrl:"/images/tab/home_select.png"},
                {id:2,name:"理财",path:"/manage",imgUrl:"/images/tab/manage.png",selectUrl:"/images/tab/manage_select.png"},
                {id:3,name:"我的",path:"/mine",imgUrl:"/images/tab/mine.png",selectUrl:"/images/tab/mine_select.png"}
            ],
            selectId:1
        }
    }
}
</script>

<style lang="scss" scoped>
    .tab-bar{
        box-shadow:0px -2px 10px 0px rgba(71,70,70,0.22);
        background:rgba(255,255,255,1);
        position:absolute;
        left:0;
        bottom:0;
        height:1.3067rem;
        width:100%;
        display:flex;
        .tab-item{
            flex:1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 0.2667rem; 
            text-align: center;
            .icon{
                margin: 0 auto;
                height: 0.4533rem;
                width: 0.4533rem;
                background-size:contain;
                background-position:center; 
                background-repeat:no-repeat;
                margin-bottom: 0.1333rem; 
            }
        }
    }
</style>