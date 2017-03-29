import template from './index.pug'

export default {
	props:['newTodo', 'addTodoItem'],
	template,
	methods: {
		updateValue: function (newTodo) {
			this.$emit('input', newTodo)
		}
	}
} 