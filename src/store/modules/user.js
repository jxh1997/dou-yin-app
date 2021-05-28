import { GET, POST } from '@/request/http';
import router from '../../router';

const user = {
    namespaced: true,
    state: {
        userInfo: {},
    },
    mutations: {
        assignUseInfo(state, res) {
            state.userInfo = res.userInfo;
        },
        updateUseInfo(state, res) {
            const key1 = res.key;
            const value1 = res.value;
            const that1 = res.that;
            state.userInfo[key1] = value1;
            that1.$toast('修改成功');
            setTimeout(() => {
                // 修改成功之后 返回上一层
                router.back();
            }, 1500);
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
        UpdateUserInfo({ state, commit }, params) {
            commit('updateUseInfo', params);
            // POST('/api/updateInfo', newParams)
            // .then(res => {
            //     console.log(res.data);
            //     commit('updateUseInfo', res.data); // 将请求到的数据赋值给vuex中的state
            // });
        },
    },
};

export default user;
