import Home from '@/views/Home.vue';

const home = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/index',
                name: 'index',
                component: () => import(/* webpackChunkName: "index" */ '@/views/index/index.vue'),
                children: [
                    {
                        path: 'follows',
                        name: 'follows',
                        component: () => import(/* webpackChunkName: "follows" */ '@/views/follow/index.vue'),
                        children: [
                            {
                                path: 'reVideoList',
                                name: 'reVideoList',
                                component: () => import(/* webpackChunkName: "VideoList" */ '@/common/components/videoList/VideoList.vue'),
                            },
                        ],
                    },
                    {
                        path: 'recommend',
                        name: 'recommend',
                        component: () => import(/* webpackChunkName: "recommend" */ '@/views/recommend/index.vue'),
                        children: [
                            {
                                path: 'reVideoList',
                                name: 'reVideoList',
                                component: () => import(/* webpackChunkName: "VideoList" */ '@/common/components/videoList/VideoList.vue'),
                            },
                        ],
                    },
                ],
            },
            {
                path: '/friends',
                name: 'friends',
                component: () => import(/* webpackChunkName: "friends" */ '@/views/friends/index.vue'),
            },
            {
                path: '/news',
                name: 'news',
                component: () => import(/* webpackChunkName: "news" */ '@/views/news/index.vue'),
                meta: {
                    requiresAuth: true, // 是否需要登录权限
                },
            },
            {
                path: '/mine',
                name: 'mine',
                component: () => import(/* webpackChunkName: "mine" */ '@/views/mine/index.vue'),
                meta: {
                    requiresAuth: true, // 是否需要登录权限
                },
            },
        ],
    },
];

export default home;
