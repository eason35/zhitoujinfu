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
                    path:'detail/:message_id',
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
        },
         //三方绑定
         {
            path:'binding',
            component:()=>import("../pages/Mine/binding/Binding.vue"),
            children:[
                {
                    //申请微信授权
                path:'apply',
                component:()=>import('../pages/Mine/apply/Apply.vue')
                },
                {
                    //申请QQ授权
                path:'qq',
                component:()=>import('../pages/Mine/Qq/Qq.vue')
                }
            ]
        },
         //投标
         {
            path: 'tender',
            component: () => import('../pages/Mine/Tender/Tender'),
            children: [
                {
                    //收益记录
                    path: 'recording',
                    component: () => import('../pages/Mine/Tender/Recording')
                },
                {
                    //交易记录
                    path: 'transactions',
                    component: () => import('../pages/Mine/Tender/Transactions'),
                    children: [
                        {
                            //我的投标
                            path: 'completion',
                            component: () => import('../pages/Mine/Tender/Completion')
                        }
                    ]
                }
            ]
        },
        //银行卡
        {
            //选择银行卡
            path: 'bankamericard',
            component: () => import('../pages/Mine/BankAmericard/BankAmericard'),
            children: [
                {
                    //添加银行卡
                    path: 'bitcard',
                    component: () => import('../pages/Mine/BankAmericard/bank/BitCard')
                },
                {
                    //绑定成功
                    path: 'bankcard',
                    component: () => import('../pages/Mine/BankAmericard/bank/BankCard')
                }
            ]
        },
        //密码管理
        {
            // 密码管理
            path: 'password',
            component: () => import('../pages/Mine/Password/Password'),
            children: [
                {
                    //密码管理
                    path: 'entries',
                    component: () => import('../pages/Mine/Password/pass/Entries')
                },
                {
                    //平台交易密码管理
                    path: 'terrace',
                    component: () => import('../pages/Mine/Password/pass/Terrace')
                }
            ]
        }
    ]
}