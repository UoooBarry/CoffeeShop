import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios';
import {coffeeAPIUrl} from './config/variables';

// global variable
Vue.prototype.$axios = axios;
Vue.prototype.$coffeeAPIUrl = coffeeAPIUrl;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
