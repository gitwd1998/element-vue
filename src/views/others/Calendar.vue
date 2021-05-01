<template>
  <div>
    <el-calendar v-model="value"></el-calendar>
  </div>
</template>
<script>
import { Calendar } from "element-ui";
export default {
  components: {
    elCalendar: Calendar,
  },
  data() {
    return {
      value: new Date(),
    };
  },
};
</script>