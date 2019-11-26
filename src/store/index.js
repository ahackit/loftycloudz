import Vuex from 'vuex';
import Vue from 'vue';
import clouds from './modules/clouds';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    clouds
  }
});
