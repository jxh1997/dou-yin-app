<template>
  <div class="publish">
    <a id="downLoadLink" style="display: none;"></a>
    <video ref="video"></video>
    <div class="top-bar">
      <span class="iconfont icon-guanbi" @click="$router.back()"></span>
      <div class="yinyue">
        <span class="iconfont icon-yinfu"></span>
        选择音乐
      </div>
    </div>
    <!-- <div class="right-bar">

    </div>
    <div class="bottom-bar">

    </div> -->
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
  },
};
</script>

<style lang="less" scoped>
.publish {
  color: #fff;
  height: 100vh;
  box-sizing: border-box;
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
    display: flex;
    width: 100%;
    .icon-guanbi {
      font-size: 34px;
    }
    .yinyue {
      position: absolute;
      left: calc(50% - 65px);
      background: rgba(255, 255, 255, 0.4);
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
}
</style>
