<template>
  <div></div>
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
export default {};
</script>