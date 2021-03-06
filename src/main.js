import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "babel-polyfill";
import App from "./App.vue";
import router from "./router";


Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  render: h => h(App),
  router,
}).$mount("#app");
