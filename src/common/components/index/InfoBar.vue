<template>
  <div class="info-bar">
    <div class="infobar-item">@{{infoName}}</div>
    <div class="infobar-item">{{infoDesc}}</div>
    <div class="infobar-item music-item">
      <span class="iconfont icon-douyin"></span>
      <div class="music-name">
        <span :data-text="infoMusic">{{infoMusic}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['infoName', 'infoDesc', 'infoMusic'],
};
</script>

<style lang="less" scoped>
.info-bar {
  color: #fff;
  padding-left: 10px;
  font-size: 16px;
  .infobar-item {
    padding: 5px 0;
    display: flex;
  }
  .music-item {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    font-size: 16px;
    .music-name {
      span {
        display: inline-block;
        padding-left: 100%;  /* 从右至左开始滚动 */
        animation: marqueeTransform 10s linear infinite;
        &:after{
        content: attr(data-text);
          margin-left: 60px;
        }
      }
    }
    @keyframes marqueeTransform {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
  }
}
</style>
