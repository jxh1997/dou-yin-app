<template>
  <div class="publish">
    <a id="downLoadLink" style="display: none"></a>
    <video ref="video"></video>
    <div class="top-bar">
      <span class="iconfont icon-guanbi" @click="$router.back()"></span>
      <div class="yinyue">
        <span class="iconfont icon-yinfu"></span>
        选择音乐
      </div>
    </div>
    <div class="right-bar">
      <div class="tool-item">
        <span class="iconfont icon-fanzhuan"></span>
        <span>翻转</span>
      </div>
      <div class="tool-item">
        <span class="iconfont icon-sudu"></span>
        <span>快慢速</span>
      </div>
      <div class="tool-item">
        <span class="iconfont icon-lvjing"></span>
        <span>滤镜</span>
      </div>
      <div class="tool-item">
        <span class="iconfont icon-meihua"></span>
        <span>美化</span>
      </div>
      <div class="tool-item">
        <span class="iconfont icon-xiaochengxu_tubiao"></span>
        <span>倒计时</span>
      </div>
      <div class="tool-item">
        <span class="iconfont icon-duoren"></span>
        <span>广角</span>
      </div>
      <div class="tool-item">
        <span class="iconfont icon-gengduo"></span>
        <span>更多</span>
      </div>
    </div>
    <div class="bottom-bar">
      <div class="bar-top">
        <span
          :class="itemIndex === 1 ? 'bar-top-item active' : 'bar-top-item '"
          @click="itemIndex = 1"
          >照片</span
        >
        <span
          :class="itemIndex === 2 ? 'bar-top-item active' : 'bar-top-item '"
          @click="itemIndex = 2"
          >视频</span
        >
        <span
          :class="itemIndex === 3 ? 'bar-top-item active' : 'bar-top-item '"
          @click="itemIndex = 3"
          >文字</span
        >
      </div>
      <div class="bar-bottom">
        <div class="bar-bottom-item">
          <img src="@/assets/images/mine/tx2.png" alt="" />
          <span>道具</span>
        </div>
        <div class="paizhao" @click="photograph" v-if="itemIndex === 1">
          <div class="paizhao2"></div>
        </div>
        <div class="paishe" @click="recodeOrStop" v-if="itemIndex === 2">
          <div class="paishe2">
            <span class="iconfont icon-shandian"></span>
          </div>
        </div>
        <div class="bar-bottom-item">
          <img src="@/assets/images/mine/bj3.png" alt="" />
          <span>相册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mediaStreamTrack: {}, // 退出时关闭摄像头
      video_stream: '', // 视频stream
      recordedBlobs: [], // 视频音频 blobs
      isRecord: false, // 视频是否正在录制
      itemIndex: 2,
    };
  },
  mounted() {
    // 进入页面 调用摄像头
    this.getCamera();
  },
  methods: {
    // 调用打开摄像头功能
    getCamera() {
      // 旧版本浏览器可能根本不支持mediaDevices，我们首先设置一个空对象
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
      }
      navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
          .then((stream) => {
          // 摄像头开启成功
          this.mediaStreamTrack = typeof stream.stop === 'function' ? stream : stream.getTracks()[0];
          this.video_stream = stream;
          this.$refs.video.srcObject = stream;
          this.$refs.video.play();
        })
        .catch(err => {
          console.log(err);
        });
    },
    recordOrStop() {
      if (this.isRecord) {
        this.stop();
      } else {
        this.record();
      }
    },
    // 视频录制
    record() {
      console.log('record');
      this.isRecord = !this.isRecord;
      let mediaRecorder;
      let options;
      this.recordedBlobs = [];
      if (typeof MediaRecorder.isTypeSupported === 'function') {
        // 根据浏览器来设置编码参数
        if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) {
          options = {
            MimeType: 'video/webm;codecs=h264',
          };
        } else if (MediaRecorder.isTypeSupported('video/webm;codecs=h264')) {
          options = {
            MimeType: 'video/webm;codecs=h264',
          };
        } else if (MediaRecorder.isTypeSupported('video/webm;codecs=vp8')) {
          options = {
            MimeType: 'video/webm;codecs=vp8',
          };
        }
        console.log(options);
        mediaRecorder = new MediaRecorder(this.video_stream, options);
      } else {
        // console.log('isTypeSupported is not supported, using default codecs for browser');
        console.log('当前不支持isTypeSupported，使用浏览器的默认编解码器');
        mediaRecorder = new MediaRecorder(this.video_stream);
      }
      mediaRecorder.start();
      mediaRecorder.ondataavailable = e => {
        console.log(e);
        if (e.data && e.data.size > 0) {
          this.recordedBlobs.push(e.data);
        }
      };
      // 停止录像后增加下载视频按钮，将视频流转为mp4格式，并在页面增加视频回放窗口
      mediaRecorder.onstop = () => {
        const blob = new Blob(this.recordedBlobs, { type: 'video/mp4' });
        this.recordedBlobs = [];
        const videoUrl = window.URL.createObjectURL(blob);
        document.getElementById('downLoadLink').href = videoUrl;
        // 下载mp4格式视频
        document.getElementById('downLoadLink').download = 'media.mp4';
        document.getElementById('downLoadLink').innerHTML = 'DownLoad video file';
        // 生成随机数字
        const rand = Math.floor((Math.random() * 1000000));
        // 生成视频名
        const name = `video${rand}.mp4`;
        document.getElementById('downLoadLink').setAttribute('download', name);
        document.getElementById('downLoadLink').setAttribute('name', name);

        setTimeout(() => {
          document.getElementById('downLoadLink').click();
        }, 500);
      };
    },
    // 停止录制
    stop() {
      this.isRecord = !this.isRecord;
      if (!this.$refs.video.srcObject) return;
      const stream = this.$refs.video.srcObject;
      const tracks = stream.getTracks();
      // 关闭摄像头和音频
      tracks.forEach(track => {
        track.stop();
      });
    },
    // 拍照
    photograph() {
      console.log('paizhao');
    },
  },
};
</script>

