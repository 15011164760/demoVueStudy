import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
    loading: false,
    isShow: false,
}
const mutations = {
    add(state) {
        state.count++;
    },
    reduce(state) {
        state.count--;
    },
    loadingFn(state, bool) {
        state.isShow = bool;
    },
}
export default new Vuex.Store({
    state,
    mutations
})