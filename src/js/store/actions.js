import firebase from 'firebase'
import * as actions from './const-mutations.js'

export function getUser({commit}) {
	firebase.auth().onAuthStateChanged(user => {
		commit(actions.SET_USER, user || {})
	})
}

export function signOut({commit}) {
	firebase.auth().signOut().then(() => {
		commit(actions.SET_USER, {})
		window.location.href = '/'
	})
}

export function addTodo({commit}, payload) {
	
	console.log({commit})
	console.log(payload)


	const newKey = firebase.database().ref(`/users/${payload.userId}/`).child('todos').push().key
	payload.todo.id = newKey
	console.log(newKey)
	firebase.database().ref(`/users/${payload.userId}/`).update({[`/todos/${newKey}`]: payload.todo})
}


// export function getTodos({commit}, userId) {
// 	firebase.database().ref('/users/${userId}/todos').on('value', snap => {
// 		commit(actions.SET_TODOS, snap.val() || [])
// 	})
// }