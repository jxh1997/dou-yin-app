const publish = [
    {
        path: '/publish',
        name: 'publish',
        component: () => import(/* webpackChunkName: "publish" */ '@/views/publish/index.vue'),
    },
];

export default publish;
