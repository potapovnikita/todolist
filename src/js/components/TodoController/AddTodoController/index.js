import template from './index.pug'
import Vue from 'vue'
import {mapActions, mapGetters} from 'vuex'
import AddTodo from './AddTodo/'


Vue.component('AddTodo', AddTodo)

export default {
	template,
	data() {
		return {
			newTodo: '',
		}
	},

	methods:{
		...mapActions(['addTodo']),
		addTodoItem(){
			this.addTodo({
				userId: this.$store.state.user.uid,
				todo: {title: this.newTodo, date: new Date(), complete: false}
			})
			this.newTodo = ''
		}
	}
}