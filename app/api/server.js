import axios from 'axios';
/**
 * 主要params参数介绍
 * @param method {string} 方法
 * @param url {string} 请求地址
 * @param timeout {number} 请求超时时间 默认 30000
 * @param params {object} 请求的参数
 * @param headers {string} 指定请求头信息
 * @param withCredentials {boolean} 请求是否携带本地cookies信息默认开启
 * @param validateStatus {func} 默认判断请求成功的范围 200 - 300
 * @return {Promise}
 */

 export default class Server {
     axios(method, url, params) {
         return new Promise((resolve,reject) => {
            if(typeof params !== 'object') params = {};
            let _option = {
                method,
                url,
                timeout: 30000,
                params: null,
                data: null,
                headers: null,
                widthCredentials: true,
                vilidateStatus: (status) => {
                    return status >=200 && status <300;
                },
                ...params
            };
            axios.request(_option).then(res => {
                resolve(typeof res.data === 'object' ? res.data: JSON.parse(res.data));
            }, error=> {
                if(error.response) {
                    reject(error.response.data)
                }else {
                    reject(error);
                }
            })
         })
     }
 }