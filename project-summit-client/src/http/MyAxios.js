import axios from "axios";
import qs from "qs";
import store from "@/store";
const instance = axios.create();

//配置axios的请求拦截器，在每次发请求时，获取 vuex 中的token
//带着token-起发请求
instance.interceptors.request.use(config => {
  // config为请求数据包的配置信息对象
  config.headers["Authorization"] = store.state.token;

  //最终需要将处理过的config对象返回
  return config;
});

const myaxios = {
  /**
   * 发送get请求
   * @param {string} url  请求资源路径
   * @param {object} params  请求参数对象
   */
  get(url, params) {
    return instance({
      url,
      method: "GET",
      params,
    });
  },

  /**
   * 发送post请求
   * @param {string} url
   * @param {object} params
   */
  post(url, params) {
    return instance({
      url,
      method: "POST",
      data: qs.stringify(params),
    });
  },
};

export default myaxios;
