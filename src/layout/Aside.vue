<template>
  <el-menu
    :default-active="$route.path.match(/(\/[^\/]*)+?/g)[0] || ''"
    router
    unique-opened
    :collapse="collapse"
    class="el-menu-vertical-demo"
  >
    <template v-for="nav in navList">
      <BaseMenu v-if="nav.item.length" :key="nav.index" :menuData="nav" />
      <el-menu-item
        v-else
        :key="nav.index"
        :index="nav.index"
        :disabled="nav.disabled"
      >
        <i :class="nav.icon"></i>
        <span>{{ nav.title + " " + nav.name }}</span>
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
const BaseMenu = {
  props: {
    menuData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    elSubmenu: Submenu,
    elMenuItem: MenuItem,
  },
  render() {
    const { menuData } = this;
    return (
      <el-submenu
        index={menuData.index}
        key={menuData.index}
        disabled={menuData.disabled}
      >
        <template slot="title">
          <i class={menuData.icon} />
          <span>{menuData.title + " " + menuData.name}</span>
        </template>
        {menuData.item.map((item) =>
          item.item.length ? (
            <BaseMenu menuData={item} />
          ) : (
            <el-menu-item
              key={item.index}
              index={item.index}
              disabled={item.disabled}
            >
              <i class={item.icon} />
              <span>{item.title + " " + item.name}</span>
            </el-menu-item>
          )
        )}
      </el-submenu>
    );
  },
};
export default {
  components: {
    elMenu: Menu,
    elMenuItem: MenuItem,
    BaseMenu,
  },
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
// 解决侧边导航展开收缩突兀
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 260px;
  // height: 500px;
  // min-height: 400px;
}
.right {
  text-align: right;
}
</style>