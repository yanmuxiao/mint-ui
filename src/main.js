import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import App from './App.vue'

import './icon/iconfont.css'


Vue.use(MintUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
