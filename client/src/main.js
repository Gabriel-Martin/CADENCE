import Vue from "vue";
import "./plugins/vuetify";
import "@babel/polyfill";

import "./plugins/vuetify";
import "./registerServiceWorker";
import "./global.css";

import * as artistQuery from "./api";

import router from "./router";
import store from "./store";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.prototype.$artistQuery = artistQuery;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
