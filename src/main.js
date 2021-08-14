import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuesax from "vuesax";
import Prompt from "./prompt";
import VueAnime from "vue-animejs";
import VueDatePicker from "@mathieustan/vue-datepicker";

import "./registerServiceWorker";
import "vuesax/dist/vuesax.css";
import "@mathieustan/vue-datepicker/dist/vue-datepicker.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import CommonInput from "@/components/common/CommonInput";

import "@/directives/cleave";

// Options: You can set lang by default

library.add(fas);
library.add(fab);

Vue.component("fa", FontAwesomeIcon);
Vue.component("common-input", CommonInput);
Vue.use(Prompt);
Vue.use(VueAnime);
Vue.use(Vuesax, {
  colors: {
    primary: "#F87708"
  }
});
Vue.use(VueDatePicker, {
  lang: "he"
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
