<template>
  <div class="date">
    <el-date-picker v-model="valueA" type="date" placeholder="请选择日期" />
    <el-date-picker
      v-model="valueB"
      type="date"
      placeholder="请选择日期"
      :picker-options="pickerOptions"
    />
  </div>
</template>
<script>
import { DatePicker } from "element-ui";
export default {
  components: {
    elDatePicker: DatePicker,
  },
  data() {
    return {
      valueA: "",
      valueB: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
    };
  },
};
</script>