import firebaseConfig from './firebaseConfig'

var a = 4;

var r = 4;

document.getElementById('app').classList.add('border')

console.log(firebaseConfig)


//Здесь 2 приложения. Если удалось получить пользователя, то грузим приложение со списком дел, если нет, то грузим страницу регистрации/входа