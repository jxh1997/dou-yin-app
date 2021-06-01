import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routers';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// 解决重复点击导航时，控制台出现报错
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err);
};

// 设置登录权限，用户未登录时需要前往登录
router.beforeEach((to, from, next) => {
  const { meta: { requiresAuth } } = to;
  // 获取当前用户是否登录
  console.log(to, from);
  const isLogin = sessionStorage.getItem('isLogin');
  if (requiresAuth && !isLogin) {
    next({ path: '/sign' });
  } else {
    next();
  }
});

export default router;
