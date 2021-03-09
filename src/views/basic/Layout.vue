<template>
  <div>
    <el-row :gutter="10" type="flex">
      <el-col :span="8">
        <div class="a">A</div>
      </el-col>
      <el-col :span="8">
        <div class="b">
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="c">C</div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="6">
        <div class="d">D</div>
      </el-col>
      <el-col :span="6">
        <div class="e">E</div>
      </el-col>
      <el-col :span="6">
        <div class="f">F</div>
      </el-col>
      <el-col :span="6">
        <div class="g">G</div>
      </el-col>
    </el-row>
    <router-view></router-view>
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
.el-row {
  .el-col {
    border: 1px solid #ccc;
    .a {
      height: 40px;
    }
  }
}
</style>