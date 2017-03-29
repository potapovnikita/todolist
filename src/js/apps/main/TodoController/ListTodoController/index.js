import Vue from 'vue'
import {mapActions, mapGetters, mapState} from 'vuex'
import template from './index.pug'

import TodoList from './../../../../components/TodoList/'

Vue.component('TodoList', TodoList)

export default {
	template,
	props: ['preloader'],
	data() {
		return {
			editedTodoTitle: ''
		}
	},
	methods:{
		...mapActions(['deleteTodo', 'changeStatusTodo', 'editTodo']),
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
		editTodoItem(item, index, attr){
			if(this.editedTodoTitle !== ''){
				this.editTodo({
					userId: this.$store.state.user.uid,
					todo: Object.assign({}, item, {title: this.editedTodoTitle})
				})
			}
			document.getElementById(`input-edit-${index}${attr}`).style.display = 'none'
			this.editedTodoTitle = ''
		},
		editedTodo(e){
			this.editedTodoTitle = e.target.value
		},

		openEditTodo(index, attr){
			document.getElementById(`input-edit-${index}${attr}`).style.display = 'block'
			document.getElementById(`input-edit-${index}${attr}`).focus()
		}
	},
	computed: {
		...mapGetters(['todos', 'completedTodos', 'uncompletedTodos'])
	}
}