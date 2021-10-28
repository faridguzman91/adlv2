import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vSelect from "vue-select";
// import Slider from '@vueform/slider/dist/slider.vue2.js';
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI);

Vue.component("v-select", vSelect);


Vue.config.productionTip = false;

//make app router-aware

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
