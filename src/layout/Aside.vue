<template>
  <el-menu :default-active="$route.path" router unique-opened>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-grape" /><span>基础组件</span>
      </template>
      <el-menu-item index="/layout">Layout布局</el-menu-item>
      <el-menu-item index="/container">container容器</el-menu-item>
      <el-menu-item index="/color">Color色彩</el-menu-item>
      <el-menu-item index="/typography">Typography字体</el-menu-item>
      <el-menu-item index="/border">Border边框</el-menu-item>
      <el-menu-item index="/icon">Icon图标</el-menu-item>
      <el-menu-item index="/button">Button按钮</el-menu-item>
      <el-menu-item index="/link">Link文字链接</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-watermelon" /><span>表单组件</span>
      </template>
      <el-menu-item index="/radio">Radio单选框</el-menu-item>
      <el-menu-item index="/checkbox">Checkbox多选框</el-menu-item>
      <el-menu-item index="/input">Input输入框</el-menu-item>
      <el-menu-item index="/inputNumber">InputNumber计数器</el-menu-item>
      <el-menu-item index="/select">Select选择器</el-menu-item>
      <el-menu-item index="/cascader">Cascader级联选择器</el-menu-item>
      <el-menu-item index="/switch">Switch开关</el-menu-item>
      <el-menu-item index="/slider">Slider滑块</el-menu-item>
      <el-menu-item index="/timePicker"> TimePicker时间选择器 </el-menu-item>
      <el-menu-item index="/datePicker"> DatePicker日期选择器 </el-menu-item>
      <el-menu-item index="/dataTimePicker"
        >DateTimePicker日期时间选择器</el-menu-item
      >
      <el-menu-item index="/upload">Upload上传</el-menu-item>
      <el-menu-item index="/rate">Rate评分</el-menu-item>
      <el-menu-item index="/colorPicker">ColorPicker颜色选择器</el-menu-item>
      <el-menu-item index="/transfer">Transfer穿梭框</el-menu-item>
      <el-menu-item index="/form">Form表单</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-cherry" /><span slot="title">数据组件</span>
      </template>
      <el-menu-item index="/table">Table表格</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-apple" /><span slot="title">提示组件</span>
      </template>
      <el-menu-item index="/alert">Alert警告</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-pear" /><span>导航组件</span>
      </template>
      <el-menu-item index="/navMenu">NavMenu导航菜单</el-menu-item>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title">
        <i class="el-icon-orange" /><span>其他组件</span>
      </template>
      <el-menu-item index="/dialog">Dialog对话框</el-menu-item>
    </el-submenu>
    <el-submenu index="7">
      <template slot="title">
        <i class="el-icon-coffee" /><span>第三方</span>
      </template>
      <el-menu-item index="/editor">富文本编辑器</el-menu-item>
    </el-submenu>
    <el-menu-item index="/waiting" disabled>
      <i class="el-icon-potato-strips"></i>
      <span>带开放</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
import { Menu, MenuItem, Submenu } from "element-ui";
export default {
  components: { elMenu: Menu, elSubmenu: Submenu, elMenuItem: MenuItem },
};
</script>