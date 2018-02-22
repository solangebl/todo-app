import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import ListContainer from '@/components/ListContainer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Todos',
      component: List
    },
    {
      path: '/new',
      name: 'Lists',
      component: ListContainer
    }
  ]
})
