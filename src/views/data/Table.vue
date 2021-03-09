<template>
  <div>
    <el-table :data="tableData" stripe>
      <el-table-column label="序号" width="80" align="center" type="index" />
      <el-table-column prop="date" label="日期" width="180" sortable />
      <el-table-column prop="name" label="姓名" width="180" sortable />
      <el-table-column prop="address" label="地址" />
      <el-table-column align="right">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(scope)"
          />
        </template>
      </el-table-column>
    </el-table>
    <el-table :data="dealTableChildData" row-key="_id">
      <el-table-column prop="date" label="日期" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="address" label="地址" />
    </el-table>
    <el-table :data="tableData" border :span-method="arraySpanMethod">
      <el-table-column label="序号" type="index" align="center" width="80" />
      <el-table-column prop="date" label="日期" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="address" label="地址" />
      <el-table-column label="操作" align="center">
        <template>
          <el-button size="mini">查看</el-button>
          <el-button size="mini">修改</el-button>
          <el-button size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-table :data="tableData" border @cell-dblclick="handleDbClick">
      <el-table-column label="序号" type="index" align="center" width="80" />
      <el-table-column prop="date" label="日期" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="address" label="地址" />
      <el-table-column label="操作" align="center">
        <template>
          <el-button size="mini">查看</el-button>
          <el-button size="mini">修改</el-button>
          <el-button size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { Button, Input, Table, TableColumn } from "element-ui";
export default {
  components: {
    elButton: Button,
    elTable: Table,
    elTableColumn: TableColumn,
    elInput: Input,
  },
  data() {
    return {
      search: "hhh",
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
          date: "2016-05-02",
          name: "赵",
          address: "上海市普陀区金沙江路 1518 弄",
          chislren: [],
        },
        {
          date: "2016-05-04",
          name: "钱",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "孙",
          address: "上海市普陀区金沙江路 1519 弄",
          children: [
            {
              date: "2016-05-01",
              name: "李",
              address: "上海市普陀区金沙江路 1519 弄",
            },
            {
              date: "2016-05-01",
              name: "周",
              address: "上海市普陀区金沙江路 1519 弄",
            },
          ],
        },
        {
          date: "2016-05-03",
          name: "武",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  computed: {
    dealTableChildData() {
      function fun(arr, i) {
        arr.forEach((v, k) => {
          v._id = i + "-" + k;
          if (v.children) {
            if (v.children.length) {
              fun(v.children, v._id);
            }
          }
        });
      }
      fun(this.tableChildData, 0);
      console.log(this.tableChildData);
      return this.tableChildData;
    },
  },
  methods: {
    handleDelete(scope) {
      console.log(scope);
    },
    arraySpanMethod({ rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 1) {
          return [1, 3];
        } else if (columnIndex === 2 || columnIndex === 3) {
          return [0, 0];
        }
      }
    },
    handleDbClick(row, column, cell) {
      cell.getElementsByClassName("cell")[0].innerHTML =
        "<input type='text' value='hhhhh'>";
    },
  },
};
</script>
