<template>
  <ul>
    <li>git指令删除本地分支: git branch -d 'branch'</li>
    <li>git指令删除远端分支: git push origin --delete 'branch'</li>
    <li>
      侧边导航在路由模式时index属性可以当作router属性用，index的之前面可以加 /
      也可以不加，加上可以配合:default-active="$route.path"使用实现页面刷新后地址栏和导航栏的统一
    </li>
    <li>
      富文本编辑器中，当鼠标悬浮在菜单上时会有文字提示气泡，el-main默认的overflow：auto会使超出el-main组件的元素隐藏，从而导致文字提示气泡显示不完整，以此将el-main的改样式修改为unset
    </li>
    <li>
      element-ui的日期选择器选中的时间和输出的时间不一致bug，在设置输出日期格式时用MM表示月份不要使用mm表示月份
    </li>
    <li>
      【代做】给导航加一个搜索功能搜索到的模块页面直接展示出来，搜索错误后展示404页面
    </li>
    <li>
      在由多级导航时vue.config.js配置的 publicPath: ''
      会导致处于多级导航的页面刷新时和跳转时报错（Uncaught SyntaxError:
      Unexpected token '尖括号'）
    </li>
  </ul>
</template>
<script>
import x from "vuex";
console.log(x);
export default {
  methods: {},
};
</script>