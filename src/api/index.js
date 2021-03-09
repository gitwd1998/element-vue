import request from '@/utils/request'
import { ROOT_API } from "@/utils/utils";
// 验证码
export function captcha() {
    return request({
        url: ROOT_API + '/captcha',
        method: 'post',
    })
}
// 登录
export function login(data) {
    return request({
        url: ROOT_API + '/login',
        method: 'post',
        data
    })
}
// 注册
export function regist(data) {
    return request({
        url: ROOT_API + '/regist',
        method: 'post',
        data
    })
}
// 列表
export function init() {
    return request({
        url: ROOT_API + '/init',
        method: 'post',
    })
}
// 查看
// 添加
// 删除
// 修改
// 导入
export function upload(data, params) {
    return request({
        url: ROOT_API + '/upload',
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        data,
        params,
    })
}
