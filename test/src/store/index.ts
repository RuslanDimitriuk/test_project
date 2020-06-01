import Vue from 'vue'
import Vuex from 'vuex'
import TableModule from './modules/table'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      TableModule
  }
})
