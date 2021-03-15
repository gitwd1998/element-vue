<template>
  <el-transfer
    filterable
    v-model="value"
    :data="data"
    :left-default-checked="[2, 3]"
    :right-default-checked="[1]"
    :titles="['待添加的', '已添加的']"
    :button-texts="['删除', '添加']"
  >
    <el-button slot="left-footer" size="small">操作</el-button>
    <el-button slot="right-footer" size="small">操作</el-button>
  </el-transfer>
</template>

<script>
import { Button, Transfer } from "element-ui";
export default {
  components: { elTransfer: Transfer, elButton: Button },
  data() {
    return {
      data: [
        { key: 1, label: "选项1" },
        { key: 2, label: "选项2" },
        { key: 3, label: "选项3" },
        { key: 4, label: "选项4" },
        { key: 5, label: "选项5" },
        { key: 6, label: "选项6" },
      ],
      value: [1, 4],
    };
  },
};
</script>