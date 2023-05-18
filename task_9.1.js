// Напишите функцию countEverySecond(n), которая каждую секунду печатает в консоль цифру, начиная с 1 и заканчивая {n}.


function countEverySecond(n) {
  let count = 0;
  const interval = setInterval(() => {
// Функция setInterval() принимает функцию-колбэк либо некий код, заключённый в скобки (),
// интервал повтора выполнения данного кода (в данном случае - 1000) и необязательные аргументы, которые передаются в колбэк (здесь их нет).
    console.log(++count);
// Унарный оператор "++" (инкремент) здесь используется в качестве префикса,
// поэтому добавляет 1 к своему операнду и возвращает новое значение.
// Практически то же самое, что и "console.log(count = count + 1)".
// (Если этот же оператор использовать в качестве окончания (count++), то он сперва вернёт старое значение, а потом добавит 1.)
    if (count === n) {
      clearInterval(interval);
// Здесь запускается функция clearInterval(), которая останавливает выполнение setInterval.
    }
  }, 1000);
};

countEverySecond(5);


// const countEverySecond = n => {
//   let count = 0;
//   const interval = setInterval(() => {
//     console.log(++count);
//     if (count === n) {
//       clearInterval(interval);
//     }
//   }, 1000);
// };
// 
// countEverySecond(5);