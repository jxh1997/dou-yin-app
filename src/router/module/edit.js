const edit = [
    {
        path: '/edit',
        name: 'edit',
        component: () => import(/* webpackChunkName: "edit" */ '@/views/mine/editInfo.vue'),
    },
    {
        path: '/update',
        name: 'update',
        component: () => import(/* webpackChunkName: "edit" */ '@/views/mine/updateInfo.vue'),
    },
];

export default edit;
