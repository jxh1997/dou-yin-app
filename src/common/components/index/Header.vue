<template>
  <div class="header">
    <div class="left" v-if="hasLeft">
      <span
        class="iconfont icon-fanhui"
        v-if="isBack"
        @click="$router.back()"
      ></span>
      <span
        class="iconfont icon-guanbi"
        v-if="isClose"
        @click="$router.go(-1)"
      ></span>
    </div>
    <div class="title">
      <span>{{ title }}</span>
    </div>
    <div class="right" v-if="hasRight">
      <span :style="isChange ? 'opacity: 1;' : 'opacity: 0.8;'" @click="sava">
        {{rightText}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
            required: true,
        },
        hasLeft: {
            type: Boolean,
            default: true,
        },
        hasRight: {
            type: Boolean,
            default: false,
        },
        rightText: {
            type: String,
            default: '',
        },
        isBack: {
            type: Boolean,
            default: true,
        },
        isClose: {
            type: Boolean,
            default: false,
        },
        isChange: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
      sava() {
        this.$emit('saveInfo');
      },
    },
};
</script>

<style lang="less" scoped>
.header {
  height: 48px;
  width: 100%;
  background-color: #101821;
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 0 10px;
  box-sizing: border-box;
  .left {
    position: absolute;
    left: 10px;
    .iconfont {
      font-size: 24px;
    }
  }
  .right {
    position: absolute;
    right: 20px;
    font-weight: 600;
    color: #fa5c00;
    font-size: 18px;
  }
}
</style>
