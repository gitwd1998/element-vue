<template>
  <div>
    <el-upload
      class="el-button"
      action
      :show-file-list="false"
      :auto-upload="false"
      :on-change="handleChange"
    >
      <template slot="trigger">导入数据1</template>
    </el-upload>
    <el-button>导出数据</el-button>
    <input
      type="file"
      ref="file"
      @change="handleUpload"
      style="display: inline"
    />
  </div>
</template>
<script>
import { Button, Upload } from "element-ui";
import { upload } from "@/api";
import xlsx from "xlsx";
export default {
  components: { elUpload: Upload, elButton: Button },
  methods: {
    async handleChange({ raw }) {
      let res = await this.upload(raw);
      res = xlsx.read(res, { type: "binary" });
      res = xlsx.utils.sheet_to_json(res.Sheets[res.SheetNames[0]]);
      console.log(res);
    },
    upload(file) {
      return new Promise((resolve) => {
        let reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = (ev) => {
          resolve(ev.target.result);
        };
      });
    },
    async handleUpload(e) {
      let file = e.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      await upload(formData, { name: "张三", age: 18, sex: "男" });
    },
  },
};
</script>