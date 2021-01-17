<template>
  <div>
    <el-row>
      <el-button :autofocus="true">{{ $t("button.button") }}</el-button>
      <el-button type="primary">{{ $t("button.primaryButton") }}</el-button>
      <el-button type="success">{{ $t("button.successButton") }}</el-button>
      <el-button type="info">{{ $t("button.infoButton") }}</el-button>
      <el-button type="warning">{{ $t("button.warningButton") }}</el-button>
      <el-button type="danger">{{ $t("button.dangerButton") }}</el-button>
      <el-button plain>{{ $t("button.plainButton") }}</el-button>
      <el-button round>{{ $t("button.roundButton") }}</el-button>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>

    <el-row>
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
    </el-row>

    <el-row>
      <el-select
        v-model="selectValue"
        @change="handleSelect"
        placeholder="请选择一个"
      >
        <el-option
          v-for="(item, index) in options"
          :key="index"
          :label="item.label"
          :value="item.id"
        />
      </el-select>
      <el-select
        v-model="multipleValue"
        multiple
        @change="handleSelect"
        placeholder="全选择一个或多个"
      >
        <el-option
          v-for="(item, index) in options"
          :key="index"
          :label="item.label"
          :value="item.id"
        />
      </el-select>
      <el-select
        v-model="collapseValue"
        multiple
        collapse-tags
        @change="handleSelect"
        placeholder="全选择一个或多个"
      >
        <el-option
          v-for="(item, index) in options"
          :key="index"
          :label="item.label"
          :value="item.id"
        />
      </el-select>
    </el-row>
  </div>
</template>
<script>
import { Button, Row, Radio, Select, Option } from "element-ui";
export default {
  components: {
    elButton: Button,
    elRow: Row,
    elRadio: Radio,
    elSelect: Select,
    elOption: Option,
  },
  data() {
    return {
      radio: "1",
      options,
      selectValue: "",
      multipleValue: "",
      collapseValue: "",
    };
  },
  methods: {
    handleSelect(value) {
      console.log(value);
    },
  },
};
var options = [
  {
    id: 1,
    label: "黄金糕",
  },
  {
    id: 2,
    label: "双皮奶",
  },
  {
    id: 3,
    label: "蚵仔煎",
  },
  {
    id: 4,
    label: "龙须面",
  },
  {
    id: 5,
    label: "北京烤鸭",
  },
];
</script>
