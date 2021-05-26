import Vue from 'vue';
import Vuex from 'vuex';
import sign from './modules/sign';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    sign,
  },
});
