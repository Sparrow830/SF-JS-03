// Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.
// 
// Пояснение: например, getPercents(30, 200) должно вернуть 60.


function getPercents(percent, number) {
  return number / 100 * percent;
}

console.log(getPercents(30, 200));


// function getPercents(percent, number) {
//   return number / 100 * percent;
// }
// 
// alert( getPercents(30, 200) );