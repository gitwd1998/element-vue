<template>
  <el-menu mode="horizontal" @select="handleSelect">
    <el-menu-item>
      <el-image :src="require('@/assets/img/element-ui.svg')" />
    </el-menu-item>
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>带开放</el-menu-item>
    <el-menu-item index="4">
      <a href="###" target="_blank">订单管理</a>
    </el-menu-item>
    <el-submenu index="lang">
      <template slot="title">{{ $t("lang.lang") }}</template>
      <el-menu-item index="zh">{{ $t("lang.zh") }}</el-menu-item>
      <el-menu-item index="en">{{ $t("lang.en") }}</el-menu-item>
    </el-submenu>
    <el-submenu index="user">
      <template slot="title">{{ username || $t("user") }}</template>
      <el-menu-item v-if="!username" index="login">{{
        $t("login")
      }}</el-menu-item>
      <el-menu-item v-if="!username" index="regist">{{
        $t("register")
      }}</el-menu-item>
      <el-menu-item v-if="username" index="logout">{{
        $t("logout")
      }}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
import {
  Menu,
  MenuItem,
  Submenu,
  Image,
  MessageBox,
  Message,
} from "element-ui";
export default {
  components: {
    elMenu: Menu,
    elMenuItem: MenuItem,
    elSubmenu: Submenu,
    elImage: Image,
  },

  computed: {
    username() {
      return this.$store.getters.getUserName;
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      if (keyPath[0] === "lang") {
        this.$i18n.locale = key;
        localStorage.setItem("lang", key);
      } else if (keyPath[0] === "user") {
        if (key === "login" || key === "regist") {
          this.$router.push({
            path: "login",
            name: "login",
            query: { type: Number(key === "login") },
          });
        } else if (key === "logout") {
          MessageBox.confirm("确定退出登录吗？", "提示", {
            type: "info",
          })
            .then(() => {
              Message.success("已退出当前用户");
              localStorage.removeItem("token");
              this.$store.commit("logout");
              this.$router.push({
                path: "info",
                name: "info",
              });
            })
            .catch(() => {});
        }
      }
    },
  },
};
</script>
<style lang="less" scoped>
.el-image {
  height: 100%;
}
</style>