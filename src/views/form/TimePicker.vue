<template>
  <div class="box">
    <el-time-select v-model="valueA" placeholder="请选择时间" />
    <el-time-picker
      v-model="valueB"
      :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
      placeholder="选择任意时间点"
    />
    <el-time-picker
      arrow-control
      v-model="valueC"
      :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
      placeholder="选择任意时间点"
    />
  </div>
</template>
<script>
import { TimePicker, TimeSelect } from "element-ui";
export default {
  components: {
    elTimeSelect: TimeSelect,
    elTimePicker: TimePicker,
  },
  data() {
    return {
      valueA: "",
      valueB: "",
      valueC: "",
    };
  },
};
</script>