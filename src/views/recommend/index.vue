<template>
  <div class="tuijian-item">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  mounted() {
    console.log('推荐');
    this.$router.push({ path: '/index/recommend/reVideoList' });
  },
};
</script>

<style lang="less" scoped>
.tuijian-item {

}
</style>
