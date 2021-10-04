<template>
  <el-container class="app">
    <el-header><component-header /></el-header>
    <el-container>
      <el-aside width="auto">
        <el-scrollbar><component-aside /></el-scrollbar>
      </el-aside>
      <el-main>
        <el-scrollbar>
          <transition name="page"><router-view /></transition>
          <el-backtop target=".app .el-main .el-scrollbar__wrap">
            <i class="el-icon-arrow-up" />
          </el-backtop>
        </el-scrollbar>
      </el-main>
    </el-container>
    <el-footer>--- {{ $t("footer.footnote") }} ---</el-footer>
  </el-container>
</template>
<script>
import componentAside from "@/layout/Aside";
import componentHeader from "@/layout/Header";
import { getDomHeight } from "@/utils";
import {
  Aside,
  Container,
  Footer,
  Header,
  Main,
  Backtop,
  Scrollbar,
} from "element-ui";
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
    elScrollbar: Scrollbar,
  },
  mounted() {
    this.$nextTick(() => {
      this.calcMainHeigth();
    });
    // 监听dom树变化
    // let MutationObserver =
    //   window.MutationObserver ||
    //   window.WebkitMutationObserver ||
    //   window.MozMutationObserver;
    // let observer = new MutationObserver((mutationsList, observer) => {
    //   console.log(mutationsList, observer);
    //   this.calcMainHeigth();
    // });
    // observer.observe(document.getElementsByClassName("app")[0], {
    //   attributes: true,
    //   children: true,
    //   subtree: true,
    // });
    window.onresize = () => {
      this.calcMainHeigth();
    };
    let aside = document.getElementsByClassName("el-aside")[0];
    document.onclick = (e) => {
      console.log(aside.contains(e.target));
      console.log(aside.isEqualNode(e.target));
      console.log(aside.isSameNode(e.target));
    };
  },
  beforeDestroy() {
    // 否则当获取不到.el-container元素的时候会报错
    document.onresize = null;
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
<style lang="less" scoped>
.app {
  height: 100%;
  background: #ffffff;
  .el-main {
    padding: 20px 0;
    .el-scrollbar__view {
      position: relative;
      .box {
        position: absolute;
        left: 20px;
        right: 20px;
      }
    }
  }
  .el-scrollbar {
    height: 100%;
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
  .el-footer {
    text-align: center;
    background: radial-gradient(#fff, #eee, #fff);
    font: lighter 12px/60px "youyuan";
  }
  .page-enter {
    transform: translate(100%, 0);
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
    transform: translate(-100%, 0);
    opacity: 0;
  }
}
</style>