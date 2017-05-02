import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


import App from './App.vue'
import router from './index.js'



Vue.use(MintUI)

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
