import Vue from 'vue'
import template from './index.pug'
import TodoSection from './../TodoSection/'

export default {
	components: { TodoSection },
	template,
	props: ['selectAllTodos', 'deleteAllCompleteTodos', 'deleteTodoItem', 'changeStatusTodoItem', 'editTodoItem', 'editedTodo', 'openEditTodo', 'todos', 'completedTodos', 'uncompletedTodos', 'preloader'],
	data(){
		return {
			completed: '1',
			uncompleted: '0'

		}
	}
}
