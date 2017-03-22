import Vue from 'vue'
import Vuex from 'vuex'
import view from './index.pug'
import AuthProvider from './../../libs/auth.js'
import store from './../../store/index.js'
import {mapActions, mapGetters} from 'vuex'
import UserProfile from './../../components/UserProfile/' 
import TodoPanel from './../../components/TodoPanel/' 

export default (user) => {
	console.log(user)
	Vue.use(Vuex)
	Vue.component('UserProfile', UserProfile)
	Vue.component('TodoPanel', TodoPanel)

	const app = new Vue({
		el: '#app',
		template: view,
		data() {
			return {
				title: 'ToDo App',
				email: user.email,
				photoURL: user.photo,
				newTodo: '',
				editedTodoTitle: ''
			}
		},
		store,
		methods: {
			...mapActions(['getUser', 'deleteTodo', 'getTodos', 'changeStatusTodo', 'editTodo']),
			deleteTodoItem(item){
				this.deleteTodo({
					userId: this.$store.state.user.uid,
					todo: item
				})
			},
			changeStatusTodoItem(item){
				this.changeStatusTodo({
					userId: this.$store.state.user.uid,
					todo: Object.assign({}, item, {complete: !item.complete})
				})
			},
			editTodoItem(item, index){
				if(this.editedTodoTitle !== ''){
					this.editTodo({
						userId: this.$store.state.user.uid,
						todo: Object.assign({}, item, {title: this.editedTodoTitle})
					})
				}
				document.getElementById(`input-edit-${index}`).style.display = 'none'
			},
			editedTodo(e){
				this.editedTodoTitle = e.target.value
			},
			openEditTodo(index){
				document.getElementById(`input-edit-${index}`).style.display = 'block'
				document.getElementById(`input-edit-${index}`).focus()
			},

		},
		computed: {
			...mapGetters(['user', 'todos'])
		},
		beforeMount() {
			this.getUser()
			let _this = this
			this.$store.subscribe(function(mutation, state) {
				switch (mutation.type) {
					case 'setUser':
					state.user.uid ? _this.getTodos(state.user.uid) : _this.loading = false
					break
					case 'setTodos':
					_this.loading = false
					break
				}
			})
		}
	})
}