<template>
  <el-container class="app">
    <el-header>
      <el-img :src="require('@/assets/img/element-ui.svg')" />
      <el-radio-group v-model="lang" @change="chnageLang">
        <el-radio-button label="zh">{{ $t("lang.zh") }}</el-radio-button>
        <el-radio-button label="en">{{ $t("lang.en") }}</el-radio-button>
      </el-radio-group>
      <el-button type="info" @click="handleExit" v-if="user">{{
        $t("exit")
      }}</el-button>
      <el-button-group v-else>
        <el-button type="primary" @click="loginVisible = true">{{
          $t("login")
        }}</el-button>
        <el-button type="danger" @click="handleRegister">{{
          $t("register")
        }}</el-button>
      </el-button-group>
      <el-button round v-if="user">{{ user }}</el-button>
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
      <el-form ref="login" :model="loginFormData" :rules="loginFormRule">
        <el-form-item label="用户名" prop="user" label-width="80px">
          <el-input v-model="loginFormData.user" />
        </el-form-item>
        <el-form-item label="密码" prop="pass" label-width="80px">
          <el-input type="pass" v-model="loginFormData.pass" />
        </el-form-item>
        <el-form-item label="验证码" prop="captchatext" label-width="80px">
          <el-input v-model="loginFormData.captchatext">
            <div slot="append" v-html="captchaImg" @click="getCaptcha"></div>
          </el-input>
        </el-form-item>
        <el-form-item label="记住密码" prop="remember" label-width="80px">
          <el-switch v-model="loginFormData.remember" />
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
      lang: this.$store.getters.getLang,
      loginVisible: false,
      loginFormData: {
        user: "",
        pass: "",
        captchatext: "",
        remember: false,
      },
      loginFormRule: {
        user: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }],
        captchatext: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
      captchaImg: "",
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    pass() {
      return this.$store.getters.getPass;
    },
    token() {
      return this.$store.getters.getToken;
    },
    phone() {
      return this.$store.getters.getPhone;
    },
    timestamp() {
      return this.$store.getters.getTimestam;
    },
  },
  watch: {
    loginVisible() {
      if (this.loginVisible) this.getCaptcha();
    },
  },
  created() {
    this.$nextTick(() => {
      this.calcMainHeigth();
    });
  },
  methods: {
    chnageLang() {
      this.$i18n.locale = this.lang;
      localStorage.setItem("lang", this.lang);
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
          Message.success("取消登录操作");
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
          Message.success("取消登录操作");
        })
        .catch(() => {});
    },
    handleLogin() {
      this.$refs.login.validate(async (valid, rules) => {
        if (valid) {
          this.loginVisible = false;
          let { data } = await login(this.loginFormData);
          this.$refs.login.resetFields();
          if (Number(data.code) === 0) {
            let { user, pass, phone, timestamp, token } = data;
            localStorage.setItem("user", user);
            localStorage.setItem("pass", pass);
            localStorage.setItem("token", token);
            localStorage.setItem("phone", phone);
            localStorage.setItem("timestamp", timestamp);
            this.$store.commit("setUser", user);
            this.$store.commit("setPass", pass);
            this.$store.commit("setToken", token);
            this.$store.commit("setPhone", phone);
            this.$store.commit("setTimestamp", timestamp);
            Message.success(data.msg);
          } else {
            Message.error(data.msg);
          }
        } else {
          for (let rule in rules) {
            Message.warning(rules[rule][0].message);
            break;
          }
        }
      });
    },
    handleRegister() {},
    handleExit() {
      MessageBox.confirm("确定退出登录吗？", "提示", {
        type: "info",
      })
        .then(() => {
          Message.success("已退出当前用户");
          localStorage.clear();
          this.$store.commit("setUser", "");
          this.$store.commit("setPass", "");
          this.$store.commit("setToken", "");
          this.$store.commit("setPhone", "");
          this.$store.commit("setTimestamp", "");
        })
        .catch(() => {});
    },
    async getCaptcha() {
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
  .el-main {
    overflow-y: scroll;
    // overflow: unset;
  }
  .el-footer {
    text-align: center;
    font: lighter 12px/60px "youyuan";
  }
}
</style>
