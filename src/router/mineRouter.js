export default {
    path:'/mine',
    component:()=>import('../pages/Mine/Mine'),
    children:[
        // 实名认证
        {
            path:'realname',
            component:()=>import('../pages/Mine/RealName/RealName.vue')
        },
        // 信息
        {
            path:'message',
            component:()=>import('../pages/Mine/Message/Message.vue'),
            children:[
                {
                    path:'detail/:list_id',
                    component:()=>import('../pages/Mine/Message/MessageDetail.vue')
                }
            ]
        },
        // 资产构成
        {
            // 资产
            path:'property',
            component:()=>import('../pages/Mine/Property/Property.vue'),
            children:[
                {
                    // 账单
                    path:'bill',
                    component:()=>import('../pages/Mine/Property/Bill.vue')
                },
                {
                    // 提现
                    path:'withdrawal',
                    component:()=>import('../pages/Mine/Property/Withdrawal.vue')
                },
                {
                    // 充值
                    path:'recharge',
                    component:()=>import('../pages/Mine/Property/Recharge.vue')
                }
            ]
        }
    ]
}