import Vue from 'vue'
import {mapGetters} from 'vuex'

import template from './index.pug'

export default {
	template,
	props: ['selectAllTodos', 'deleteAllCompleteTodos', 'deleteTodoItem', 'changeStatusTodoItem', 'editTodoItem', 'editedTodo', 'openEditTodo', 'todos']
}