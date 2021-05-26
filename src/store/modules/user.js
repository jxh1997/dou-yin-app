import { GET } from '@/request/http';

const user = {
    namespaced: true,
    state: {
        userInfo: {},
    },
    mutations: {
        assignUseInfo(state, res) {
            state.userInfo = res.userInfo;
        },
    },
    actions: {
        GetUserInfo({ state, commit }, params) {
            GET('/static/userInfo.json')
            .then(res => {
                console.log(res.data);
                commit('assignUseInfo', res.data); // 将请求到的数据赋值给vuex中的state
            });
        },
    },
};

export default user;
