<template>
  <div class="box">
    <el-row :gutter="20">
      <el-col><div></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div></div></el-col>
      <el-col :span="12"><div></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"><div></div></el-col>
      <el-col :span="8"><div></div></el-col>
      <el-col :span="8"><div></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div></div></el-col>
      <el-col :span="6"><div></div></el-col>
      <el-col :span="6"><div></div></el-col>
      <el-col :span="6"><div></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4"><div></div></el-col>
      <el-col :span="4"><div></div></el-col>
      <el-col :span="4"><div></div></el-col>
      <el-col :span="4"><div></div></el-col>
      <el-col :span="4"><div></div></el-col>
      <el-col :span="4"><div></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="3"><div></div></el-col>
      <el-col :span="3"><div></div></el-col>
      <el-col :span="3"><div></div></el-col>
      <el-col :span="3"><div></div></el-col>
      <el-col :span="3"><div></div></el-col>
      <el-col :span="3"><div></div></el-col>
      <el-col :span="3"><div></div></el-col>
      <el-col :span="3"><div></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="2"><div></div></el-col>
      <el-col :span="2"><div></div></el-col>
      <el-col :span="2"><div></div></el-col>
      <el-col :span="2"><div></div></el-col>
      <el-col :span="2"><div></div></el-col>
      <el-col :span="2"><div></div></el-col>
      <el-col :span="2"><div></div></el-col>
      <el-col :span="2"><div></div></el-col>
      <el-col :span="2"><div></div></el-col>
      <el-col :span="2"><div></div></el-col>
      <el-col :span="2"><div></div></el-col>
      <el-col :span="2"><div></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
      <el-col :span="1"><div></div></el-col>
    </el-row>
  </div>
</template>
<script>
import { Col, Row } from "element-ui";
export default {
  components: {
    elRow: Row,
    elCol: Col,
  },
};
</script>
<style lang="less" scoped>
.box {
  height: 1000px;
}
.el-row {
  .el-col {
    margin: 10px 0;
    div {
      background: salmon;
      height: 40px;
      border-radius: 5px;
    }
  }
}
</style>