import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Battle from '@/components/Battle.vue'
import Bag from '@/components/Bag.vue'
export default new VueRouter({
  routes: [
    { path: "/", component: Battle },
    { path: "/bag", component: Bag }
  ]
})
