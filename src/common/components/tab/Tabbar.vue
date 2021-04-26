<template>
  <div class="tab-bar">
    <div class="item" @click="changTab(0)">
      <router-link to="/index" tag="span" :class="tabIndex === 0 ? 'active' : ''">首页</router-link>
    </div>
    <div class="item" @click="changTab(1)">
      <router-link to="/friends" tag="span" :class="tabIndex === 1 ? 'active' : ''">朋友</router-link>
    </div>
    <div @click="changTab(0)">
      <router-link to="/index" tag="span">
        <img class="dy-btn" src="@/assets/images/dy-btn.png" alt="" />
      </router-link>
    </div>
    <div class="item" @click="changTab(3)">
      <router-link to="/news" tag="span" :class="tabIndex === 3 ? 'active' : ''">消息</router-link>
    </div>
    <div class="item" @click="changTab(4)">
      <router-link to="/mine" tag="span" :class="tabIndex === 4 ? 'active' : ''">我的</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data() {
    return {
      tabIndex: 0,
    };
  },

  methods: {
    changTab(i) {
      this.tabIndex = i;
    },
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
  .item {
    flex: 1;
    text-align: center;
    font-weight: 500;
  }
  .active {
    color: #ffff;
    font-weight: 600;
  }
  .dy-btn {
    width: 50px;
    height: 30px;
    margin: 10px;
  }
}
</style>
