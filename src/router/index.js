import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'root',
    redirect: '/address'
  }, {
    path: '/address',
    name: 'step-address',
    component: () =>
      import ('../views/Address')
  },
  {
    path: '/payment',
    name: 'step-payment',
    component: () =>
      import ('../views/Payment')
  },
  {
    path: '/shipment',
    name: 'step-shipment',
    component: () =>
      import ('../views/Shipment')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  },
]

const router = new VueRouter({
  routes
})

export default router