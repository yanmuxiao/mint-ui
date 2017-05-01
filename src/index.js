import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)




import JSComponent from './views/JSComponents.vue'
import CSSComponent from './views/CSSComponents.vue'
import './icon/iconfont.css'


export default new Router({
  routes: [
    {
      path: '/',
      component: JSComponent
    },
    {
      path: '/CSSComponent',
      component: CSSComponent
    }
  ]
})
