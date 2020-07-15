import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import VueSession from 'vue-session';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {coffeeAPIUrl, orderAPIUrl} from './config/variables';
import FlashMessage from '@smartweb/vue-flash-message';

// global variable
Vue.prototype.$axios = axios;
Vue.prototype.$coffeeAPIUrl = coffeeAPIUrl;
Vue.prototype.$orderAPIUrl = orderAPIUrl;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// Session storage
Vue.use(VueSession);
// Flash messages
Vue.use(FlashMessage);