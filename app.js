// Переменные
// var name ='Maxim'        // Можно менять значение

//const firstName ='Maxim'
//const lastName ='Konovalov' // Нельзя переопредлить, только читать
//let age = 40                // Можно менять значение, не используем var, только let
//const isProgrammer = true   //boolean

// error
//const if = 'kfkf' зарезервировонные слова
//const 7аа = 'апапа'  нельзя с цифр названия
const firstName ='Maxim'
const age = 40
// 2 Мутирование


console.log('Name human:' + firstName + ', а возраст:' + age)
console.log(age.toString()) // Переврод числа в строку
const lastName = prompt('Введите фамилию') // аллерт с input
alert(firstName + ' '  + lastName)