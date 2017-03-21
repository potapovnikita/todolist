import template from './index.pug'
import {mapActions, mapGetters} from 'vuex'

export default {
	template,
	props: ['email', 'photoURL'],
	methods:{
		...mapActions(['signOut'])
	},
	beforeMount() {
		console.log(this)
	}
}