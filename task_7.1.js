// Напишите функцию getInfo(persons), которая принимает массив объектов, описывающих человека, имеющих поля {name, age},
// и возвращает объект со средним возрастом и именем самого старшего человека.


function getInfo(persons) {
  const ages = persons.map(person => person.age);
  const averageAge = ages.reduce((a, b) => a + b, 0) / ages.length;
  const maxAge = Math.max(...ages);
// Объект Math хранит в себе различные математические константы (например, число π) и функции типа вычисления квадратного корня.
// Можно считать сборником полезных функций и значений.
// 
// Метод .max() объекта Math находит и возвращает наибольшее из переданных чисел.
// 
// Спред-синтаксис (spread) "..." позволяет передавать итерируемые коллекции (например, массивы или строки) как список аргументов функции
// или добавлять содержащиеся в них элементы в новый массив.
// Спред применятся и для объектов, чтобы копировать пары ключ-значение из одного объекта в другой.
// То есть в данном случае "Math.max(...ages)" означает, что мы передаём как аргумент не сам массив "ages", а все его элементы.
  const oldestPerson = persons.find(person => person.age === maxAge);
// Метод .find() при помощи функции-колбэка перебирает массив, подставляя каждое его значение в "person" и возвращая true/false.
// Возвращается первое значение, которые удовлетворяют условию (true).
  return {
    averageAge,
    oldestPerson: oldestPerson.name
  }
}

console.log(getInfo([
  {
    name: "Katya",
    age: 10
  },
  {
    name: "Vitya",
    age: 20
  },
  {
    name: "Kolya",
    age: 30
  }
]));


// const getInfo = persons => {
//   const ages = persons.map(person => person.age);
//   const averageAge = ages.reduce((a, b) => a + b, 0) / ages.length;
//   const maxAge = Math.max(...ages);
//   const oldestPerson = persons.find(person => person.age === maxAge);
//   return {
//     averageAge,
//     oldestPerson: oldestPerson.name,
//   }
// }
// 
// console.log( getInfo([
//   {
//     name: 'Kaya',
//     age: 10,
//   },
//   {
//     name: 'Vitya',
//     age: 20,
//   },
//   {
//     name: 'Kolya',
//     age: 30,
//   }
// ]) )