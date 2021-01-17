<template>
  <el-container id="app">
    <el-header>
      <el-img :src="require('@/assets/img/element-ui.svg')" />
      <el-radio-group v-model="lang" size="mini" @change="handleChangeLang">
        <el-radio-button label="zh">{{ $t("lang.zh") }}</el-radio-button>
        <el-radio-button label="en">{{ $t("lang.en") }}</el-radio-button>
      </el-radio-group>
    </el-header>
    <el-container>
      <el-aside><component-aside /></el-aside>
      <el-main><router-view /></el-main>
    </el-container>
    <el-footer>--- {{ $t("footer.footnote") }} ---</el-footer>
  </el-container>
</template>
<script>
console.log(process);
import componentAside from "./layout/Aside";
import {
  Aside,
  Container,
  Footer,
  Header,
  Image,
  Main,
  RadioButton,
  RadioGroup,
} from "element-ui";
export default {
  components: {
    componentAside: componentAside,
    elContainer: Container,
    elHeader: Header,
    elAside: Aside,
    elMain: Main,
    elFooter: Footer,
    elImg: Image,
    elRadioGroup: RadioGroup,
    elRadioButton: RadioButton,
  },
  data() {
    return {
      lang: sessionStorage.getItem("lang") || "zh",
    };
  },
  methods: {
    handleChangeLang() {
      this.$i18n.locale = this.lang;
      sessionStorage.setItem("lang", this.lang);
    },
  },
};
</script>
<style lang="less">
#app {
  .el-header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    justify-content: space-between;
  }
  .el-footer {
    text-align: center;
    font: lighter 12px/60px "youyuan";
  }
}
</style>
