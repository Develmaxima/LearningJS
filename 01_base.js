// Переменные
// var name ='Maxim'        // Можно менять значение

//const firstName ='Maxim'
//const lastName ='Konovalov' // Нельзя переопредлить, только читать
//let age = 40                // Можно менять значение, не используем var, только let
//const isProgrammer = true   //boolean

// error
//const if = 'kfkf' зарезервировонные слова
//const 7аа = 'апапа'  нельзя с цифр названия
// const firstName ='Maxim'
// const age = 40

// 2 Мутирование
// console.log('Name human:' + firstName + ', а возраст:' + age)
// console.log(age.toString()) // Переврод числа в строку
// const lastName = prompt('Введите фамилию') // аллерт с input
// alert(firstName + ' '  + lastName)

// Операторы
let c = 32;
// c = c + a; тоже самое c += a;
//
// let currentYear = 1980;

// console.log(currentYear++); // Adding 1 (increment) on next let currentYear
// console.log(++currentYear); // Adding 1 now
// console.log(--currentYear); // Subtract
// для строк плюс является опреатором канкатинации

// 2 Типы данных -- Определяет тип - команда: typeof
// const isProgrammer = true
// const firstName ='Maxim'
// let x ;
// let age = 40
//
// console.log(typeof isProgrammer);
// console.log(typeof firstName);
// console.log(typeof x);
// console.log(typeof age);

// 3 Прироитет опервторов
// const fullName = 41;
// const birthYear = 1980;
// const currentYear = 2021;
//
// const isFullAge = currentYear - birthYear >= fullName;
// console.log(isFullAge);

// 4 Условные операторы
// const courseStatus = ''; // Reade fail pending
//
// if (courseStatus === 'ready'){
//     console.log('Курс ужеготов');
// } else if (courseStatus === 'pending'){
//     console.log('Курс в процессе разработки');
// } else{
//     console.log('курс не найден')
// }
//
// const isReady = true;
// if( isReady === true){
//     console.log("It is OK!");
// }
//
// // Короткая запись
// if( isReady){
//     console.log("It is OK!");
// }else {
//     console.log("It is NOT OK!");
// }
// 5 Тернарное выражение условий
// isReady ? console.log("It is OK!") : console.log("It is NOT OK!");

// 6 Булевая логика
// &&
// ||

// 7 Function
function calculateAge(year){
    return 2021 - year;
}

// console.log(calculateAge(1980));
// console.log(calculateAge(1987));
// console.log(calculateAge(1964));
// function logInfoAbout (name, year){
//     const age =calculateAge(year);
//     if(age > 0){
//         console.log(' Человек по имени ' + name + ' сейчас имет возраст ' + age);
//     }else{
//         console.log('Вообще-то это уже будещее:)')
//     }
// }
//
// logInfoAbout('Maxim', 1980);
// logInfoAbout('Maxim', 2022);
// Тоже самое можно ввести в консоли браузера

// 9 Массивы
// const cars = new Array('Mazda', 'Ford', 'Reno'); // усложненно и правильнее использовать вариант ниже
// const cars =['Mazda', 'Ford', 'Reno']
// cars[3]= 'BMW'; // Or cars.length = 'BMW' (Всегда складывает в последний элемент;
// console.log(cars.length) // Длина массива
// // console.log(cars[0]); // Mazda
// console.log(cars);

// 10 Циклы
const cars =['Mazda', 'Ford', 'Reno']

// for (let i = 0; i < cars.length; i++) { // перебор индекса
//    let car = cars[i]; // динамическая переменная индекса
//     console.log(car);
// }
// i < cars.length // Выполнять пока индекс меньше дли массиа

// //НОВАЯ версия цикла: for of
// for (let car of cars){
//     console.log(car);
// }

// 11 Обьекты
const person ={
    firstNAme: "Maksim",
    lastName: 'Maxim',
    year: 1980,
    language: ['Rus', 'En'],
    hasWife: false,
    greet: function (){
        console.log('greet from person')
    }
}
person.newKey = 'Новое значение';
person.greet(); // Вызов функции
console.log(person)
console.log(person.hasWife)
