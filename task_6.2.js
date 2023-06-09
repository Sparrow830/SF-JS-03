// На сайте Reddit ссылки на разделы (сабреддиты) формируются следующим образом: https://reddit.com/r/название_раздела/.
// Напишите функцию, которая принимает ссылку на раздел и возвращает название раздела.


function getSubredditName(link) {
  link = link.toLowerCase();
// Метод .toLowerCase не принимает аргументов - он просто преобразует все прописные буквы в строчные (не воздействует на не алфавитные символы).
// Для преобразования строчных букв в прописные можно использовать метод .toUpperCase().
  const linkR = link.indexOf("reddit.com/r/");
  const linkT = link.indexOf("reddit.com/t/");
// Метод .indexOf() служит для поиска в массивах и строках. Принимает 1 или 2 аргумента.
// В качестве первого аргумента нужно передать, что искать (в данном случае "reddit.com/r/" или "reddit.com/t/").
// Ищет по элементу, букве или фрагменту строки. Если находит, возвращает индекс найденного элемента (позицию в строке).
// Если не находит, возвращает "-1". Если совпадений много, возвращает индекс только первого найденного элемента,
// поэтому в качестве второго аргумента можно передать позицию, с которой надо начинать искать.
// С помощью функций и инкремента второго аргумента можно найти все совпадения.
// Если требуется поиск с конца, можно использовать метод .lastIndexOf().
  if (linkR !== -1 || linkT !== -1) {
    const indexStart = linkR + linkT + 14;
    const indexEnd = link.indexOf("/", indexStart);
    if (indexEnd !== -1) {
      return link.slice(indexStart, indexEnd);
// Метод .slice() принимает 2 аргумента - начальный индекс и конечный индекс массива или строки.
// Возвращает массив или фрагмент строки, ограниченный этими индексами, но не включая конечный индекс.
// Если задать отрицательный индекс, отсчёт будет идти с конца массива или строки.
    } else {
      return link.slice(indexStart);
    }
  } else {
    console.log("В этой ссылке нет сабреддита или вы ввели неверные данные.");
  }
}

console.log("Название сабреддита: " + getSubredditName("https://reddit.com/r/название_раздела/"));


// const getSubredditName = (link) => {
//   const rIndex = link.indexOf('/r/');
//   const nameStartIndex = rIndex + 3;
//   return link.slice(nameStartIndex, -1);
// }
// 
// alert( getSubredditName('https://reddit.com/r/dankmemes/') )