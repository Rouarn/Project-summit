<template>
  <div class="home">
    <!-- 首页导航栏 -->
    <NAV @nav_login="login" :main_Login_status="Login_status"></NAV>
    <!-- 登录事件处理 -->
    <login v-show="dl" @close_login="close" @login_ok="login_ok"></login>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import NAV from "@/components/index/nav.vue";
import login from "@/components/index/login.vue";
export default {
  components: { NAV, login },
  data() {
    return {
      dl: "",
      Login_status: "",
      isloginOK: false,
    };
  },
  mounted() {},
  methods: {
    login(data) {
      this.dl = data;
      // console.log(this.dl);
    },
    close(data) {
      this.dl = data;
      // console.log(this.dl);
    },
    login_ok(data) {
      this.dl = null;
      this.Login_status = data;
      // console.log("登陆状态:", this.Login_status);
    },
  },
};
</script>
<style lang="scss" scoped></style>
