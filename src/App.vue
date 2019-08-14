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
import store from './store'
import {mapState} from 'vuex';
import Home from "./pages/Home/Home"
import Manage from './pages/ManageMoney/Manage'
import Mine from './pages/Mine/Mine'
import Login from './pages/common/Login'
import TabBar from './pages/components/Tabbar'
export default {
    components:{
        [Home.name]:Home,
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
