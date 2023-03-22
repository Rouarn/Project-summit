import MyAxios from "@/http/MyAxios";
import BASEURL from "@/http/BaseURL";

const BMDURL = BASEURL.BMDURL;

const CinemaApi = {
  /** 查询首页背景图 */
  homeBg() {
    let url = BMDURL + "/home/bg";
    return MyAxios.get(url);
  },

  /** 查询首页logo图片 */
  homeLogo() {
    let url = BMDURL + "/home/logo";
    return MyAxios.get(url);
  },

  /** 查询首页标题 */
  homeTitle() {
    let url = BMDURL + "/home/title";
    return MyAxios.get(url);
  },

  /** 查询首页nav导航项 */
  navBar() {
    let url = BMDURL + "/home/navbar";
    return MyAxios.get(url);
  },

  /** 查询首页简要介绍 */
  homeInfo() {
    let url = BMDURL + "/home/info";
    return MyAxios.get(url);
  },

  /** 查询首页主题切换按钮 */
  homeIcon() {
    let url = BMDURL + "/home/icon";
    return MyAxios.get(url);
  },
};

export default CinemaApi;
