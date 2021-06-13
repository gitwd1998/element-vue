<template>
  <el-dialog :visible.sync="showPDF">
    <!-- <pdf src="../../assets/pdf/简历.pdf" :page="1"></pdf> -->
  </el-dialog>
</template>
<script>
import { Dialog } from "element-ui";
// import pdf from "vue-pdf";
export default {
  components: {
    elDialog: Dialog,
    // pdf,
  },
  data() {
    return {
      showPDF: true,
    };
  },
};
</script>