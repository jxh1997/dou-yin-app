<template>
  <div class="top-bar">
    <div class="bar-fun" @click="toLive">
      <i class="iconfont icon-zhibo"></i>
    </div>
    <div class="bar-menu">
      <topItem top-title="关注" nav-path="/index/follows"> </topItem>
      <topItem top-title="推荐" nav-path="/index/recommend"> </topItem>
    </div>
    <div class="bar-fun" @click="toSearch">
      <i class="iconfont icon-sousuo"></i>
    </div>
  </div>
</template>

<script>
import topItem from './TopItem.vue';

export default {
  components: {
    topItem,
  },
  methods: {
    toLive() {
      console.log('toLive');
    },
    toSearch() {
      console.log('toSearch');
    },
  },
};
</script>

<style lang="less" scoped>
.top-bar {
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  flex: 1;
  padding: 0 20px;
  .bar-fun {
    .iconfont {
      font-size: 28px;
      color: rgb(190, 190, 190);
    }
    .icon-sousuo {
      font-size: 30px;
    }
  }
  .bar-menu {
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    width: 50%;
    color: rgb(190, 190, 190);
    font-weight: 600;
  }
}
</style>
