<template>
  <div id="app">
    <!-- <router-view/> -->
    <div class="content"></div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "@/views/tabbar/index.vue";
export default {
  name: "app",
  components: {
    tabbar,
  },
};
</script>

<style lang="less" scoped>
@import "assets/style/base.css";
.content {
  height: calc(100vh - 49px);
  overflow: scroll;
}
</style>

