import Vue from 'vue'
import Router from 'vue-router'

import Webgis from '../views/home/webGis.vue'
import UsePdf from '../views/home/usePdf.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/webgis'
    },
    {
      path: '/webgis',
      name: 'Webgis',
      component: Webgis
    },
    {
      path: '/usePdf',
      name: 'UsePdf',
      component: UsePdf
    },
  ]
})
