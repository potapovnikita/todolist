import template from './index.pug'
import Vue from 'vue'
import {mapActions, mapGetters} from 'vuex'
import AddTodoController from './AddTodoController/'
import ListTodoController from './ListTodoController/'


Vue.component('AddTodoController', AddTodoController)
Vue.component('ListTodoController', ListTodoController)

export default {
	template,
	data() {
		return {
			editedTodoTitle: ''
		}
	},
	methods:{
		...mapActions(['getUser', 'getTodos'])
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