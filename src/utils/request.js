import store from "@/store";
import router from "@/router";
import axios from 'axios'
import { Message } from "element-ui";
// axios.defaults.withCredentials = true;//配合后端拿到cookie中的值（打包后放到服务器上则不需要）
console.warn(process.env)

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 3000,
})

// 接口白名单不需要校验token的api
const apiwhitelist = ['/captcha', '/login', '/regist']

// request interceptor(请求拦截器)
service.interceptors.request.use((request) => {
  // 前端请求头中的字段都会转成首字母, 但后端接收到的都是小写
  request.headers['Authorization'] = store.getters.getToken || ''
  const { url, headers } = request
  if (apiwhitelist.includes(url)) return Promise.resolve(request)
  const token = headers.Authorization
  if (token) return Promise.resolve(request)
  Message.error("前端拦截: 没有获取到token")
  router.replace({ path: '/login', name: 'login', query: { type: 1 } })
}, (error) => {
  Message.error(`request-err: ${error}`)
  return Promise.reject(error)
})

// respone interceptor(应答拦截器)
service.interceptors.response.use((response) => {
  return Promise.resolve(response.data);
}, (error) => {
  Message.error(`response-err: ${error}`)
  return Promise.reject(error)
})

export default service