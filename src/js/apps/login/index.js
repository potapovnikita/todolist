import Vue from 'vue'
import Vuex from 'vuex'
import view from './index.pug'
import AuthProvider from './../../libs/auth.js'

Vue.use(Vuex)

export default (args) => {


	console.log(args)

	const app = new Vue({
		el: '#app',
		template: view,
		data() {
			return {
				title: 'ToDo App',
				email: '',
				password: ''
			}
		},
		methods: {
			signIn(){
				const authData = { email: this.email, password: this.password}
				this.Auth = new AuthProvider();
				this.Auth.signIn(authData);
			},
			createUser(){
				const authData = { email: this.email, password: this.password}
				this.Auth = new AuthProvider();
				this.Auth.createUser(authData);
			}
		}
	})

}