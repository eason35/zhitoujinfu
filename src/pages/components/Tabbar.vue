<template>
    <nav class="tab-bar">
        <template v-for="item in list">
            <router-link class="tab-item"  :key="item.id" :to="item.path">
                <span>{{item.name}}</span>
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
                {id:1,name:"首页",path:"/home"},
                {id:2,name:"理财",path:"/manage"},
                {id:3,name:"我的",path:"/mine"}
            ],
            selectId:1
        }
    }
}
</script>

<style lang="scss" scoped>
    .tab-bar{
        position:absolute;
        left:0;
        bottom:0;
        height:1.3067rem;
        width:100%;
        display:flex;
        .tab-item{
            flex:1; 
        }
    }
</style>