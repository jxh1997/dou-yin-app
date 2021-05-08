<template>
  <div class="tab-bar">
    <TabItem tab-title="首页" nav-path="/index"></TabItem>
    <TabItem tab-title="朋友" nav-path="/friends"></TabItem>
    <TabItem nav-path="/release">
      <img class="dy-btn" src="@/assets/images/dy-btn.png" alt="" />
    </TabItem>
    <TabItem tab-title="消息" nav-path="/news"></TabItem>
    <TabItem tab-title="我的" nav-path="/mine"></TabItem>
  </div>
</template>

<script>
import TabItem from './TabItem.vue';

export default {
  name: 'Tabbar',
  components: {
    TabItem,
  },
};
</script>

<style lang="less" scoped>
.tab-bar {
  background: #000000;
  height: 50px;
  width: 100%;
  line-height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  color: #cccccc;
  font-size: 16px;
  z-index: 99;
  .dy-btn {
    width: 50px;
    height: 30px;
    margin: 10px;
  }
}
</style>
