<template>
  <el-menu
    :default-active="$route.path"
    router
    unique-opened
    :collapse="collapse"
    class="el-menu-vertical-demo"
  >
    <template v-for="nav in navList">
      <el-submenu
        v-if="nav.item.length"
        :index="nav.index"
        :key="nav.index"
        :disabled="nav.disabled"
      >
        <template slot="title">
          <i :class="nav.icon" /><span>{{ nav.title }} {{ nav.name }}</span>
        </template>
        <template v-for="item in nav.item">
          <el-submenu
            v-if="item.item.length"
            :key="item.index"
            :index="item.index"
            :disabled="item.disabled"
          >
            <template slot="title">
              <i :class="item.icon" />
              <span>{{ item.title }} {{ item.name }}</span>
            </template>
            <el-menu-item
              v-for="iItem in item.item"
              :key="iItem.index"
              :index="iItem.index"
              :disabled="iItem.disabled"
            >
              <i :class="iItem.icon"></i>
              <span>{{ iItem.title }} {{ iItem.name }}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item
            v-else
            :key="item.index"
            :index="item.index"
            :disabled="item.disabled"
          >
            <i :class="item.icon"></i>
            <span>{{ item.title }} {{ item.name }}</span>
          </el-menu-item>
        </template>
      </el-submenu>
      <el-menu-item
        v-else
        :key="nav.index"
        :index="nav.index"
        :disabled="nav.disabled"
      >
        <i :class="nav.icon"></i>
        <span>{{ nav.title }} {{ nav.name }}</span>
      </el-menu-item>
    </template>
    <li class="el-menu-item right" @click="handleCollapse">
      <i :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
    </li>
  </el-menu>
</template>
<script>
import { Menu, MenuItem, Submenu } from "element-ui";
import navList from "@/assets/json/navList.json";
export default {
  components: { elMenu: Menu, elSubmenu: Submenu, elMenuItem: MenuItem },
  data() {
    return {
      collapse: false,
      navList,
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