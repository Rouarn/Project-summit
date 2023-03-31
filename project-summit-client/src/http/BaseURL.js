const URL_ENV = {
  DEV: {
    // 封装开发环境所需要的url前缀
    BMDURL: "http://localhost:3010",
    UPLOADURL: "http://localhost:9000",
  },
  PRO: {
    //封装生产环境所需要的url
    BMDURL: "http://bmd.xinlian.pub",
    UPLOADURL: "http://bmd.xinlian.pub:9000",
  },
};

//在此选择导出开发环境或生产环境的URL前缀
// export default URL_ENV.DEV;
export default URL_ENV.PRO;
