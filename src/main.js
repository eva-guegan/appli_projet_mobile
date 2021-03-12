import Vue from 'vue'
import VueSession from 'vue-session'
import RedirectRoute from './components/RedirectRoute'
import './registerServiceWorker'
import router from './router'

//BootstrapVue
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// Axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueSession)

new Vue({
  router,
  data() {
    return {
      //recent=true pour les séries de - de 2 ans
      //summary=true pour juste les infos essentielle de la série
      //platforms= idPlateform pour affciher les séries présente que sur certaine plateforme
      baseApi: 'https://api.betaseries.com/shows/',
      paramObligatoire: '?v=3.0&key=3b28f318f73e',
      baseUserApi: 'http://localhost:8081/',
    }
  },
  render: h => h(RedirectRoute)
}).$mount('#app')