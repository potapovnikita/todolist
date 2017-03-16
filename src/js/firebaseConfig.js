const firebaseConfig = {
	apiKey: process.env.FB_API_KEY || 'AIzaSyDtZbDczy02jMBs4GUN_kgZdC_FfADz-XY',
    authDomain: "todo-app-8f3e4.firebaseapp.com",
    databaseURL: "https://todo-app-8f3e4.firebaseio.com",
    storageBucket: "todo-app-8f3e4.appspot.com",
    messagingSenderId: process.env.FB_API_SENDER || '592037573175'
}

export default firebaseConfig