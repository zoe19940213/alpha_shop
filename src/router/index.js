import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'root',
    redirect: '/shopping/address'
  },
  {
    path: '/shopping',
    name: 'step-address',
    component: () =>
      import ('../views/Form'),
    children: [{
        name: 'address',
        path: 'address',
        component: () =>
          import ('../views/Address')
      },
      {
        name: 'shipment',
        path: 'shipment',
        component: () =>
          import ('../views/Shipment')
      },
      {
        name: 'payment',
        path: 'payment',
        component: () =>
          import ('../views/Payment')
      }
    ]
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