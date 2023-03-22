# Project summit



# 介绍

#### 项目峰会小组仓库

1. **项目立项.** (项目峰会, 参赛项目, 为了出线 ! ! ! 出线 ! ! ! 出线 ! ! ! )

   项目背景: 	曾经```有一群少年，少女,他们有一个梦想：想要环游世界，看到不同的风景和文化。他们每天都在学校里讨论着自己的计划，画着地图，攒着钱。他们约定毕业后就一起出发，实现他们的梦想。在校的这百年里他们并没有放弃自己和朋友之间约定好要环游世界. 但由于学业繁重,导致时空错乱, 他们每次想要聚集在一起时都会穿越到不同时间段,有时候会回到过去, 有时候会穿越未来. 在时空的乱序中,他们无法真正的记录下每次旅行中看到美丽风景和文化.

   因此 ! 他们决定做一个**影视推荐**的项目来纪念这<u>*没有实现的梦想*.</u>

#### 软件架构
本项目采用 : Vue2 + JavaScript  + Axios网络请求库 + Font Awesome图标库  所编写  


#### 仓库贡献者
-- 按加入仓库顺序排序  

·  达内WEB-上海 严淳  

·  达内WEB-上海 李娇  

·  达内WEB-上海 张彩彩  

·  达内WEB-上海 范正强  

·  达内WEB-上海 黄明辉  

·  达内WEB-上海 张昊泽  

·  达内WEB-上海 刘亮



#### 搭建前端脚手架开发环境

1. 新建干净目录 运行以下命令, 新建项目: Project-summit-client

   ```shll
   vue create project-summit
   ```

   选择合适的配置: 

   ![image-20230322174012583](D:\Entertainment\Rouran\Personage\BootCamp\Project-summit\assets\image-20230322174012583.png)

2. 进入项目目录下, 安装所需要模块. 

   ```shell
   npm  i  axios  -S
   npm install font-awesome --save
   ```

3. `App.vue`中, 配置引入`font-awesome`.

   ```vue
   <style lang="scss">
   [class^="el-icon-fa"],
   [class*=" el-icon-fa"] {
     display: inline-block;
     font: normal normal normal 14px/1 FontAwesome !important;
     font-size: inherit;
     text-rendering: auto;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
   }
   @import "../node_modules/font-awesome/css/font-awesome.css";
   @import "../src/assets/css/reset.css";
   $fa-css-prefix: el-icon-fa;
   </style>
   
   ```

   正常使用

   ```vue
   		<i class="fa fa-user"></i>
           <i class="fa fa-tree"></i>
   ```

4. 启动脚手架服务, 访问首页.

   ```shll
   npm  run  serve
   ```

5. 或者克隆Gitee仓库中的已有项目, 在干净目录中运行以下代码:

   ```shll
   git  clone https://gitee.com/woyuxiaji/project-summit.git
   ```

   

#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
