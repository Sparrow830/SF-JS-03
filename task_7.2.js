// Напишите функцию, которая принимает массив массивов вида [['ключ1', 'значение1'], ['ключ2', 'значение2']]
// и возвращает объект вида: {ключ1: 'значение1', ключ2: 'значение2'}.


function arrIntoObj(arr) {
  const obj = {};
// Инициализируем пустой объект.
  arr.forEach(x => {obj[x[0]] = x[1]});
// Метод .forEach(), как и метод .map(), перебирает каждый элемент массива с помощью функции-колбэка,
// но, в отличие от последней, не возвращает новый массив.
// По сути метод .forEach() является альтернативой циклу for.
// 
// В данном случае мы поочерёдно подставляем в переменную "x" элементы массива, которые, в свою очередь, сами являются массивами.
// Например, подставив в "x" массив ["ключ1", "значение1"], а затем обратившись к нему через выражение "x[0]",
// мы получаем элемент массива с индексом 0, то есть "ключ1". Аналогично, "x[1]" - получаем "значение1".
// Далее нам нужно наполнить пустой объект ключами и значениями этих ключей. 
// Через скобочную нотацию можно обратиться к свойству, имя (ключ) которой хранится в переменной - например, "obj[переменная]".
// Это называется вычисляемым свойством. В данном случае нам в качестве ключа надо вставить "ключ1", поэтому пишем "obj[x[0]]".
// В качестве значения ключа нам надо вставить "значение1", поэтому пишем "obj[x[0]] = x[1]".
// Получаем obj{"ключ1": "значение1"}. А прогнав все массивы через метод .forEach(), получим объект с несколькими ключами и их значениями.
  return obj;
}

console.log(arrIntoObj([
  ["ключ1", "значение1"],
  ["ключ2", "значение2"]
]));


// const fromEntries = entries => {
//   const obj = {};
//   entries.forEach(entry => {
//     obj[entry[0]] = entry[1];
//   })
//   return obj;
// }
// 
// console.log( fromEntries([
//   ['key2', 3],
//   ['key1', 'hello'],
// ]) )