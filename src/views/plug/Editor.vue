<template>
  <div class="editor"><strong>富文本编辑器</strong></div>
</template>
<script>
export default {
  mounted() {
    var editor = new this.$E(".editor");
    editor.config.height = 500;
    editor.config.onchange = function (html) {
      console.log(html);
    };
    editor.config.placeholder = "自定义提示文本";
    editor.config.focus = false;
    editor.create();
    // console.log(editor.txt.text());
    // console.log(editor.txt.html());
    // console.log(editor.txt.getJSON());
    // editor.txt.clear();
  },
};
</script>