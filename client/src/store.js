import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: true
  },
  mutations: {
    toggleDrawer() {
      this.state.drawer = !this.state.drawer;
    },
    setDrawerStatus(v) {
      console.log(v);
      this.state.drawer = v;
    },
    toggleMiniVariant() {
      this.state.miniVariant = !this.state.miniVariant;
    }
  },
  actions: {}
});
