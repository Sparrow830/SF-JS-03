// Напишите программу, которая говорит пользователю "Введите 10", пока он не введёт 10.
// Затем говорит "Введите 20", потом 40 и т.д.
// Если пользователь вводит другое число, нужно спросить его ещё раз, пока он не введёт нужное.
// Когда пользователь введёт больше 100, напишите "Спасибо!" и остановите программу.


let neededNumber = 10;
let currentNumber;

do {
  while(currentNumber != neededNumber) { // СТРОГОЕ НЕРАВЕНСТВО (!==) НЕ РАБОТАЕТ - БЕЗ КОНЦА ПРОСИТ ВВЕСТИ 10!
    currentNumber = prompt(`Введите число ${neededNumber}`);
  }
  neededNumber *= 2;
} while (currentNumber < 100);
alert("Спасибо!");


// let neededNumber = 10;
// let currentNumber;

// do {
//   while(currentNumber != neededNumber) {
//     currentNumber = prompt('Введите число ' + neededNumber);
//   }
//   neededNumber *= 2;
// } while (currentNumber < 100);
// alert('Спасибо!')