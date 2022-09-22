// import VueCompositionAPI from '@vue/composition-api'
import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()
pinia.use(piniaPersist)

export default pinia
