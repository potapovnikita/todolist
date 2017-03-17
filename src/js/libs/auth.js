import firebase from 'firebase'

export default class Auth {
	constructor() {
		this.db = firebase;
	}

	setUser(user = {}) {
		this.user = {
			photo: user.photoURL,
			email: user.email,
			name: user.displayName,
			id: user.uid,
			token: user.refreshToken,
		}
	}

	getUser() {
		return new Promise((resolve, reject) => {
			this.db.auth().onAuthStateChanged(user => {
				if (!user) {
					reject({ status: 403, message: 'Forbidden' })
				} else {
					this.setUser(user)
					resolve(this.user)
				}
			})
		})
	}

	createUser(authData = {}) {
		return new Promise((resolve, reject) => {
			this.db.auth().createUserWithEmailAndPassword(authData.email, authData.password)
				.then(user => {
					this.setUser(user)
					resolve(this.user)
				})
				.catch(error => {
					reject(error)
				})
		})
	}

	signIn(authData = {}) {
		return new Promise((resolve, reject) => {
			this.db.auth().signInWithEmailAndPassword(authData.email, authData.password)
				.then(user => {
					this.setUser(user)
					resolve(this.user)
				})
				.catch(error => {
					reject(error)
				})

		})
	}

	signOut() {
		return new Promise((resolve, reject) => {
			this.db.auth().signOut()
				.then(() => {
					this.setUser()
					resolve(this.user)
				})
				.catch(error => {
					reject(error)
				})
		})
	}
}