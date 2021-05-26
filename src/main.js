import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible/flexible';
import './assets/styles/normalize.css';
import './assets/fonts/iconfont.css';
import Toast from './common/components/toast/toast';

Vue.prototype.$toast = Toast;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
