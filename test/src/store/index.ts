import Vue from 'vue'
import Vuex from 'vuex'
import TableModule from './modules/table'
import CanvasModule from './modules/canvas'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      TableModule,
      CanvasModule
  }
})
