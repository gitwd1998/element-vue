<template>
  <el-form
    :model="formData"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    status-icon
  >
    <el-form-item label="文本框" prop="input">
      <el-input v-model="formData.input" />
    </el-form-item>
    <el-form-item label="下拉菜单" prop="select">
      <el-select v-model="formData.select" style="width: 100%">
        <el-option label="区域一" value="1" />
        <el-option label="区域二" value="2" />
      </el-select>
    </el-form-item>
    <el-form-item label="日期选择器" required>
      <el-col :span="11">
        <el-form-item prop="data">
          <el-date-picker
            :editable="false"
            type="date"
            v-model="formData.data"
            style="width: 100%"
            format="yyyy年mm月dd日"
            value-format="yyyy-mm-dd"
          />
        </el-form-item>
      </el-col>
      <el-col align="center" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="time">
          <el-time-picker
            :editable="false"
            v-model="formData.time"
            style="width: 100%"
            format="hh时mm分ss秒"
            value-format="hh:mm:ss"
          />
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="开关" prop="switch">
      <el-switch v-model="formData.switch" />
    </el-form-item>
    <el-form-item label="多选框" prop="checkbox">
      <el-checkbox-group v-model="formData.checkbox">
        <el-checkbox label="A" />
        <el-checkbox label="B" />
        <el-checkbox label="C" />
        <el-checkbox label="D" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="单选框" prop="radio">
      <el-radio-group v-model="formData.radio">
        <el-radio label="A" />
        <el-radio label="B" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="文本框" prop="textarea">
      <el-input type="textarea" v-model="formData.textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">提交</el-button>
      <el-button @click="handleReset">重置</el-button>
    </el-form-item>
  </el-form>
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
} from "element-ui";
export default {
  components: {
    elForm: Form,
    elFormItem: FormItem,
    elInput: Input,
    elSelect: Select,
    elOption: Option,
    elCheckboxGroup: CheckboxGroup,
    elCheckbox: Checkbox,
    elRadioGroup: RadioGroup,
    elRadio: Radio,
    elTimePicker: TimePicker,
    elDatePicker: DatePicker,
    elSwitch: Switch,
    elButton: Button,
    elCol: Col,
  },
  data() {
    return {
      formData: {
        input: "",
        select: "",
        data: "",
        time: "",
        switch: false,
        checkbox: [],
        radio: "",
        textarea: "",
      },
      rules: {
        input: [
          { required: true, message: "活动名称为必填字段", trigger: "blur" },
          { min: 3, max: 5, message: "长度在3 ~ 5个字符", trigger: "blur" },
        ],
        select: [
          { required: true, message: "活动区域为必选项", trigger: "change" },
        ],
        data: [{ required: true, message: "请选择日期", trigger: "change" }],
        time: [{ required: true, message: "请选择时间", trigger: "change" }],
        checkbox: [
          { required: true, message: "至少选择一项", trigger: "change" },
        ],
        radio: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        textarea: [
          { required: true, message: "请填写活动形式", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.ruleForm.validate((valid, rules) => {
        if (valid) {
          console.log(this.formData);
        } else {
          console.log(valid, rules);
          return false;
        }
      });
    },
    handleReset() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>