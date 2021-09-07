 // Строки
 // const name = 'Maxim'
 // const age = '41'
 // function getAge(){
 // return age
 // }
 //
 // // const output = 'Привет, меня зовут ' + name + ' и мой восзраст ' + age
 // const output = `Привет, меня зовут ${name} и мой восзраст ${getAge()} год` //Динамический подход без конкатинации
 // console.log(output);

// Встроенные методы для строк
//  const name = 'Maxim'
//  console.log(name);
//  console.log('name.length',name.length)
//  console.log('name.toUpperCase()',name.toUpperCase())
//  console.log('name.toLowerCase()',name.toLowerCase())
//  console.log('name.charAt(0)',name.charAt(0)) // На какой позиции (индекс букв)
//  console.log('indexOf(\'ax\')',name.indexOf('ax')) // Показывает с какойго индекса начинается укзанный слог. -1 означет отсутсвие
//  console.log('name.startsWith', name.startsWith('Max'));
//  console.log('name.endsWith', name.endsWith('im'));
//  console.log('name.repeat',name.repeat(5));
//  const string = '   Password   '
//  console.log('string.trim()', string.trim()); // Удаляет пробелы
//  console.log('string.trimLeft()', string.trimLeft()); // Удаляет пробелы слева
//  console.log('string.trimRight()', string.trimRight()); // Удаляет пробелы справа

 function logPerson(s, name, age){
 if (age <0){age = 'Еще не родился'}
  console.log(s, name,age); // сюда попал вес шаблон `Имя: ${name} возрас:${age} !` и поделен на массивы в порядке очереди
  return `${s[0]}${name}${s[1]}${age}${s[2]}`
 }

 const name = 'Maxim'
 const age = '41'
 const name2 = 'Petr'
 const age2 = '-1'

 const output = logPerson`Имя: ${name} возрас:${age} !`
 const output2 = logPerson`Имя: ${name2} возрас:${age2} !`
 // console.log(output);