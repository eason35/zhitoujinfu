export default {
    path:'/mine',
    component:()=>import('../pages/Mine/Mine'),
    children:[
        // 实名认证
        {
            path:'authentication',
            component:()=>import('../pages/Mine/children/Authentication.vue'),
            children:[
                {
                    path:'submit',
                    component:()=>import('../pages/Mine/children/AuthenticationPass.vue')
                }
            ]
        },
        // 信息
        {
            path:'message',
            component:()=>import('../pages/Mine/children/Message.vue'),
            children:[
                {
                    path:'detail/:list_id',
                    component:()=>import('../pages/Mine/children/MessageDetail.vue')
                }
            ]
        },
        // 资产构成
        {
            // 资产
            path:'property',
            component:()=>import('../pages/Mine/children/Property.vue'),
            children:[
                {
                    // 账单
                    path:'bill',
                    component:()=>import('../pages/Mine/children/Bill.vue')
                },
                {
                    // 提现
                    path:'withdrawal',
                    component:()=>import('../pages/Mine/children/Withdrawal.vue')
                },
                {
                    // 充值
                    path:'recharge',
                    component:()=>import('../pages/Mine/children/Recharge.vue')
                }
            ]
        }
    ]
}