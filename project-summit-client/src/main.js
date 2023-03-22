import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入 font-awesome 图标库
import "font-awesome/css/font-awesome.css";

Vue.config.productionTip = false;

//声明全局变量保存上传文件的前缀
import BaseUrl from "@/http/BaseURL";
Vue.prototype.UPLOADURL = BaseUrl.UPLOADURL;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");