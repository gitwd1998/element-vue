<template>
  <el-container class="app">
    <el-header><component-header /></el-header>
    <el-container>
      <el-aside width="auto"><component-aside /></el-aside>
      <el-main>
        <transition name="page"><router-view /></transition>
        <el-backtop target=".app .el-container .el-main">
          <i class="el-icon-arrow-up" />
        </el-backtop>
      </el-main>
    </el-container>
    <el-footer>--- {{ $t("footer.footnote") }} ---</el-footer>
  </el-container>
</template>
<script>
import componentAside from "@/layout/Aside";
import componentHeader from "@/layout/Header";
import { getDomHeight } from "@/utils";
import { Aside, Container, Footer, Header, Main, Backtop } from "element-ui";
export default {
  components: {
    componentAside: componentAside,
    componentHeader: componentHeader,
    elContainer: Container,
    elHeader: Header,
    elAside: Aside,
    elMain: Main,
    elFooter: Footer,
    elBacktop: Backtop,
  },
  created() {
    this.$nextTick(() => {
      this.calcMainHeigth();
    });
  },
  methods: {
    calcMainHeigth() {
      let container = getDomHeight(".app");
      let header = getDomHeight(".el-header");
      let footer = getDomHeight(".el-footer");
      let main = container - header - footer;
      let dom = document.querySelector(".app .el-container");
      dom.style.height = main + "px";
    },
  },
};
</script>
<style lang="less">
.app {
  height: 100%;
  .el-main {
    position: relative;
    overflow-x: hidden;
    .box {
      position: absolute;
    }
  }
  .el-footer {
    text-align: center;
    font: lighter 12px/60px "youyuan";
  }
  .page-enter {
    transform: translateX(100px);
    opacity: 0;
  }
  .page-enter-active {
    transition: all 0.5s;
  }
  .page-enter-to {
    opacity: 1;
  }
  .page-leave {
    opacity: 1;
  }
  .page-leave-active {
    transition: all 0.5s;
  }
  .page-leave-to {
    transform: translateX(-100px);
    opacity: 0;
  }
}
</style>