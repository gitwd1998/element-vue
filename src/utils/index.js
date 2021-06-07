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
    let date = new Date(timeStamp);
    return (
        date.getFullYear() +
        "-" +
        (date.getMonth() > 8
            ? date.getMonth() + 1
            : "0" + (date.getMonth() + 1)) +
        "-" +
        (date.getDate() > 9 ? date.getDate() : "0" + date.getDate())
    );
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