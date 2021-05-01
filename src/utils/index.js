export const ROOT_API = '';
// 获取dom元素高度
export function getDomHeight(className) {
    let dom = document.querySelector(className);
    let height = dom && dom.offsetHeight || 0;
    return height;
}