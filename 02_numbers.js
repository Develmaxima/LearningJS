// 1 Числа
// const number = 41 // integer
// const float = 41.23 // float
// const pow = 10e3 // 10 возводим в третью степень
// // рекомендуется пользоваться в консоли для изучения операций.
// console.log(pow)
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('2/0', 2 / 0)
//
// console.log('NaN', Number.NaN) // Not a number
// console.log('typeof NaN',typeof NaN)
// const weird = 2/undefined // NaN мы не можем использовать, но можем проверить его на true
// console.log(isNaN(weird))
//
// //Проверяем число на бесконечность
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))
//
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2);
// console.log(Number(stringInt))
// console.log(+stringInt)
//
// // Float
// console.log(Number.parseFloat(stringFloat))
// console.log(+stringFloat)
//
// console.log(0.2 +0.4) // Выводит сумбур
//
// console.log(0.2 +0.4)
// console.log(parseFloat((0.2 +0.4).toFixed(1)))

// 2 BigInt (> MAX_SAFE_INTEGER)
// Работает только с числами больше MAX_SAFE_INTEGER
// Только с целыми числами
// Все, где встречаются n -это есть BigInt
// console.log(10n -  4) //Error
// console.log(parseInt(10n) - 4); // 6
// console.log(10n - BigInt(4)); // 6n

// 3 Math (объект)
// console.log('Math.E',Math.E)  // Экспонента
// console.log('Math.PI',Math.PI) // число ПИ
// console.log('Math.sqrt(25)', Math.sqrt(25)) // корень из 25
// console.log('Math.pow(5, 3)', Math.pow(5, 3)) // возвести в степень
// console.log('Math.abs(-42)', Math.abs(-42)) // Модуль числа
// console.log('Math.max', Math.max(-42, 3, 80,0)) // определяет максимальное число из перечисленных
//
// console.log('Math.min', Math.min(-42, 3, 80,0)) // определяет минимальное число из перечисленных
// console.log('Math.floor', Math.floor(4.7)) // Округляет в меньшую сторону
// console.log('Math.ceil',Math.ceil(4.7)) // Округляет в большую сторону
// console.log('Math.random()',Math.random()) // Рандомное число

// Example | Делаем из рандома целое число
function getRandomBetween(min, max){
    return Math.floor( Math.random() * (max - min +1) + min); // сокращая в меньшую сторону ы теряем 1 единцу, пожтому плюсуем ее (max - min +1)
}

console.log(getRandomBetween(10, 42));

