import Vue from 'vue'
import Router from 'vue-router'

import Webgis from '../views/home/webGis.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/webgis',
      name: 'Webgis',
      component: Webgis
    }
  ]
})
