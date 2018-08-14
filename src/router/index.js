import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import Details from '@/components/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details
    }
  ]
})
