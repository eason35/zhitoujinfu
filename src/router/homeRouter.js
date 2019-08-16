export default {
    path:'/home',
    component:()=>import('../pages/Home/Home'),
    children:[
        {
            path:'info',
            component:()=>import('../pages/Home/Info')
        }
    ]
}