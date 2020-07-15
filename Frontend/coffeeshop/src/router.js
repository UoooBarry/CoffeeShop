import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
          path: '/about',
          name: 'about',
          component: () => import('./views/About.vue')
      },
      {
          path:
          '/item/:id', 
          name: 'ItemDisplay',
          component: () => import('./views/Item.vue'),
          props: true
      },
    {
      path: '/checkout',
      name: 'Checkout',
      component: ()=> import('./views/Checkout.vue')
    }

    ]
  })