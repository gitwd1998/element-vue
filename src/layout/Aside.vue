<template>
  <el-menu
    :default-active="$route.path"
    router
    unique-opened
    :collapse="collapse"
    class="el-menu-vertical-demo"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-grape" /><span>基础组件</span>
      </template>
      <el-menu-item index="/layout">Layout 布局</el-menu-item>
      <el-menu-item index="/container">container 容器</el-menu-item>
      <el-menu-item index="/color">Color 色彩</el-menu-item>
      <el-menu-item index="/typography">Typography 字体</el-menu-item>
      <el-menu-item index="/border">Border 边框</el-menu-item>
      <el-menu-item index="/icon">Icon 图标</el-menu-item>
      <el-menu-item index="/button">Button 按钮</el-menu-item>
      <el-menu-item index="/link">Link 文字链接</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-watermelon" /><span>表单组件</span>
      </template>
      <el-menu-item index="/radio">Radio 单选框</el-menu-item>
      <el-menu-item index="/checkbox">Checkbox 多选框</el-menu-item>
      <el-menu-item index="/input">Input 输入框</el-menu-item>
      <el-menu-item index="/inputNumber">InputNumber 计数器</el-menu-item>
      <el-menu-item index="/select">Select 选择器</el-menu-item>
      <el-menu-item index="/cascader">Cascader 级联选择器</el-menu-item>
      <el-menu-item index="/switch">Switch 开关</el-menu-item>
      <el-menu-item index="/slider">Slider 滑块</el-menu-item>
      <el-menu-item index="/timePicker">TimePicker 时间选择器</el-menu-item>
      <el-menu-item index="/datePicker">DatePicker 日期选择器</el-menu-item>
      <el-menu-item index="/dataTimePicker"
        >DateTimePicker 日期时间选择器</el-menu-item
      >
      <el-menu-item index="/upload">Upload 上传</el-menu-item>
      <el-menu-item index="/rate">Rate 评分</el-menu-item>
      <el-menu-item index="/colorPicker">ColorPicker 颜色选择器</el-menu-item>
      <el-menu-item index="/transfer">Transfer 穿梭框</el-menu-item>
      <el-menu-item index="/form">Form 表单</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-cherry" /><span slot="title">数据组件</span>
      </template>
      <el-menu-item index="/table">Table 表格</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-apple" /><span slot="title">提示组件</span>
      </template>
      <el-menu-item index="/alert">Alert 警告</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-pear" /><span>导航组件</span>
      </template>
      <el-menu-item index="/navMenu">NavMenu 导航菜单</el-menu-item>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title">
        <i class="el-icon-orange" /><span>其他组件</span>
      </template>
      <el-menu-item index="/calendar">Calendar 走马灯</el-menu-item>
    </el-submenu>
    <el-submenu index="7">
      <template slot="title">
        <i class="el-icon-coffee" /><span>第三方</span>
      </template>
      <el-menu-item index="/wangEditor">wangeditor</el-menu-item>
      <el-menu-item index="/mavonEditor">mavon-editor</el-menu-item>
      <el-menu-item index="/vxeTable">vxe-table</el-menu-item>
      <el-menu-item index="/pdf">vue-pdf</el-menu-item>
    </el-submenu>
    <el-menu-item index="/waiting" disabled>
      <i class="el-icon-potato-strips"></i>
      <span>带开放</span>
    </el-menu-item>
    <li class="el-menu-item right" @click="handleCollapse">
      <i :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
    </li>
  </el-menu>
</template>
<script>
import { Menu, MenuItem, Submenu } from "element-ui";
export default {
  components: { elMenu: Menu, elSubmenu: Submenu, elMenuItem: MenuItem },
  data() {
    return {
      collapse: false,
    };
  },
  methods: {
    handleCollapse() {
      this.collapse = !this.collapse;
    },
  },
};
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 260px;
  // height: 500px;
  // min-height: 400px;
}
.right {
  text-align: right;
}
</style>