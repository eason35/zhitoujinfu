import Vue from 'vue' 
import Router from 'vue-router'

import homeRouter from './homeRouter'
import manageRouter from './manageRouter'
import mineRouter from './mineRouter'
import loginRouter from './loginRouter'

Vue.use(Router);
const routes=[
    homeRouter,
    manageRouter,
    mineRouter,
    loginRouter
]
export default new Router({
    mode:'history',
    routes
})
