import {get,post} from '../../request'

export default {
      namespaced:true,
      state:{
          isLogin:false
      },
      mutations:{
          
      },
      actions:{
          //请求判断手机号是否注册
        requestIsRegister(phone){
            post('/api/login_1/',{"phone":phone})
            .then(data=>{
                console.log(data);
            })   
        },
        //请求验证码
        requestCode(phone){
           get('/api/login_2/',{"phone":phone})
            .then(data=>{
                console.log(data);
            })  
        },
        //通过手机号和密码登录
        requestLoginByPass(params){
            post('/api/login_3/',{"phone":params.phone,'login_psd':params.pass})
            .then(data=>{
                console.log(data);
            })
            .catch(error=>{
                console.log(error);
            })
        }
    }
}