import MyAxios from "../MyAxios";
import BASEURL from "@/http/BaseURL";

const BMDURL = BASEURL.BMDURL;
const adminApi = {
  /**
   * 执行登录业务
   * @param {Object} params {username:xx,  password:xxx}
   */
  login(params) {
    return MyAxios.post(BMDURL + "/user/login", params);
  },
};

export default adminApi;
