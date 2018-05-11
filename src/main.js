import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

Vue.use(VueMaterial);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

Vue.config.devtools = true;