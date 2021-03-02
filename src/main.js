import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueSession from 'vue-session'

import RedirectRoute from './components/RedirectRoute'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueSession)

new Vue({
  router,
  render: h => h(RedirectRoute)
}).$mount('#app')