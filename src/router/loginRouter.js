export default {
    path:'/login',
    component:()=>import('../pages/common/login/Login'),
    children:[
        {
        path:"help",
        component:()=>import('../pages/common/login/children/Help')
        }
    ]
}