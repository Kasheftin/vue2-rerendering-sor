import Vue from 'vue'
import Vuex from 'vuex'
import * as example2 from './example2'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    example2: {
      ...example2,
      namespaced: true
    }
  }
})
