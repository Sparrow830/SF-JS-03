// Напишите функцию match, которая принимает 2 строки и возвращает true, если эти строки равны без учета регистра.
// Например, match('hEllO', 'HELLo') должен вернуть true.


const match = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();
// Метод .toLowerCase не принимает аргументов - он просто преобразует все прописные буквы в строчные (не воздействует на не алфавитные символы).
// Для преобразования строчных букв в прописные можно использовать метод .toUpperCase().

console.log(match('HELLO', 'Hello'));


// const match = (str1, str2) => {
//   return str1.toLowerCase() == str2.toLowerCase();
// }
// 
// alert( match('hEllO', 'hellO') )