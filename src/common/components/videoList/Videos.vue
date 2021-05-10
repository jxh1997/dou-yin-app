<template>
  <div class="videos">
    <video-player
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
    >
    </video-player>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player';

export default {
    components: {
        videoPlayer,
    },
    props: ['video'],
    data() {
      return {
        // videojs options
        playerOptions: {
            // 默认情况下将会消除任何音频。
            muted: true,
            // 如果true,浏览器准备好时开始回放。
            autoplay: false,
            // 导致视频一结束就重新开始。
            loop: true,
            preload: 'auto',
            // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器.
            fluid: true,
            sources: [{
                type: 'video/mp4', // 类型
                // src: require('@/assets/videos/sucai.mp4'),
                src: this.video.url,
            }],
            // 视频宽度,获取客户端宽度
            width: document.documentElement.clientWidth,
            // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
            notSupportedMessage: '此视频暂无法播放，请稍后再试',
            controlBar: false,
        },
      };
    },
    mounted() {
        console.log('this is current player instance object', this.player);
        console.log('video: ', this.video.url);
    },
};
</script>

<style lang="less" scoped>
.videos {
  height: 100%;
  width: 100%;
  padding-bottom: 50px;
  .video-player-box {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /deep/ .vjs-big-play-button {
      position: absolute;
      width: 80px;
      height: 80px;
      border: none;
      background-color: transparent;
      content: none;
      left: 50%;
      top: 55%;
      transform: translate(-50%, -50%);
      .vjs-icon-placeholder {
        font-size: 100px;
        color: rgba(255, 255, 255, 0.7);
      }
    }
    /deep/ .video-js {
      height: calc(100vh - 50px);
    }
  }
}
</style>
