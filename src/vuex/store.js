import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

//state为状态数据，触发action，mutations会去改变state的值，getters对外提拱state的值。
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})