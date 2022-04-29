import Vue from 'vue'
import App from './App'
import router from './router'
import VModal from 'vue-js-modal'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faMagnifyingGlass,
  faCartShopping,
  faMoon,
  faSun,
  faMinus,
  faPlus,
  faCheck
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "./assets/styles/basic.scss"

Vue.use(VModal)
library.add(faMagnifyingGlass, faCartShopping, faMoon, faSun, faMinus, faPlus, faCheck, faFacebook, faInstagram, faWhatsapp)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')