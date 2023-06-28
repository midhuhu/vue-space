import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/photo.css";
import Vue from "vue";
import ElementUI from "element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// use
Vue.use(ElementUI);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
