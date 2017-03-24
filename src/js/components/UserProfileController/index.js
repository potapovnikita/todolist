//компонент-надстройка

import Vue from 'vue'
import {mapActions, mapGetters, mapState} from 'vuex'
import UserPanel from './UserPanel/' 
import template from './index.pug'

Vue.component('UserPanel', UserPanel)

export default {
	template,
	methods:{
		...mapActions(['signOut'])
	},
	computed: mapState({
		user: state => state.user
	})
}