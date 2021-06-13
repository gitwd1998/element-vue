import axios from 'axios'
import { Message } from "element-ui";
// axios.defaults.withCredentials = true;//配合后端拿到cookie中的值（打包后放到服务器上则不需要）
// 将token信息加到请求头中
// axios.defaults.headers.Authorization = localStorage.getItem('token')
console.warn(process.env)

let service = axios.create({
    baseURL: process.env.VUE_APP_BAES_URL,
    timeout: 3000,
})

// request interceptor(请求拦截器)
service.interceptors.request.use((request) => {
    // 前端请求头中的字段都会转成首字母, 但后端接收到的都是小写
    request.headers['Authorization'] = localStorage.getItem('token')
    let { url, headers } = request
    // 白名单, 不需要进行验证token的api
    var urlArr = ['/captcha', '/login', '/regest']
    if (urlArr.includes(url)) return Promise.resolve(request)
    const token = headers.Authorization
    if (!token) Message.error("前端拦截: 没有获取到token")
    // 在这做限制, 如果没有获取到token就不请求
    return Promise.resolve(request)
}, (error) => {
    Message.error(`request-err: ${error}`)
    return Promise.reject(error)
})

// respone interceptor(应答拦截器)
service.interceptors.response.use((response) => {
    let { data } = response
    if (Number(data.code) === 401) Message.error(data.msg)
    return Promise.resolve(response);
}, (error) => {
    Message.error(`response-err: ${error}`)
    return Promise.reject(error)
})

export default service