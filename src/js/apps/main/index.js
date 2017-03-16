import Vue from 'vue'
import Vuex from 'vuex'
import view from './index.pug'
import AuthProvider from './../../libs/auth.js'

Vue.use(Vuex)

export default (user) => {


	console.log('Вы вошли:', user)

	// const store = new Vuex.Store({
	// 	state: {
	// 		count: 0
	// 	},
	// 	mutations: {
	// 		increment (state) {
	// 			state.count++
	// 		}
	// 	}
	// })

	const app = new Vue({
		el: '#app',
		template: view,
		data() {
			return {
				title: 'ToDo App',

			}
		},
		methods: {
			signOut(){
				this.Auth = new AuthProvider();
				this.Auth.signOut();
			}
		}
	})
}
