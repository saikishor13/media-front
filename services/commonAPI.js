import axios from 'axios'
export const commonAPI = async(httpMethod,url,reqBody)=>{
    let reqconfig = {
        method:httpMethod,
        url:url,
        headers:{
            'Content-Type':'application/json',
        },
        data:reqBody
    }
    return await axios(reqconfig).then((res)=>{
        return res
    }).catch(err=>{
        return err
    })
}