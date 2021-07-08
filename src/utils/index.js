export const ROOT_API = '';
/**
 * @desc 获取dom元素高度
 * @param {String} className dom元素的类
 * @returns 
 */
export function getDomHeight(className) {
    let dom = document.querySelector(className);
    let height = dom && dom.offsetHeight || 0;
    return height;
}
/**
 * @desc 格式化时间戳
 * @param {Number} timeStamp 时间戳
 * @returns
 */
export function dealTime(timeStamp) {
    const date = new Date(timeStamp);
    let Y = date.getFullYear()
    let M = date.getMonth()
    M = (M > 8 ? M + 1 : "0" + (M + 1))
    let D = date.getDate()
    D = (D > 9 ? D : "0" + D)
    return Y + "-" + M + "-" + D;
}
/**
 * 获取cookie
 * @param {String} key cookie集合中的指定key值
 * @returns 
 */
export function gitCookie(key) {
    let cookies = document.cookie.split(';').map(v => {
        let index = v.trim().split('=');
        let key = index[0];
        let value = index[1];
        return { [key]: value }
    })
    console.log(cookies)
    let temp = (cookies.find(v => v[key]) || {})[key];
    return temp || '';
}
/**
 * 获取地址栏参数
 * @param {String} key search集合中的指定key值
 * @returns 
 */
export function getUrlParam(key) {
    let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    let r = decodeURI(window.location.search).substr(1).match(reg);
    return r && unescape(r[2]);
}