<template>
  <div class="home-content">
      <topBar></topBar>
      <router-view ></router-view>
  </div>
</template>

<script>
import topBar from '@/common/components/top/TopBar.vue';

export default {
  components: {
    topBar,
  },
};
</script>

<style lang="less" scoped>
.home-content {
  height: 100vh;
}
</style>
