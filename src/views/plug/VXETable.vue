<template>
  <div class="box">
    <p>VXETable: 表格插件</p>
    <p>
      xe-utils: 提供了一套实用的基础函数, 任意格式的日期转换函数,
      浏览器操作相关的函数等
      <a
        href="https://blog.csdn.net/happy81997/article/details/103854568?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522162312245816780255242599%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=162312245816780255242599&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-3-103854568.first_rank_v2_pc_rank_v29&utm_term=xe-utils&spm=1018.2226.3001.4187"
        >xe-utils</a
      >
    </p>
  </div>
</template>
<script>
import Vue from "vue";
import XEUtils from "xe-utils";
import zhCN from "vxe-table/lib/locale/lang/zh-CN";
import {
  // 核心
  VXETable,
  // 功能模块
  Header,
  // 可选组件
  Column,
  // 表格
  Table,
} from "vxe-table";
VXETable.setup({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args),
});
Vue.use(Header).use(Column).use(Table);
export default {
  created() {
    console.log(XEUtils.isArray(18));
    console.log(XEUtils.getType({}));
    console.log(XEUtils.getSize(window));
  },
};
</script>