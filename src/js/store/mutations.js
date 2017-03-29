import * as actions from './const-mutations.js'

export default {
	[actions.SET_USER](state, user) {
		state.user = { 
			uid: user.uid,
			photoURL: user.photoURL,
			displayName: user.displayName,
			email: user.email 
		}
	},

	[actions.SET_TODOS](state, todos) {
		state.todos = Object.values(todos)
	}
}