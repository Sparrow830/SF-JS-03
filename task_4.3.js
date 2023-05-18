// Напишите функцию repeatWord(word, count), которая принимает слово и количество раз для его повторения.
// Например, если вызвать repeatWord('слово', 3) функция напечатает "слово1, слово2, слово3" на одной строке.


function repeatWord(word, count) {
  let words = "";
  for (let i = 1; i < count; ++i) {
      words += word + i + ", ";
  }
  i = count;
  words += word + i;
  console.log(words);
}

repeatWord("слово", 3)


// function repeatWord(word, count) {
//   let words = '';
//   for (let i = 1; i <= count; ++i) {
//     words += word + i + ', ';
//   }
//   alert(words);
// }
// 
// repeatWord('слово', 3)