import axios from 'axios'

 export const get=async (url,params={})=>{
    try {
        let response = await axios.get(url,{
            params: params
        });
        if(response.status===200 && response.data.code===1){
            return response.data;
        }else{
            throw new Error();
        }
    } catch (error) {
        console.log(error)
        console.log('请求失败');
    }  
}

export const post=(url,params)=>{
    return  new Promise((resolve,reject)=>{
        axios.post(url,params,{
        })
        .then(response=>{
            
            if(response.status===200 && response.data.code===1){
                resolve(response.data);
            }
        }).catch(error=>{
            console.log('请求失败')
        })
    });
}



