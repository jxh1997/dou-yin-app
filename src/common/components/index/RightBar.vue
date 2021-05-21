<template>
  <div class="right-bar">
    <div class="bar-item">
      <div class="author-item">
        <img :src="perPicture" alt="" class="author-img" />
        <img src="@/assets/images/icon/guanzhu.png" alt="" class="guanzhu" />
      </div>
    </div>
    <div class="bar-item">
        <div class="item-icon">
            <span class="iconfont icon-xin" :class="isLike ? 'active' : ''" @click.stop="toggleLike($event)"></span>
            <p>{{perLikes}}</p>
        </div>
    </div>
    <div class="bar-item">
        <div class="item-icon">
            <span class="iconfont icon-pinglun1" @click.stop="showCom($event)"></span>
            <p>{{perComments}}</p>
        </div>
    </div>
    <div class="bar-item">
        <div class="item-icon">
            <span class="iconfont icon-fenxiang"></span>
            <p>{{perForward}}</p>
        </div>
    </div>
    <div class="bar-item">
      <div class="item-music">
        <img src="@/assets/images/music_avatar.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['perPicture', 'perLikes', 'perComments', 'perForward'],
  data() {
    return {
      isLike: false,
    };
  },
  methods: {
    toggleLike(e) {
      // 阻止默认事件
      this.isLike = !this.isLike;
      e.stopPropagation();
      console.log('点赞', e);
    },
    showCom(e) {
      e.stopPropagation();
      this.$emit('changeCom');
      console.log('评论', e);
    },
  },
};
</script>

<style lang="less" scoped>
.right-bar {
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .bar-item {
    height: 70px;
    .author-item {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      position: relative;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      .author-img {
        width: 58px;
        height: 58px;
        border-radius: 50%;
        border: 3px solid #fff;
      }
      .guanzhu {
        position: absolute;
        left: 14px;
        bottom: -20px;
      }
    }
    .item-icon {
        font-size: 15px;
        margin-top: 20px;
        text-align: center;
        .iconfont {
            font-size: 30px;
        }
        p {
            margin-top: 0;
        }
        .active {
          color: rgb(253, 83, 21);
        }
    }
    .item-music {
      height: 54px;
      width: 54px;
      line-height: 54px;
      background: #2e2e2e;
      border-radius: 50%;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: record 6s linear infinite;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }

    @keyframes record {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
