<template>
  <div class="nav">
    <div class="nav_center">
      <div class="nav_center_left">
        <div class="nav_center_left_item">
          <img src="../../assets/img/nav_logo.png" alt="" />
          <ul>
            <li
              v-for="(item, index) in nav_bar"
              :key="item"
              :class="{
                active: avtive == index + 1,
                issus: issus == index + 1,
              }"
              @click="avtive = index + 1"
              @mouseenter="issus = index + 1"
              @mouseleave="issus = null"
            >
              {{ item }}
            </li>
          </ul>
          <div
            class="nav_center_left_item_inp"
            @mouseenter="focus = 1"
            @mouseleave="focus = 0"
          >
            <div
              class="search_type"
              @mouseenter="is_search_type = !is_search_type"
              @mouseleave="is_search_type = !is_search_type"
            >
              <span class="is_search_type"
                >{{ search_type }}
                <i class="fa fa-caret-down fa-sm is_search_type_i"></i>
              </span>
              <transition name="search_type">
                <div class="search_type_item" v-show="is_search_type">
                  <span @click="search_type = search_type_item[0]">视频</span>
                  <span @click="search_type = search_type_item[1]">明星</span>
                </div>
              </transition>
            </div>
            <input
              type="text"
              v-model="search"
              :class="{ isfocus: search_focus == 1 }"
              @focus="search_focus = 1"
              @blur="search_focus = 0"
              placeholder="罪罚"
            />
            <transition name="search_hint">
              <ul class="search_hint" v-show="focus == 1">
                <span>热门搜索</span>
                <li v-for="(item, index) in search_hint" :key="item">
                  <span :class="{ search_hint_index: true }" ref="serial">{{
                    index + 1
                  }}</span>
                  <span
                    :class="{
                      search_hint_item: true,
                      ishot: hot == index + 1,
                    }"
                    @mouseenter="hot = index + 1"
                    @mouseleave="hot = null"
                    >{{ item }}</span
                  >
                </li>
              </ul>
            </transition>
          </div>
        </div>
      </div>
      <div class="nav_center_right">
        <i class="fa fa-android" title="APP下载"></i>
        <i
          class="fa fa-clock-o"
          title="播放记录"
          @click="isrecord = !isrecord"
          ref="isrecord"
        >
          <transition name="recently_played_videos">
            <ul class="fa-clock-o_record" v-show="isrecord">
              <li>
                <span>播放记录</span><span @click="record = null">[清空]</span>
              </li>
              <li
                class="fa-clock-o_record_item"
                v-for="item in record"
                :key="item[0]"
              >
                <span> {{ item[0] }}</span>
                <span style="color: #ff0000" :title="item[0]">
                  {{ item[1] }}</span
                >
              </li>
            </ul>
          </transition>
        </i>
        <i
          class="fa fa-user"
          title="登录"
          @click="user_login"
          ref="user_login"
        ></i>
        <ul class="user_info" v-if="main_Login_status && is_user_info">
          <li>用户名: {{ this.main_Login_status.nickname }}</li>
          <li>账号: {{ this.main_Login_status.username }}</li>
          <li>手机: {{ this.main_Login_status.phone }}</li>
          <li>邮箱: {{ this.main_Login_status.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav_bar: ["首页", "电影", "电视剧", "综艺", "动漫", "资讯", "APP下载"],
      avtive: 1,
      issus: "",
      search: "",
      search_type: "视频",
      search_type_item: ["视频", "明星"],
      search_hint: [
        "请君",
        "底线",
        "罚罪",
        "她们的名字",
        "昆仑神宫",
        "断·桥",
        "大考",
        "消失的孩子",
        "简言的夏冬",
        "勇士连",
      ],
      is_search_type: false,
      focus: 0,
      search_focus: "",
      hot: "",
      record: [
        ["斗罗大陆", "第01集"],
        ["狂飙", "第01集"],
        ["斗破苍穹年番", "第01集"],
        ["万里归途", "HD国语"],
      ],
      isrecord: false,
      login: "点击了登录按钮",
      is_user_info: false,
    };
  },
  props: ["main_Login_status"],
  mounted() {
    if (this.$refs.serial[0]) {
      this.$refs.serial[0].style.backgroundColor = "#ff4a4a";
    }
    if (this.$refs.serial[1]) {
      this.$refs.serial[1].style.backgroundColor = "#ff7701";
    }
    if (this.$refs.serial[2]) {
      this.$refs.serial[2].style.backgroundColor = "#ffb400";
    }
  },
  methods: {
    user_login() {
      if (!this.main_Login_status) {
        this.$emit("nav_login", this.login);
      } else {
        this.is_user_info = !this.is_user_info;
      }
    },
  },
  created() {
    document.addEventListener("click", e => {
      if (this.$refs.isrecord) {
        let isSelf = this.$refs.isrecord.contains(e.target);
        if (!isSelf) {
          this.isrecord = false;
        }
      }

      if (this.$refs.user_login) {
        let isSelf = this.$refs.user_login.contains(e.target);
        if (!isSelf) {
          this.is_user_info = !this.is_user_info;
        }
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 60px;
  min-height: 60px;
  background-color: rgba(255, 255, 255, 0.95);
  > .nav_center {
    width: var(--Center-width);
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    > .nav_center_left {
      > .nav_center_left_item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        > ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 450;
          height: 100%;
          color: #111111;
          > li {
            width: 64px;
            text-align: center;
            cursor: pointer;
            > &.active,
            &.issus {
              color: #ff5c38;
              font-weight: 600;
            }
          }
        }
        > .nav_center_left_item_inp {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-items: center;
          align-items: center;
          .search_type {
            position: absolute;
            left: 60px;
            height: 35px;
            cursor: pointer;
            > span {
              display: block;
              height: 35px;
              line-height: 35px;
              z-index: 2;
              color: #666666;
              font-size: 14px;
              > .is_search_type_i {
                pointer-events: none;
              }
            }
            > .search_type_item {
              left: -23px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 80px;
              height: 67px;
              background-color: #ffffff;
              z-index: 2;
              > span {
                font-size: 14px;
                color: #666;
                padding: 2px 0;
              }
            }
          }
          > input {
            width: 260px;
            height: 35px;
            border: none;
            outline: none;
            background-color: #f5f5f5;
            border-radius: 35px;
            margin-left: 50px;
            padding-left: 55px;
            font-size: 12px;
            transition: border-color ease-in-out 0.15s,
              box-shadow ease-in-out 0.15s;
            > &.isfocus {
              border-color: #ff9900;
              box-shadow: inset 0 1px 1px rgba(255, 136, 0, 0.075),
                0 0 8px rgba(255, 136, 0, 0.6);
            }
          }

          > .search_hint {
            position: absolute;
            top: 57px;
            left: 50px;
            width: 260px;
            z-index: 0;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            > span {
              display: inline-block;
              width: 220px;
              height: 20px;
              color: #999999;
              font-size: 14px;
              margin-bottom: 8px;
            }
            > li {
              > .search_hint_index {
                display: inline-block;
                text-align: center;
                width: 18px;
                height: 18px;
                line-height: 18px;
                font-size: 12px;
                color: #ffffff;
                background-color: #eeeeee;
                margin-right: 12px;
              }
              > .search_hint_item {
                font-size: 14px;
                color: #333;
                cursor: pointer;
                > &.ishot {
                  color: #ff5c38;
                }
              }
            }
          }
        }
      }
    }
    > .nav_center_right {
      width: 120px;
      height: 54px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      > i {
        font-size: 24px;
        color: #111111;
        > &.fa-clock-o {
          position: relative;
          > .fa-clock-o_record {
            position: absolute;
            left: -116px;
            width: 260px;
            height: 198px;
            text-align: center;
            background-color: #ffffff;
            padding: 20px;
            > li {
              font-size: 14px;
              color: #333333;
              display: flex;
              justify-content: space-between;
              margin: 15px 0;
              > &:nth-child(1) {
                color: #999999;
                margin: 5px 0 20px 0;
              }
              > span {
                cursor: pointer;
              }
            }
          }
        }
        > &.fa-user {
          position: relative;
        }
      }
      > .user_info {
        position: absolute;
        top: 50px;
        right: -90px;
        width: 220px;
        height: 280px;
        padding: 20px;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: stretch;
        > li {
          font-size: 14px;
        }
      }
    }
  }
}

.search_type-enter-active {
  animation: search_type-in 0.5s;
}
.search_type-leave-active {
  animation: search_type-in 0.5s reverse;
}
@keyframes search_type-in {
  0% {
    transform: translateY(-20%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.search_hint-enter-active {
  animation: search_hint-in 0.5s;
}
.search_hint-leave-active {
  animation: search_hint-in 0.5s reverse;
}
@keyframes search_hint-in {
  0% {
    transform: translateY(-5%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.recently_played_videos-enter-active {
  animation: recently_played_videos-in 0.5s;
}
.recently_played_videos-leave-active {
  animation: recently_played_videos-in 0.5s reverse;
}
@keyframes recently_played_videos-in {
  0% {
    transform: translateY(-5%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

<style>
:root {
  --Center-width: 1400px;
}

body {
  background: #f8f8f8;
  color: #666;
}
</style>
