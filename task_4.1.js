// Напишите функцию countDown(n), которая получает число {n} в качестве аргумента и печатает в консоль обратный отсчет, начиная с этого числа.
// Например, countDown(3) напечатает: 3 2 1.


function countDown(n) {
  for (let i = n; i >= 1; --i) { // "i -= i" не работает (вместо "3 2 1" возвращается просто 3)
    console.log(i);
  }
}

countDown(3);


// function countDown(n) {
// 	for (let i = n; i >= 1; --i) {
//   	console.log(i);
//   } 
// }
// 
// countDown(3);