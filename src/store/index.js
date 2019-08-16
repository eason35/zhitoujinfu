import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import login from './modules/login'
import mine from './modules/mine'

export default new Vuex.Store({
    modules:{
        login,
        mine 
    }
})
