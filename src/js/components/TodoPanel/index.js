import template from './index.pug'
import {mapActions, mapGetters} from 'vuex'

export default {
	template,
	data() {
		return {
			newTodo: '',
		}
	},
	methods:{
		...mapActions(['addTodo', 'deleteTodo', 'changeStatusTodo']),
		addTodoItem(){
			this.addTodo({
				userId: this.$store.state.user.uid,
				todo: {title: this.newTodo, date: new Date(), complete: false}
			})
			this.newTodo = ''
		},
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
	},
	computed: {
		...mapGetters(['todos'])
	}
}