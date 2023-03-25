<template>
  <div class="home">
    <!-- 首页导航栏 -->
    <NAV></NAV>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import NAV from "@/components/index/nav.vue";
export default {
  components: { NAV },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
