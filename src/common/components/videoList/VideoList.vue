<template>
  <div class="video-list">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item , index) in dataList" :key="index">
        <Videos ref="videos" :video="item" :index="index"></Videos>
        <div class="info-bar">
          <InfoBar :infoName="item.author" :infoDesc="item.desc" :infoMusic="item.music"></InfoBar>
        </div>
        <div class="right-bar">
          <RightBar></RightBar>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/swiper.min.css';
  import Videos from './Videos.vue';
  import InfoBar from '../index/InfoBar.vue';
  import RightBar from '../index/RightBar.vue';

  export default {
    name: 'carrousel',
    components: {
      Swiper,
      SwiperSlide,
      Videos,
      InfoBar,
      RightBar,
    },
    directives: {
      swiper: directive,
    },
    data() {
      return {
        swiperOptions: {
          // 分页器配置
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          // 设定初始化时slide的索引
          initialSlide: 0,
          // Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
          direction: 'vertical',
          // 鼠标覆盖Swiper时指针形状，设置为true时会变成抓手形状
          grabCursor: true,
          // Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，
          // 在对flexbox布局的支持不是很好的浏览器中可能需要用到。
          setWrapperSize: true,
          // 自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
          autoHeight: true,
          // 设置slider容器能够同时显示的slides数量(carousel模式)。
          slidesPerView: 1,
          // 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
          mousewheel: true,
          // 是否开启鼠标控制Swiper切换。设置为true时，能使用鼠标滑轮控制slide滑动。
          mousewheelControl: true,
          // 获取swiper容器的高度。
          height: window.innerHeight, // 因为抖音视频的高度是占满整个屏幕的高度
          // 抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
          resistanceRatio: 0,
          // 将observe应用于Swiper的祖先元素。当Swiper的祖先元素变化时，例如window.resize，Swiper更新。
          observeParents: true,
          // swiper组件提供的方法
          on: {
            tap: () => {
              this.playAction(this.page - 1);
              console.log('点击: ', this.page);
            },
            slidePrevTransitionStart: () => {
              if (this.page > 1) {
                this.page -= 1;
              }
              this.playAction(this.page - 1);
              console.log('下拉：', this.page);
            },
            slideNextTransitionStart: () => {
              this.page += 1;
              this.playAction(this.page - 1);
              console.log('上滑：', this.page);
            },
          },
        },
        dataList: [
          {
            id: '1',
            url: 'http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4',
            author: '小兔子',
            desc: '这里讲的是一只小兔子的故事',
            music: '小兔子乖乖 - 乖乖',
          },
          {
            id: '2',
            url: 'http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4',
            author: '皮卡丘',
            desc: '这里讲的是一只皮卡丘的故事',
            music: '皮卡丘 - 球球',
          },
          {
            id: '3',
            url: 'http://video.jishiyoo.com/549ed372c9d14b029bfb0512ba879055/8e2dc540573d496cb0942273c4a4c78c-15844fe70971f715c01d57c0c6595f45-ld.mp4',
            author: '表情包',
            desc: '这里全是表情包，超可爱',
            music: '表情包 - 三生',
          },
          {
            id: '4',
            url: 'http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4',
            author: '团子和丸子',
            desc: '这里是团子和丸子的小生活',
            music: '团子和丸子 - 自创',
          },
        ],
        // 标识翻页
        page: 1,
      };
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper;
      },
    },
    methods: {
      playAction(index) {
        // index 当前屏幕上显示的视频是第几个视频
        // 调用videos组件的playOrStop 方法
        this.$refs.videos[index].playOrStop();
      },
    },
  };
</script>

<style lang="less" scoped>
.video-list {
  height: 100%;
  .swiper-container {
    height: 100%;
    display: flex;
    background-color: #000;
    color: #fff;
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .info-bar {
        width: 100%;
        position: absolute;
        bottom: 30px;
        left: 0;
      }
      .right-bar {
        width: 70px;
        position: absolute;
        right: 5px;
        top: 40%;
      }
    }
  }
}
</style>
