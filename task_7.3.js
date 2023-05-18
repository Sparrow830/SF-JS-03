// Напишите функцию countChars(str), которая принимает строку и возвращает количество букв в этой строке.
// 
// Например: countChars('Арарат') должен вернуть: { а: 3, р: 2, т: 1 }.


function countChars(str) {
  const chars = {};
// Инициализируем пустой объект.
  str.toLowerCase().split('').forEach(x => {
// В параметре (str) приводим все буквы к нижнему регистру через метод .toLowerCase().
// Далее, с помощью метода .split() с пустым параметром ('') разбиваем строку на массив букв [а, р, а, р, а, т].
// И пробегаем по массиву методом .forEach().
    if (chars[x] === undefined) {
      chars[x] = 0;
    }
// Мы начинаем наполнять объект "chars", через вычисляемое свойство переменной "x" (chars[x]),
// но если элемент массива добавляется в объект первый раз, то добавляется только ключ,
// а значения у этого ключа ещё нет, то есть оно "undefined". Поэтому через цикл "if" прописываем,
// что если значение ключа равно "undefined", то теперь оно будет равно 0, иначе мы не сможем складывать значения.
    ++chars[x];
// Унарный оператор "++" (инкремент) здесь используется в качестве префикса,
// поэтому добавляет 1 к своему операнду и возвращает новое значение.
// Практически то же самое, что и "chars[x] = chars[x] + 1".
// (Если этот же оператор использовать в качестве окончания (chars[x]++), то он сперва вернёт старое значение, а потом добавит 1.)
  })
  return chars;
}

console.log(countChars('Арарат'));


// const countChars = str => {
//   const chars = {};
//   str.split('').forEach(char => {
//     const lowerChar = char.toLowerCase();
//     if (chars[lowerChar] === undefined) {
//       chars[lowerChar] = 0;
//     }
//     ++chars[lowerChar];
//   })
//   return chars;
// }
// 
// console.log( countChars('Арарат') )