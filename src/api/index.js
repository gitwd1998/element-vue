import request from '@/utils/request'
// 验证码
export function captcha() {
    return request({
        url: '/captcha',
        method: 'post',
    })
}
// 登录
export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}
// 注册
export function regist(data) {
    return request({
        url: '/regist',
        method: 'post',
        data
    })
}
// 列表
export function init() {
    return request({
        url: '/init',
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
        url: '/upload',
        method: 'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        data,
        params,
    })
}
