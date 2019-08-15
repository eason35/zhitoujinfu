<template>
    <div class="app">
         
         <!-- 登陆页面 -->
        

        <router-view></router-view>

         <!-- tab-bar -->   
         <tab-bar/> 
    </div>
</template>
<script>

import {mapState} from 'vuex';
import Login from './pages/common/login/Login'
import TabBar from './components/Tabbar'
export default {
    components:{
        [TabBar.name]:TabBar,
        [Login.name]:Login
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
