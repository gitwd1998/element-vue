<template>
  <el-row>
    <el-col :span="12" :push="6">
      <el-form ref="form" :model="form" :label-width="labelWidth">
        <el-form-item class="relative-formItem">
          <transition mode="out-in" name="btn">
            <el-button
              class="absolute-btn"
              key="login"
              v-if="!isLogin"
              type="primary"
              @click="toggleType(1)"
              >{{ $t("login") }}
              <i class="el-icon-d-arrow-right" />
            </el-button>
            <el-button
              class="absolute-btn"
              key="regist"
              v-if="isLogin"
              type="info"
              @click="toggleType(0)"
              >{{ $t("register") }}
              <i class="el-icon-d-arrow-right" />
            </el-button>
          </transition>
        </el-form-item>
        <el-form-item
          :label="$t('username')"
          prop="username"
          :rules="[
            { required: true, message: $t('rules.username'), trigger: 'blur' },
          ]"
        >
          <el-input v-model.trim="form.username" />
        </el-form-item>
        <el-form-item
          v-if="!isLogin"
          :label="$t('phonenumber')"
          prop="phonenumber"
          :rules="[
            {
              required: true,
              message: $t('rules.phonenumber'),
              trigger: 'blur',
            },
          ]"
        >
          <el-input v-model.trim="form.phonenumber" />
        </el-form-item>
        <el-form-item
          :label="$t('password')"
          prop="password"
          :rules="[
            { required: true, message: $t('rules.password'), trigger: 'blur' },
          ]"
        >
          <el-input v-model.trim="form.password" />
        </el-form-item>
        <el-form-item
          v-if="isLogin"
          :label="$t('verification')"
          prop="captchatext"
          :rules="[
            {
              required: true,
              message: $t('rules.verification'),
              trigger: 'blur',
            },
          ]"
        >
          <el-input v-model.trim="form.captchatext">
            <div slot="append" v-html="captchaImg" @click="getCaptcha"></div>
          </el-input>
        </el-form-item>
        <el-form-item v-if="isLogin" :label="$t('remember')" prop="remember">
          <el-switch v-model="form.remember" />
        </el-form-item>
        <el-form-item>
          <el-button type="warning" icon="el-icon-back" @click="goBack" />
          <el-button
            type="danger"
            icon="el-icon-refresh"
            @click="handleReset"
          />
          <el-button
            v-if="isLogin"
            type="primary"
            icon="el-icon-right"
            @click="handleLogin"
          />
          <el-button
            v-else
            type="primary"
            icon="el-icon-right"
            @click="handleRegist"
          />
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
import { captcha, login, regist, getUserInfo } from "@/api";
import {
  Form,
  FormItem,
  Input,
  Switch,
  MessageBox,
  Message,
  Button,
  Row,
  Col,
} from "element-ui";
export default {
  components: {
    elRow: Row,
    elCol: Col,
    elForm: Form,
    elFormItem: FormItem,
    elInput: Input,
    elSwitch: Switch,
    elButton: Button,
  },
  data() {
    return {
      isLogin: !!Number(this.$route.query.type),
      labelWidth: "auto",
      form: {
        username: "",
        password: "",
        phonenumber: "",
        captchatext: "",
        remember: true,
      },
      captchaImg: "",
    };
  },
  created() {
    this.getCaptcha();
  },
  beforeRouteUpdate(to, from, next) {
    this.isLogin = !!Number(to.query.type);
    next();
  },
  mounted() {
    window.onresize = () => {
      this.labelWidth = document.body.clientWidth <= 1080 ? "" : "auto";
    };
  },
  watch: {
    isLogin() {
      this.$refs.form.resetFields();
      if (this.isLogin) this.getCaptcha();
    },
  },
  methods: {
    async getCaptcha() {
      let data = await captcha();
      if (data.code === "0") {
        this.captchaImg = data.data;
      } else {
        Message.error(data.msg || "获取验证码失败");
      }
    },
    toggleType(type) {
      this.$router.replace({
        path: "/login",
        name: "login",
        query: { type },
      });
    },
    goBack() {
      this.$router.go(-1);
    },
    handleReset() {
      MessageBox.confirm("是否重置？", "提示", {
        type: "info",
      })
        .then(() => {
          this.$refs.form.resetFields();
          this.getCaptcha();
          Message.success("重置成功");
        })
        .catch(() => {});
    },
    handleLogin() {
      this.$refs.form.validate(async (valid, rules) => {
        if (valid) {
          let data = await login(this.form);
          this.$refs.form.resetFields();
          if (data.code === "0") {
            localStorage.setItem("token", data.data);
            this.$store.commit("setToken", data.data);
            getUserInfo({ token: data.data }).then((res) => {
              if (res.code === "0") {
                this.$store.commit("setUserName", res.data.username);
                this.$store.commit("setPhoneNumber", res.data.phonenumber);
                this.$store.commit("setAvatar", res.data.avatar);
              } else {
                Message.error(res.msg || `${res.name}: ${res.message}`);
                localStorage.removeItem("token");
                this.$store.commit("setToken", "");
                this.$router.replace({ path: "/login" });
              }
            });
            Message.success(data.msg);
            this.$router.push({ path: "/", name: "main" });
          } else {
            Message.error(data.msg);
            this.getCaptcha();
          }
        } else {
          for (let rule in rules) {
            Message.warning(rules[rule][0].message);
            break;
          }
        }
      });
    },
    handleRegist() {
      this.$refs.form.validate(async (valid, rules) => {
        if (valid) {
          let data = await regist(this.form);
          this.$refs.form.resetFields();
          if (data.code === "0") {
            Message.success(data.msg);
            this.$router.push({
              path: "/login",
              name: "login",
              query: { type: 1 },
            });
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
  },
};
</script>
<style lang="less" scoped>
.relative-formItem {
  position: relative;
  height: 40px;
  margin: 22px 0;
}
.absolute-btn {
  position: absolute;
  margin-left: 0;
}
.btn-enter {
  transform: translateX(-200px);
  opacity: 0;
}
.btn-enter-active {
  transition: all 0.5s;
}
.btn-enter-to {
  opacity: 1;
}
.btn-leave {
  opacity: 1;
}
.btn-leave-active {
  transition: all 0.5s;
}
.btn-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
</style>