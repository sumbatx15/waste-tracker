import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuesax from 'vuesax';
import Prompt from './prompt';

import './registerServiceWorker';
import 'vuesax/dist/vuesax.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas);
library.add(fab);

Vue.component('fa', FontAwesomeIcon);
Vue.use(Prompt);
Vue.use(Vuesax, {
  colors: {
    primary: '#F87708'
  }
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
