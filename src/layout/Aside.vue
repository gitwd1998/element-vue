<template>
  <el-menu
    :default-active="activeIndex"
    router
    unique-opened
    @select="handleSelect"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-grape" />
        <span>基础组件</span>
      </template>
      <el-menu-item index="1-1" route="/layout">Layout布局</el-menu-item>
      <el-menu-item index="1-2" route="/container">container容器</el-menu-item>
      <el-menu-item index="1-3" route="/color">Color色彩</el-menu-item>
      <el-menu-item index="1-4" route="/typography"
        >Typography字体</el-menu-item
      >
      <el-menu-item index="1-5" route="/border">Border边框</el-menu-item>
      <el-menu-item index="1-6" route="/icon">Icon图标</el-menu-item>
      <el-menu-item index="1-7" route="/button">Button按钮</el-menu-item>
      <el-menu-item index="1-8" route="/link">Link文字链接</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-watermelon" />
        <span>表单组件</span>
      </template>
      <el-menu-item index="2-1" route="radio">Radio单选框</el-menu-item>
      <el-menu-item index="2-2" route="checkbox">Checkbox多选框</el-menu-item>
      <el-menu-item index="2-3" route="input">Input输入框</el-menu-item>
      <el-menu-item index="2-4" route="inputNumber"
        >InputNumber计数器</el-menu-item
      >
      <el-menu-item index="2-5" route="Select">Select选择器</el-menu-item>
      <el-menu-item index="2-6" route="cascader"
        >Cascader级联选择器</el-menu-item
      >
      <el-menu-item index="2-7" route="switch">Switch开关</el-menu-item>
      <el-menu-item index="2-8" route="slider">Slider滑块</el-menu-item>
      <el-menu-item index="2-9" route="timePicker">
        TimePicker时间选择器
      </el-menu-item>
      <el-menu-item index="2-10" route="/datePicker">
        DatePicker日期选择器
      </el-menu-item>
      <el-menu-item index="2-11" route="/dataTimePicker"
        >DateTimePicker日期时间选择器</el-menu-item
      >
      <el-menu-item index="2-12" route="/upload">Upload上传</el-menu-item>
      <el-menu-item index="2-13" route="/rate">Rate评分</el-menu-item>
      <el-menu-item index="2-14" route="/colorPicker"
        >ColorPicker颜色选择器</el-menu-item
      >
      <el-menu-item index="2-15" route="/transfer">Transfer穿梭框</el-menu-item>
      <el-menu-item index="2-16" route="/form">Form表单</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-cherry" />
        <span slot="title">数据组件</span>
      </template>
      <el-menu-item index="3-1" route="/table">Table表格</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-apple" />
        <span slot="title">提示组件</span>
      </template>
      <el-menu-item index="4-1" route="/alert">Alert警告</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-pear" />
        <span>导航组件</span>
      </template>
      <el-menu-item index="5-1" route="/navMenu">NavMenu导航菜单</el-menu-item>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title">
        <i class="el-icon-orange" />
        <span>其他组件</span>
      </template>
      <el-menu-item index="6-1" route="/dialog">Dialog对话框</el-menu-item>
    </el-submenu>
    <el-submenu index="7">
      <template slot="title">
        <i class="el-icon-coffee" />
        <span>第三方</span>
      </template>
      <el-menu-item index="7-1" route="/editor">富文本编辑器</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
import { Menu, MenuItem, Submenu } from "element-ui";
export default {
  components: {
    elMenu: Menu,
    elSubmenu: Submenu,
    elMenuItem: MenuItem,
  },
  data() {
    return {
      activeIndex: sessionStorage.getItem("activeIndex") || "",
    };
  },
  methods: {
    handleSelect(index) {
      sessionStorage.setItem("activeIndex", index);
    },
  },
};
</script>