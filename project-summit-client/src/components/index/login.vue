<template>
  <div class="login">
    <div class="login-container">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="rules"
        label-width="0px"
      >
        <h3 class="title">用户登录</h3>
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="loginForm.remember">记住密码</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')"
            >登录</el-button
          >
          <el-button @click="reset">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import httpApi from "@/http";

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        remember: false,
        Close_the_login_box: false,
        Close_login: "点击了取消按钮",
      },
      login_ok: "",
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = {
            username: this.loginForm.username,
            password: this.loginForm.password,
          };
          httpApi.UserApi.login(params).then(res => {
            // console.log("登录信息:", res);
            this.login_ok = res.data.data.user;

            if (res.data.code == 200) {
              this.$message({
                message: `登陆成功, 欢迎: ${res.data.data.user.nickname}`,
                type: "success",
              });

              this.$emit("login_ok", this.login_ok);
            }
          });
          // 跳转到首页或其他页面
        } else {
          alert("登录失败");
          return false;
        }
      });
    },
    reset() {
      this.$refs.loginForm.resetFields();
      this.$emit("close_login", this.loginForm.Close_the_login_box);
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  // background-color: red;
  position: relative;
  .login-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 400px;
    height: 400px;
    // margin: 100px auto;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0 0 10px #eee;
    background-color: #ffffff;
  }
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
