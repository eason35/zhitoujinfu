<template>
    <div class="app">
         
         <!-- 如果没有登陆 -->
         <app-login v-if="!isLogin"/>
        

        <router-view></router-view>

         <!-- tab-bar -->
         <tab-bar/> 
    </div>
</template>
<script>


import {mapState} from 'vuex';

import Login from './pages/common/Login'
import TabBar from './components/Tabbar'
export default {
    components:{

        [Login.name]:Login,
        [TabBar.name]:TabBar
    },
    computed:{
        ...mapState({
            isLogin:state=>state.login.isLogin
        })
    }
}
</script>

<style>

</style>
