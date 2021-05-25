import router from '../../router';

const sign = {
    // 命名空间
    namespaced: true,
    state: {
        // 默认的验证码
        verifyCode: '000000',
    },
    mutations: {

    },
    actions: {
        // 登录操作
        sign({ state, commit, rootState }, params) {
            // 登录成功之后 session 中缓存登录标识
            sessionStorage.setItem('isLogin', JSON.stringify(true));
            // 登录成功之后 跳转到 webApp 主页
            router.replace({ path: '/' });
        },
    },
    getters: {

    },
};
export default sign;
