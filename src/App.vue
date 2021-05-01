<template>
  <el-container class="app">
    <el-header>
      <div class="left">
        <el-img :src="require('@/assets/img/element-ui.svg')" />
      </div>
      <div class="right">
        <el-button-group>
          <el-button type="primary" size="mini" @click="loginVisible = true">{{
            $t("login")
          }}</el-button>
          <el-button type="danger" size="mini" @click="handleRegister">{{
            $t("register")
          }}</el-button>
        </el-button-group>
        <el-button type="info" size="mini" @click="handleExit">{{
          $t("exit")
        }}</el-button>
        <el-radio-group v-model="lang" size="mini" @change="handleLang">
          <el-radio-button label="zh">{{ $t("lang.zh") }}</el-radio-button>
          <el-radio-button label="en">{{ $t("lang.en") }}</el-radio-button>
        </el-radio-group>
      </div>
    </el-header>
    <el-container>
      <el-aside width="auto"><component-aside /></el-aside>
      <el-main>
        <router-view />
        <el-backtop target=".app .el-container .el-main">
          <i class="el-icon-arrow-up" />
        </el-backtop>
      </el-main>
    </el-container>
    <el-footer>--- {{ $t("footer.footnote") }} ---</el-footer>
    <el-dialog
      title="登录"
      :visible.sync="loginVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-form ref="login" :model="loginForm" :rules="loginRule">
        <el-form-item label="用户名" prop="user" label-width="80px">
          <el-input v-model="loginForm.user" />
        </el-form-item>
        <el-form-item label="密码" prop="pass" label-width="80px">
          <el-input type="pass" v-model="loginForm.pass" />
        </el-form-item>
        <el-form-item label="验证码" prop="captchatext" label-width="80px">
          <el-input v-model="loginForm.captchatext">
            <div slot="append" v-html="captchaImg" @click="handleCaptcha"></div>
          </el-input>
        </el-form-item>
        <el-form-item label="记住密码" prop="remember" label-width="80px">
          <el-switch v-model="loginForm.remember" />
        </el-form-item>
      </el-form>
      <template slot="footer">
        <el-button type="danger" @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleLogin">确 定</el-button>
      </template>
    </el-dialog>
  </el-container>
</template>
<script>
import componentAside from "@/layout/Aside";
import { captcha, login } from "@/api";
import { getDomHeight } from "@/utils";
import {
  Aside,
  Button,
  ButtonGroup,
  Container,
  Footer,
  Header,
  Image,
  Main,
  RadioButton,
  RadioGroup,
  Message,
  MessageBox,
  Dialog,
  Form,
  FormItem,
  Input,
  Switch,
  Backtop,
} from "element-ui";
export default {
  components: {
    componentAside: componentAside,
    elContainer: Container,
    elHeader: Header,
    elAside: Aside,
    elMain: Main,
    elFooter: Footer,
    elImg: Image,
    elRadioGroup: RadioGroup,
    elRadioButton: RadioButton,
    elButtonGroup: ButtonGroup,
    elButton: Button,
    elDialog: Dialog,
    elForm: Form,
    elFormItem: FormItem,
    elInput: Input,
    elSwitch: Switch,
    elBacktop: Backtop,
  },
  data() {
    return {
      lang: sessionStorage.getItem("lang") || "zh",
      loginVisible: false,
      loginForm: {
        user: "",
        pass: "",
        captchatext: "",
        remember: false,
      },
      loginRule: {
        user: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }],
        captchatext: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
      captchaImg: "",
    };
  },
  watch: {
    loginVisible() {
      if (this.loginVisible) this.handleCaptcha();
    },
  },
  created() {
    console.log(this.$store);
    setTimeout(() => {
      this.$store.commit("hh", 5555);
    }, 2000);
    this.$nextTick(() => {
      this.calcMainHeigth();
    });
  },
  mounted() {
    console.log(window.ActiveXObject);
  },
  methods: {
    handleLang(q, a) {
      console.log(q, a);
      this.$i18n.locale = this.lang;
      sessionStorage.setItem("lang", this.lang);
    },
    calcMainHeigth() {
      let container = getDomHeight(".app");
      let header = getDomHeight(".el-header");
      let footer = getDomHeight(".el-footer");
      let main = container - header - footer;
      let dom = document.querySelector(".app .el-container");
      dom.style.height = main + "px";
    },
    handleClose(done) {
      MessageBox.confirm("你还没有完成登录操作是否关闭登录窗口？", "提示", {
        type: "info",
      })
        .then(() => {
          done();
          this.$refs.login.resetFields();
          Message("取消登录操作");
        })
        .catch(() => {});
    },
    handleCancel() {
      MessageBox.confirm("你还没有完成登录操作是否取消登录？", "提示", {
        type: "info",
      })
        .then(() => {
          this.loginVisible = false;
          this.$refs.login.resetFields();
          Message("取消登录操作");
        })
        .catch(() => {});
    },
    handleLogin() {
      this.$refs.login.validate(async (valid, rules) => {
        if (valid) {
          this.loginVisible = false;
          let { data } = await login(this.loginForm);
          this.$refs.login.resetFields();
          Message.info(data.message);
        } else {
          for (let rule in rules) {
            Message.warning(rules[rule][0].message);
            break;
          }
          return false;
        }
      });
    },
    handleRegister() {},
    handleExit() {},
    async handleCaptcha() {
      let { data } = await captcha();
      this.captchaImg = data;
    },
  },
};
</script>
<style lang="less">
.app {
  height: 100%;
  .el-header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    justify-content: space-between;
  }
  .el-container {
    .el-main {
      overflow-y: scroll;
    }
  }
  .el-main {
    overflow: unset;
  }
  .el-footer {
    text-align: center;
    font: lighter 12px/60px "youyuan";
  }
}
</style>
