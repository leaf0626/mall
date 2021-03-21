<template>
  <div class="tabbar-item">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.tabbar-item {
  flex: 1;
  text-align: center;
  img {
    width: 22px;
    vertical-align: middle;
  }
}
</style>
