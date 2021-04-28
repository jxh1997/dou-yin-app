import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/index/recommend/',
  },
  {
    path: '/index',
    redirect: '/index/recommend/',
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
        children: [
          {
            path: 'follows',
            name: 'follows',
            component: () => import(/* webpackChunkName: "follows" */ '../views/follow/index.vue'),
            children: [
              {
                path: 'reVideoList',
                name: 'reVideoList',
                component: () => import(/* webpackChunkName: "VideoList" */ '../common/components/index/VideoList.vue'),
              },
            ],
          },
          {
            path: 'recommend',
            name: 'recommend',
            component: () => import(/* webpackChunkName: "recommend" */ '../views/recommend/index.vue'),
            children: [
              {
                path: 'reVideoList',
                name: 'reVideoList',
                component: () => import(/* webpackChunkName: "VideoList" */ '../common/components/index/VideoList.vue'),
              },
            ],
          },
        ],
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
