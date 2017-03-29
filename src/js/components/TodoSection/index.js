import Vue from 'vue'

import template from './index.pug'

export default {
	template,
	props: ['deleteTodoItem', 'changeStatusTodoItem', 'editTodoItem', 'editedTodo', 'openEditTodo', 'todos', 'completedTodos', 'uncompletedTodos', 'attr', 'preloader']
}