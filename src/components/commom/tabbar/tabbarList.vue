<template>
  <div class="tabbar-list">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.tabbar-list {
  display: flex;
  height: 49px;
  overflow: hidden;
}
</style>
