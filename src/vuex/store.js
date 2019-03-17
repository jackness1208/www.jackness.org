import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import getters from './getters.js';
import theme from '../components/widget/theme/theme.js';

Vue.use(Vuex);

const state = {
  theme,
  demoLogs: []
};
const mutations = {
  ADD_DEMO_LOG(st, msg) {
    st.demoLogs.push(msg);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
