// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './App'

Vue.config.productionTip = false

Vue.use(VueMaterial)

Vue.material.registerTheme({
  default: {
      primary: 'orange',
      accent: 'blue'
    },
    orange: {
      primary: 'orange',
      accent: 'green'
    },
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
