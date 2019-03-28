import Vue from 'vue'
import Router from 'vue-router'
import user from '@/components/user'
import Resource from 'vue-resource'

Vue.use(Resource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'user',
      component: user
    }
  ]
})
