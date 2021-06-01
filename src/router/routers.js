import home from './module/home';
import sign from './module/sign';
import publish from './module/publish';
import edit from './module/edit';

const routes = [
    {
        path: '/',
        redirect: '/index/recommend',
    },
    {
        path: '/index',
        redirect: '/index/recommend',
    },
    ...home,
    ...sign,
    ...publish,
    ...edit,
];

export default routes;
