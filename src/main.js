import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible/flexible';
import './assets/styles/normalize.css';
import './assets/fonts/iconfont.css';
// import VueVideoPlayer from 'vue-video-player';
// import 'video.js/dist/video-js.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // VueVideoPlayer,
  render: (h) => h(App),
}).$mount('#app');
