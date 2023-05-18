// Напишите функцию createAdder(a), которая возвращает функцию addA, которая принимает b и возвращает a + b.
// 
// Исходный код:
// 
// Функции должны принимать аргументы.
// 
// function createAdder() {
//   return function addA() {
//     return 5;
//   }
// }
// 
// const add5 = createAdder(5);
// alert( add5(5) ) // Должно получиться 10
// alert( add5(12) ) // Должно получиться 17


function createAdder(a) {
  return function addA(b) {
    return a + b;
  }
}

console.log(createAdder(5)(5));
console.log(createAdder(5)(12));


// Функции должны принимать аргументы.
// 
// function createAdder(a) {
//   return function addA(b) {
//     return a + b;
//   }
// }
// 
// const add5 = createAdder(5);
// alert( add5(5) ) // Должно получиться 10
// alert( add5(12) ) // Должно получиться 17