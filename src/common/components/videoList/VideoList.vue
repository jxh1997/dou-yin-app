<template>
  <div class="video-list">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <Videos></Videos>
      </swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/swiper.min.css';
  import Videos from './Videos.vue';

  export default {
    name: 'carrousel',
    components: {
      Swiper,
      SwiperSlide,
      Videos,
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
        },
        // 标识翻页
        page: 1,
      };
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper;
      },
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper);
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
    }
  }
}
</style>
