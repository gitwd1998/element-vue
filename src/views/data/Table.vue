<template>
  <div class="about">
    <el-button @click="dialogVisible = true">对话框</el-button>
    <el-tooltip
      content="文字提示内容文字提示内容文字提示内容"
      placement="top-start"
    >
      <i class="el-icon-question"></i>
    </el-tooltip>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="mini">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false" size="mini"
          >确定</el-button
        >
      </span>
    </el-dialog>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column align="right"
        ><template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-table :data="tableChildData" row-key="id">
      <el-table-column prop="date" label="日期" sortable width="180" />
      <el-table-column prop="name" label="姓名" sortable width="180" />
      <el-table-column prop="address" label="地址" />
    </el-table>
    <el-button @click="handleOpen">打开Message Box弹窗</el-button>
  </div>
</template>
<script>
import {
  Button,
  Dialog,
  Input,
  Table,
  TableColumn,
  Tooltip,
  Message,
  MessageBox,
} from "element-ui";
export default {
  components: {
    elButton: Button,
    elTooltip: Tooltip,
    elDialog: Dialog,
    elTable: Table,
    elTableColumn: TableColumn,
    elInput: Input,
  },
  data() {
    return {
      dialogVisible: false,
      search: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      tableChildData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "赵",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "钱",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "孙",
          address: "上海市普陀区金沙江路 1519 弄",
          children: [
            {
              id: 31,
              date: "2016-05-01",
              name: "李",
              address: "上海市普陀区金沙江路 1519 弄",
            },
            {
              id: 32,
              date: "2016-05-01",
              name: "周",
              address: "上海市普陀区金沙江路 1519 弄",
            },
          ],
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "武",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      tableData1: [
        {
          id: 1,
          date: "2016-05-02",
          name: "郑",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "董",
          address: "上海市普陀区金沙江路 1519 弄",
          hasChildren: true,
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "张",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    handleClose(done) {
      alert("关闭前你想干的事");
      done();
    },
    handleDelete(scope) {
      console.log(scope);
    },
    handleOpen() {
      MessageBox.alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: (action) => {
          Message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
  },
};
</script>
