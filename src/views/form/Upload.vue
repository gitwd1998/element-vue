<template>
  <div class="box">
    <el-upload
      class="el-button"
      action
      accept=".xlsx"
      :show-file-list="false"
      :auto-upload="false"
      :on-change="handleChange"
    >
      <template slot="trigger">导入数据</template>
    </el-upload>
    <el-button @click="handleImport">上传图片</el-button>
    <el-button @click="downloadWord">下载word文档</el-button>
    <el-button>下载excel文档</el-button>
    <el-button>下载pdf文档</el-button>
    <input type="file" ref="fileInput" @change="handleUpload" v-show="false" />
    <p>{{ imgSrc }}</p>
  </div>
</template>
<script>
import { Button, Message, Upload } from "element-ui";
import { upload, download } from "@/api";
import xlsx from "xlsx";
export default {
  components: { elUpload: Upload, elButton: Button },
  data() {
    return {
      imgSrc: "",
    };
  },
  methods: {
    fileReader(file) {
      return new Promise((resolve) => {
        let reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = (ev) => {
          resolve(ev.target.result);
        };
      });
    },
    async handleChange({ raw }) {
      let res = await this.fileReader(raw);
      res = xlsx.read(res, { type: "binary" });
      res = xlsx.utils.sheet_to_json(res.Sheets[res.SheetNames[0]]);
      console.log(res);
    },
    handleImport() {
      this.$refs.fileInput.click();
    },
    async handleUpload(e) {
      let file = e.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      let { data } = await upload(formData, {
        name: "张三",
        age: 18,
        sex: "男",
      });
      if (Number(data.code) === 0) {
        Message.success(data.msg);
        this.imgSrc = data.data[0].url;
      }
    },
    async downloadWord() {
      let { data } = await download();
      const blob = new Blob([data], { type: "application/vnd.ms-excel" }); //导出 xlsx
      // const blob = new Blob([data], { type: "application/msword" }); // 导出 word
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "模板.xlsx ";
      a.click();
      window.URL.revokeObjectURL(blob);
    },
  },
};
</script>