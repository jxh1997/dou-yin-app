import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'index',
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '../views/index/index.vue'),
      },
      {
        path: '/friends',
        name: 'friends',
        component: () => import(/* webpackChunkName: "friends" */ '../views/friends/index.vue'),
      },
      {
        path: '/news',
        name: 'news',
        component: () => import(/* webpackChunkName: "news" */ '../views/news/index.vue'),
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import(/* webpackChunkName: "mine" */ '../views/mine/index.vue'),
      },
    ],
  },
  {
    path: '/release',
    name: 'release',
    component: () => import(/* webpackChunkName: "release" */ '../views/release/index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
