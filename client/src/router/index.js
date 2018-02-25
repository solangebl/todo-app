import Vue from 'vue'
import Router from 'vue-router'
import ListContainer from '@/components/ListContainer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Lista',
      component: ListContainer
    }
  ]
})
