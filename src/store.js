import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import battle from '@/store/battle.js'
import bag from '@/store/bag.js'
const store = new Vuex.Store({
  modules: {
    battle, bag
  }
})
export default store
