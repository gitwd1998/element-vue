<template>
  <div class="box">
    <el-form
      :model="formData"
      :rules="rules"
      ref="form"
      :label-position="labelPosition"
      label-width="120px"
    >
      <el-form-item label="标题对齐方式">
        <el-radio-group v-model="labelPosition">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
          <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="输入框" prop="input">
        <el-input
          v-model.trim="formData.input"
          clearable
          placeholder="请输入"
        />
      </el-form-item>
      <el-form-item label="下拉菜单" prop="select">
        <el-select
          v-model="formData.select"
          style="width: 100%"
          clearable
          placeholder="请选择"
        >
          <el-option label="选项一" :value="1" />
          <el-option label="选项二" :value="2" />
          <el-option label="选项三" :value="3" />
        </el-select>
      </el-form-item>
      <el-form-item label="日期时间" required>
        <el-col :span="11">
          <el-form-item prop="date">
            <el-date-picker
              :editable="false"
              type="date"
              v-model="formData.date"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              style="width: 100%"
              placeholder="请选择日期"
            />
          </el-form-item>
        </el-col>
        <el-col align="center" :span="2"> # </el-col>
        <el-col :span="11">
          <el-form-item prop="time">
            <el-time-picker
              :editable="false"
              v-model="formData.time"
              format="hh:mm:ss"
              value-format="hh:mm:ss"
              style="width: 100%"
              placeholder="请选择时间"
            />
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="日期范围" required>
        <el-col :span="11">
          <el-form-item prop="start">
            <el-date-picker
              :editable="false"
              type="date"
              v-model="formData.start"
              style="width: 100%"
              format="yyyy-MM-dd"
              placeholder="请选择开始日期"
              :picker-options="startPickerOption"
            />
          </el-form-item>
        </el-col>
        <el-col align="center" :span="2"> - </el-col>
        <el-col :span="11">
          <el-form-item prop="end">
            <el-date-picker
              :editable="false"
              type="date"
              v-model="formData.end"
              style="width: 100%"
              placeholder="请选择结束日期"
              :picker-options="endPickerOption"
            />
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="日期范围" prop="dateRange">
        <el-date-picker
          style="width: 100%"
          v-model="formData.dateRange"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="时间范围" prop="timeRange">
        <el-time-picker
          style="width: 100%"
          is-range
          arrow-control
          v-model="formData.timeRange"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围"
        >
        </el-time-picker>
      </el-form-item>
      <el-form-item label="开关" prop="switch">
        <el-switch v-model="formData.switch" />
      </el-form-item>
      <el-form-item label="多选框" prop="checkbox">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAll"
          >全选</el-checkbox
        >
        <el-checkbox-group v-model="formData.checkbox" @change="handleCheck">
          <el-checkbox :label="1">选项一</el-checkbox>
          <el-checkbox :label="2">选项二</el-checkbox>
          <el-checkbox :label="3">选项三</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="单选框" prop="radio">
        <el-radio-group v-model="formData.radio">
          <el-radio :label="1">选项一</el-radio>
          <el-radio :label="2">选项二</el-radio>
          <el-radio :label="3">选项三</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="文本框" prop="textarea">
        <el-input type="textarea" v-model.trim="formData.textarea" />
      </el-form-item>
      <el-form-item label="表格" required>
        <el-table :data="formData.table">
          <el-table-column
            label="序号"
            type="index"
            align="center"
            :width="80"
          />
          <el-table-column label="姓名" prop="name">
            <template slot-scope="scope">
              <el-form-item
                :prop="'table.' + scope.$index + '.' + 'name'"
                :rules="rules.name"
              >
                <el-input v-model="scope.row.name" clearable />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="性别" prop="sex">
            <template slot-scope="scope">
              <el-form-item
                :prop="'table.' + scope.$index + '.' + 'sex'"
                :rules="rules.sex"
              >
                <el-input v-model="scope.row.sex" clearable />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="年龄" prop="age">
            <template slot-scope="scope">
              <el-form-item
                :prop="'table.' + scope.$index + '.' + 'age'"
                :rules="rules.age"
              >
                <el-input-number v-model="scope.row.age" :min="1" />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot="header">
              <el-button @click="handleAddColumn">添加</el-button>
            </template>
            <template slot-scope="scope">
              <el-button type="danger" @click="handleDeleteColumn(scope)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item label="上传附件" prop="fileList">
        <el-upload
          action
          :on-change="handleChangeFile"
          :file-list="formData.fileList"
          list-type="text"
          :auto-upload="false"
          show-file-list
          multiple
        >
          <el-button slot="trigger">选取文件</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item
        label="动态增减表单"
        v-for="(domain, i) in formData.domains"
        :key="i"
        :prop="'domains.' + i + '.value'"
        :rules="rules.domain"
      >
        <el-input v-model="domain.value" clearable>
          <template slot="append">
            <el-button @click="handleDeleteDomain(i)">删除</el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleAddDomain">增加</el-button>
        <el-button type="success" @click="handleSubmit">提交</el-button>
        <el-button type="danger" @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Col,
  TimePicker,
  Form,
  FormItem,
  Input,
  Option,
  Radio,
  RadioGroup,
  Select,
  DatePicker,
  Switch,
  RadioButton,
  Table,
  TableColumn,
  Upload,
  Message,
  InputNumber,
} from "element-ui";
export default {
  components: {
    elForm: Form,
    elFormItem: FormItem,
    elInput: Input,
    elInputNumber: InputNumber,
    elSelect: Select,
    elOption: Option,
    elCheckboxGroup: CheckboxGroup,
    elCheckbox: Checkbox,
    elRadioGroup: RadioGroup,
    elRadio: Radio,
    elRadioButton: RadioButton,
    elTimePicker: TimePicker,
    elDatePicker: DatePicker,
    elSwitch: Switch,
    elButton: Button,
    elCol: Col,
    elTable: Table,
    elTableColumn: TableColumn,
    elUpload: Upload,
  },
  data() {
    return {
      labelPosition: "right",
      isIndeterminate: true,
      checkAll: false,
      startPickerOption: {
        disabledDate: (d) => {
          if (this.formData.end)
            return !(
              d.getTime() > Date.now() - 8.64e7 &&
              d.getTime() < new Date(this.formData.end).getTime() + 8.64e7
            );
          return d.getTime() < new Date() - 8.64e7;
        },
      },
      endPickerOption: {
        disabledDate: (d) => {
          if (this.formData.start) return d.getTime() < this.formData.start;
          return d.getTime() < Date.now() - 8.64e7;
        },
      },
      formData: {
        input: "",
        select: 2,
        date: "",
        time: "",
        start: "",
        end: "",
        dateRange: [new Date(2020, 9, 10, 8, 40), new Date(2020, 9, 10, 9, 40)],
        timeRange: [new Date(2020, 9, 10, 8, 40), new Date(2020, 9, 10, 9, 40)],
        switch: false,
        checkbox: [1],
        radio: 1,
        textarea: "",
        table: [{ name: "", sex: "", age: 10 }],
        fileList: [],
        domains: [{ value: "" }],
      },
      rules: {
        input: [
          { required: true, message: "请输入", trigger: "blur" },
          { min: 3, max: 5, message: "长度在3 ~ 5个字符", trigger: "blur" },
        ],
        select: [{ required: true, message: "请选择", trigger: "change" }],
        date: [{ required: true, message: "请选择日期", trigger: "change" }],
        time: [{ required: true, message: "请选择时间", trigger: "change" }],
        start: [{ required: true, message: "请选择日期", trigger: "change" }],
        end: [{ required: true, message: "请选择日期", trigger: "change" }],
        dateRange: [
          { required: true, message: "请选择日期范围", trigger: "change" },
        ],
        timeRange: [
          { required: true, message: "请选择时间范围", trigger: "change" },
        ],
        checkbox: [{ required: true, message: "请选择", trigger: "change" }],
        radio: [{ required: true, message: "请选择", trigger: "change" }],
        textarea: [{ required: true, message: "请输入", trigger: "blur" }],
        fileList: [
          { required: true, message: "请选择文件", trigger: "change" },
        ],
        name: [{ required: true, message: "请输入性别", trigger: "blur" }],
        sex: [{ required: true, message: "请输入性别", trigger: "blur" }],
        age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
        domain: [{ required: true, message: "请输入", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleCheckAll(val) {
      this.formData.checkbox = val ? [1, 2, 3] : [];
      this.isIndeterminate = false;
    },
    handleCheck(val) {
      let len = val.length;
      this.checkAll = len === 3;
      this.isIndeterminate = len > 0 && len < 3;
    },
    handleAddColumn() {
      this.formData.table.push({ name: "", sex: "", age: 10 });
    },
    handleDeleteColumn(scope) {
      if (this.formData.table.length === 1) {
        return Message.warning("至少保留一项");
      }
      this.formData.table.splice(scope.$index, 1);
    },
    handleChangeFile(file, fileList) {
      this.formData.fileList = fileList;
    },
    handleDeleteDomain(i) {
      if (this.formData.domains.length === 1) {
        return Message.warning("至少保留一项");
      }
      this.formData.domains.splice(i, 1);
    },
    handleAddDomain() {
      this.formData.domains.push({ value: "" });
    },
    handleSubmit() {
      this.$refs.form.validate(async (valid, rules) => {
        if (valid) {
          console.log(this.formData);
        } else {
          console.warn(this.formData, valid, rules);
        }
      });
    },
    handleReset() {
      this.$refs.form.resetFields();
    },
  },
};
</script>