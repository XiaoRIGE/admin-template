import pinia from '@/plugins/index'
import '@/styles/styles.scss'
import Vue from 'vue'
import Directive from '@/directives'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.use(Directive)

Vue.config.productionTip = false

new Vue({
  router,
  pinia,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
