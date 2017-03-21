import firebaseConfig from './firebaseConfig'
import firebase from 'firebase'
import AuthProvider from './libs/auth.js'

/*Init firebase*/
firebase.initializeApp(firebaseConfig)


const Auth = new AuthProvider();


/** Boot up */
Auth.getUser().then(user => {
    System.import('./apps/main/index.js')
        .then(App => App.default(user));
}, error => {
    System.import('./apps/login/index.js')
        .then(App => App.default(error));
});




//Здесь 2 приложения. Если удалось получить пользователя, то грузим приложение со списком дел, если нет, то грузим страницу регистрации/входа