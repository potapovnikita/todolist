import Vue from 'vue'
import Vuex from 'vuex'
import template from './index.pug'
import AuthProvider from './../../libs/auth.js'
import store from './../../store/index.js'
import {mapActions, mapGetters} from 'vuex'
import UserProfileController from './UserProfileController/' 
import TodoController from './TodoController/' 

export default () => {

	Vue.use(Vuex)
	Vue.component('UserProfileController', UserProfileController)
	Vue.component('TodoController', TodoController)

	const app = new Vue({
		el: '#app',
		template,
		store
	})
}