import Vue from 'vue'
import Vuex from 'vuex'
import view from './index.pug'
import AuthProvider from './../../libs/auth.js'
import store from './../../store/index.js'
import { mapActions, mapGetters } from 'vuex'

console.log(store)

export default (user) => {
	Vue.use(Vuex)
	console.log('Вы вошли:', user)

	const app = new Vue({
		el: '#app',
		template: view,
		data() {
			return {
				title: 'ToDo App',
				email: user.email,
				newTodo: ''
			}
		},
		store,
		methods: {
			...mapActions(['getUser', 'signOut','addTodo', 'getTodos']),
			addTodoItem(){
				this.addTodo({
					userId: this.$store.state.user.uid,
					todo: {title: this.newTodo, date: new Date()}
				})
				this.newTodo = ''
			}
		},
		computed: {
			...mapGetters(['user'])
		},
		beforeMount() {
			this.getUser()

			//let _this = this
			// this.$store.subscribe(function(mutation, state) {
			// 	switch (mutation.type) {
			// 		case 'setUser':
			// 		state.user.uid ? _this.getTodos(state.user.uid) : _this.loading = false
			// 		break
			// 		case 'setTodos':
			// 		_this.loading = false
			// 		break
			// 	}
			// })
		}

	})
}
