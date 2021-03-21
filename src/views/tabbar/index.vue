<template>
  <div class="tabbar-container">
    <tabbar-list>
      <tabbar-item
        v-for="(item, index) in tabbarData"
        :key="index"
        @click.native="itemClick(item, index)"
      >
        <a
          href="#"
          class="link"
          :class="{ 'active-style': currentIndex === index }"
        >
          <img :src="item.img" alt="" class="icon-img" />
          <p class="text">{{ item.text }}</p>
        </a>
      </tabbar-item>
    </tabbar-list>
  </div>
</template>

<script>
import tabbarList from "@/components/commom/tabbar/tabbarList";
import tabbarItem from "@/components/commom/tabbar/tabbarItem";
export default {
  components: { tabbarList, tabbarItem },
  data() {
    return {
      currentIndex: 0,
      tabbarData: [
        {
          img: require("@/assets/img/logo.png"),
          text: "首页",
          routeName: "home",
        },
        {
          img: require("@/assets/img/logo.png"),
          text: "分类",
          routeName: "category",
        },
        {
          img: require("@/assets/img/logo.png"),
          text: "购物车",
          routeName: "cart",
        },
        {
          img: require("@/assets/img/logo.png"),
          text: "我的",
          routeName: "profile",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    itemClick(item, index) {
      this.currentIndex = index;
      console.log(item.routeName);
      // this.$router.push({ name: item.routeName });
    },
  },
  computed: {},

  watch: {},
};
</script>

<style scoped lang="less">
.tabbar-container {
  background-color: #f6f6f6;
  box-shadow: 0 -1px 5px #ccc;
  .link {
    display: block;
    height: 100%;
    img {
      margin-top: 5px;
    }
    .text {
      font-size: 15px;
    }
  }
  .active-style {
    color: #f00;
    background-color: #fff;
  }
}
</style>
