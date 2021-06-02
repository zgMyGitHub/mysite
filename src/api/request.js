import axios from 'axios';
import showMessage from "../utils/showMessage"

//创建一个拦截器
const ins = axios.create();
ins.interceptors.response.use(function(resp){
    if(resp.data.code !== 0){
        showMessage({
            content:resp.data.msg,
            type:"iconcuowu"
        })
        return [];
    }
    return resp.data.data;
});

export default ins;