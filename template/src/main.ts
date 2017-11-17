import Vue from 'vue'
import Element from 'element-ui'

import App from './app/app.module'
import router from './app/route'
import store from './app/vuex/store';
import "./style.css";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false

Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
