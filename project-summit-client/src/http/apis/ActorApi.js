import MyAxios from "@/http/MyAxios";
import BASEURL from "@/http/BaseURL";

const BMDURL = BASEURL.BMDURL;

const ActorApi = {
  /**
   * 通过电影ID，查询演员列表
   * @param {Object} params {movie_id: 1}
   */
  queryByMovieId(params) {
    let url = BMDURL + "/movie-actors/movieid";
    return MyAxios.get(url, params);
  },

  /**
   * 添加演员
   * @param {Object} params { actorName: xx, actorAvatar: xxx}
   */
  add(params) {
    // let url = "http://localhost:3010/movie-actor/add";
    let url = BMDURL + "/movie-actor/add";

    return MyAxios.post(url, params);
  },

  /**
   * 通过id,删除演员
   * @param {Object} params {id:11}
   */
  delete(params) {
    // let url = "http://localhost:3010/movie-actor/del";
    let url = BMDURL + "/movie-actor/del";

    return MyAxios.post(url, params);
  },

  /**
   * 通过姓名关键字模糊查询演员
   * @param {Object} params {name: '关键字'}
   * @returns Promise
   */
  queryActorsByName(params) {
    // let url = "http://localhost:3010/movie-actors";
    let url = BMDURL + "/movie-actors/name";

    return MyAxios.post(url, params);
  },

  // 查询所有演员
  queryAllActors(page, pagesize) {
    // let url = "http://localhost:3010/movie-actors";
    let url = BMDURL + "/movie-actors";

    let params = { page: page, pagesize: pagesize };
    return MyAxios.get(url, params);
  },
};

export default ActorApi;
