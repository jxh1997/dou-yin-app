const sign = [
    {
        path: '/sign',
        name: 'Sign',
        component: () => import(/* webpackChunkName: "sign" */ '@/views/Sign.vue'),
    },
    {
        path: '/codeSign',
        name: 'codeSign',
        component: () => import(/* webpackChunkName: "code" */ '@/views/Code.vue'),
    },
];

export default sign;
