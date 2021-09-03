import axios from "axios";

// 创建 封装 请求拦截
let baseUrl = '' // https://127.0.0.1:8080

// 创建axios实例，在这里可以设置请求的默认配置
const instanceRequest = axios.create({    
    timeout: 10000, // 设置超时时间10s
    baseURL: baseUrl   // 根据自己配置的反向代理去设置不同环境的baseUrl
})
// 文档中的统一设置post请求头。下面会说到post请求的几种'Content-Type'
instanceRequest.defaults.headers.post['Content-Type'] = 'application/json'

/** 添加请求拦截器 **/
instanceRequest.interceptors.request.use(config => {
    config.headers['token'] = localStorage.getItem('token') || ''
    return config
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error)
})

/** 添加响应拦截器  **/
instanceRequest.interceptors.response.use(response => {
    // console.log(response)
    // 响应结果里的 statusText: ''是我与后台的约定，大家可以根据实际情况去做对应的判断
    if (response.statusText === '') {     
        return Promise.resolve(response.data)
    } else {
        return Promise.reject(response.data.message)
    }
}, error => {
    if (error.response) {
        // token或者登陆失效情况下跳转到登录页面，根据实际情况，在这里可以根据不同的响应错误结果，做对应的事。这里我以401判断为例
        if (error.response.status === 401) {    
            //针对框架跳转到登陆页面
            this.props.history.push('/login');
        }
        return Promise.reject(error)
    } else {
        return Promise.reject('请求超时, 请刷新重试')
    }
})

/* 统一封装get请求 */
export const get = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
        instanceRequest({
            method: 'get',
            url,
            params,
            ...config
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

/* 统一封装post请求  */
export const post = (url, data, config = {}) => {
    return new Promise((resolve, reject) => {
        instanceRequest({
            method: 'post',
            url,
            data,
            ...config
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

export default instanceRequest