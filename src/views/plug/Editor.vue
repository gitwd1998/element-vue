<template>
  <div>
    <el-button size="mini" @click="handleLogHTML">输出HTML</el-button>
    <el-button size="mini" @click="handleLogTEXT">输出TEXT</el-button>
    <el-button size="mini" @click="handleLogJSON">输出JSON</el-button>
    <el-button size="mini" @click="handleClear">清除内容</el-button>
    <el-button size="mini" @click="handleDestroy">销毁插件</el-button>
    <div class="editor">
      <!-- <strong>富文本编辑器初始内容可以以这种方式设置</strong> -->
    </div>
  </div>
</template>
<script>
import { Button } from "element-ui";
import E from "wangeditor";
import i18next from "i18next";
export default {
  components: { elButton: Button },
  data() {
    return {
      editor: null,
      lang: "zh-CN", //en
    };
  },
  mounted() {
    console.log(this.lang);
    var editor = new E(".editor");
    editor.config.height = 500;
    editor.config.onchange = function (html) {
      console.log(html);
    };
    editor.config.placeholder = "暂时未实现该组件的国际化和全局的国际化同步";
    editor.config.focus = false;
    editor.config.onchange = function (newHtml) {
      console.log("change 之后最新的 html", newHtml);
    };
    editor.config.onchangeTimeout = 1000;
    editor.config.lang = this.lang;
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