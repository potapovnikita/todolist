import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: {
		user:{},
		todos:[],
	},
	getters: {
		user: state => ({ ...state.user }),
		todos: state => ([ ...state.todos ]),
		completedTodos: state => ([...state.todos].filter(function(key){
			return key.complete == true;
		})),
		uncompletedTodos: state => ([...state.todos].filter(function(key){
			return key.complete == false;
		}))
	},
	mutations,
	actions
})

