import template from './index.pug'
import Vue from 'vue'
import {mapActions, mapGetters} from 'vuex'
import AddTodoController from './AddTodoController/'


Vue.component('AddTodoController', AddTodoController)

export default {
	template,
	data() {
		return {
			editedTodoTitle: ''
		}
	},
	methods:{
		...mapActions(['deleteTodo', 'changeStatusTodo', 'editTodo', 'getUser', 'getTodos']),
		selectAllTodos(items){
			for (let key in items){
				this.changeStatusTodo({
					userId: this.$store.state.user.uid,
					todo: Object.assign({},items[key], {complete: true})
				})
			}
		},
		deleteAllCompleteTodos(items){
			for (let key in items){
				if (items[key].complete) {
					this.deleteTodo({
						userId: this.$store.state.user.uid,
						todo: items[key]
					})
				}
			}
		},
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
		}
	},
	computed: {
		...mapGetters(['todos'])
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
}