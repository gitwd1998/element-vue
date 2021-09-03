<template>
  <div class="box">
    <el-button size="mini" @click="handleLogHTML">输出HTML</el-button>
    <el-button size="mini" @click="handleLogTEXT">输出TEXT</el-button>
    <el-button size="mini" @click="handleLogJSON">输出JSON</el-button>
    <el-button size="mini" @click="handleClear">清除内容</el-button>
    <el-button size="mini" @click="handleDestroy">销毁插件</el-button>
    <el-button size="mini">全局语言：{{ this.$i18n.locale }}</el-button>
    <div class="editor">
      <!-- <strong>富文本编辑器初始内容可以以这种方式设置</strong> -->
    </div>
  </div>
</template>
<script>
import { Button } from "element-ui";
import i18next from "i18next";
import Editor from "wangeditor";
export default {
  components: { elButton: Button },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    let editor = new Editor(".editor");
    // editor.config.height = 500;
    editor.config.placeholder =
      "暂时未实现该组件的国际化和全局的国际化同步（该组件的国际化是在该组件创建的时候设置的，暂时还不知道如何跟随全局的语言进行更新）";
    editor.config.focus = true;
    editor.config.onchange = function (html) {
      console.log("change 之后最新的 html", html);
    };
    editor.config.onchangeTimeout = 1000;
    editor.config.lang =
      this.$i18n.locale == "zh" ? "zh-CN" : this.$i18n.locale;
    editor.i18next = i18next;
    editor.create();
    this.editor = editor;
  },
  methods: {
    handleLogHTML() {
      console.log(this.editor.txt.html());
    },
    handleLogTEXT() {
      console.log(this.editor.txt.text());
    },
    handleLogJSON() {
      console.log(this.editor.txt.getJSON());
    },
    handleClear() {
      this.editor.txt.clear();
    },
    handleDestroy() {
      this.editor.destroy();
      this.editor = null;
    },
  },
};
</script>