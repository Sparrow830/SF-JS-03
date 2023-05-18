// Напишите функцию reverseAndNegate(arr), которая принимает массив чисел и возвращает перевернутый отрицательный массив.
// 
// Например: [1, -2, 5, 4] ⇒ [-4, -5, 2, -1].


function reverseAndNegate(arr) {
  return arr.reverse().map(x => -x);
// Метод .reverse() не принимает аргументов - он просто разфорачивает массив (в данном случае "arr") задом наперёд.
// Метод .reverse() не создаёт новый массив, а только изменяет текущий.
// Метод .map() трансформирует один массив (в данном случае "arr" с аргументом [1, -2, 5, 4]) в другой при помощи функции-колбэка.
// В данном случае используется анонимная стрелочная функция с параметром "x".
// Метод .map() перебирает массив, подставляя каждое его значение в "x" и возвращая результат выполнения функции.
// В данном случае каждое число в массиве инвертируется с помощью унарного "-".
}

console.log(reverseAndNegate([1, -2, 5, 4]));


// const reverseAndNegate = (arr) => {
//   return arr.reverse().map(value => -value);
// }
// 
// alert( reverseAndNegate([1, -2, 5, 4]) );