<style lang="less" scoped>
.publish {
  color: #fff;
  margin: 0;
  padding: 0;
  overflow: hidden;
  video {
    position: relative;
    width: 100%;
    height: 100vh;
    object-fit: fill;
  }
  .top-bar {
    position: absolute;
    top: 0;
    left: 0;
    padding: 40px 18px;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    .icon-guanbi {
      font-size: 34px;
    }
    .yinyue {
      position: absolute;
      left: calc(50% - 65px);
      background: rgba(0, 0, 0, 0.4);
      width: 130px;
      height: 35px;
      border-radius: 20px;
      text-align: center;
      line-height: 35px;
      font-size: 14px;
      .icon-yinfu {
        margin-right: 10px;
      }
    }
  }
  .right-bar {
    position: absolute;
    right: 0;
    top: 0;
    padding: 40px 18px;
    box-sizing: border-box;
    .tool-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 18px;
      span {
        font-size: 12px;
      }
      .iconfont {
        font-size: 30px;
        margin-bottom: 5px;
      }
      .icon-fanzhuan {
        font-size: 26px;
      }
      .icon-sudu {
        margin-bottom: -1px;
      }
      .icon-lvjing {
        font-size: 35px;
        margin-bottom: -1px;
      }
      .icon-meihua {
        font-size: 35px;
        margin-bottom: -1px;
      }
      .icon-xiaochengxu_tubiao {
        font-size: 35px;
        margin-bottom: -1px;
      }
      .icon-gengduo {
        font-size: 35px;
        margin-bottom: -1px;
      }
    }
  }
  .bottom-bar {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 25px 50px;
    box-sizing: border-box;
    .bar-top {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      .bar-top-item {
        display: block;
        width: 50px;
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        margin: 0 2px;
      }
      .active {
        background: #fff;
        color: #000;
        height: 28px;
        line-height: 28px;
        border-radius: 20px;
      }
    }
    .bar-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .bar-bottom-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          width: 35px;
          height: 35px;
          border-radius: 5px;
          margin-bottom: 3px;
        }
      }
      .paishe {
        height: 80px;
        width: 80px;
        text-align: center;
        line-height: 80px;
        border-radius: 50%;
        border: 5px solid #fff;
        margin-top: 8px;
        .paishe2 {
          height: 76px;
          width: 76px;
          background-color: rgb(241, 25, 43);
          border-radius: 50%;
          margin: 2px;
          .icon-shandian {
            font-size: 40px;
          }
        }
      }
      .paizhao {
        height: 80px;
        width: 80px;
        border-radius: 50%;
        border: 5px solid #fff;
        margin-top: 8px;
        .paizhao2 {
          height: 76px;
          width: 76px;
          background-color: rgb(255, 255, 255);
          border-radius: 50%;
          margin: 2px;
        }
      }
    }
  }
}
</style>
