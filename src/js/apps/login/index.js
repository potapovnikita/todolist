import Vue from 'vue'
import Vuex from 'vuex'
import view from './index.pug'
import AuthProvider from './../../libs/auth.js'
import VueRouter from 'vue-router'

Vue.use(Vuex)

export default () => {

	const app = new Vue({
		el: '#app',
		template: view,
		data() {
			return {
				auth: new AuthProvider(),
				title: 'ToDo App',
				email: '',
				password: ''
			}
		},
		methods: {
			signIn(){
				const authData = { email: this.email, password: this.password}
				this.auth.signIn(authData)
					.then(user => window.location.href = '/')

			},
			signInGoogle(){
				this.auth.signInGoogle()
					.then(user => window.location.href = '/')

			},

			createUser(){
				const authData = { email: this.email, password: this.password}
				this.auth.createUser(authData)
					.then(user => window.location.href = '/')
			}
		}
	})

}