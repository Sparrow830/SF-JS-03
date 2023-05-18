// Напишите функцию, которая принимает HTML в виде строки и возвращает HTML без элементов div (и всего, что внутри),
// все остальные элементы сохраняются. Используйте createElement, querySelectorAll и innerHTML.
// 
// Исходный код:
// 
// const removeDivs = html => {
//   return html;
// }
// 
// const html = '<div></div>Hello<div><div><p>Hello world</p></div></div> <b>World!</b>';
// 
// alert( removeDivs(html));
// alert( removeDivs(html) === 'Hello <b>World!</b>'); // Должно быть true


const removeDivs = html => {
// Создаём функцию "removeDivs" с параметром "html".
  const root = document.createElement('span');
// Создаём переменную "root", которая примет в себя результат выполнения последующего действия.
// Объект "document" включает в себя содержимое веб-страницы (всё DOM-дерево), а также обеспечивает функциональность,
// которая является глобальной для документа (например, создание новых элементов).
// Из него можно получить доступ к любому узлу (HTML-элементу).
// Метод .createElement() определён для объекта "document". Принимает строку с названием тега (то есть название тега должно быть в кавычках).
// Создаёт и возвращает новый элемент с заданным тегом. В данном случае это элемент <span>.
// Таким образом, переменная "root" становится элементом <span>, который создан, но не вставлен в HTML-документ.
  root.innerHTML = html;
// Свойство .innerHTML позволяет считать содержимое элемента в виде HTML-строки или установить новый HTML.
// В данном случае мы вставляем внутрь только что созданного элемента <span> значение переменной "html".
  const divs = root.querySelectorAll('div');
// Создаём переменную "divs", которая примет в себя результат выполнения последующего действия.
// Метод .querySelectorAll() определён для объекта "document" и любого HTML-элемента.
// Принимает строку с названием селектора (то есть название селектора должно быть в кавычках).
// В качестве селектора может выступать тег, класс и id. Находит все дочерние элементы, соответствующие селектору и возвращает их массив.
// В данном случае это все элементы <div> внутри элемента(-ов) <span>. Таким образом, переменная "divs" будет массивом найденных элементов <div>.
// Можно также искать элементы, вложенные в другие элементы - например, <p>, вложенные в <div>: root.querySelectorAll('div>p')
  divs.forEach(x => {
// Методом forEach() перебираем массив "divs", подставляя в переменную "x" каждый элемент массива - то есть каждый <div>.
    x.parentNode.removeChild(x);
// Свойство .parentNode возвращает любого "родителя" - в данном случае родительский узел элемента <div>, присвоенного переменной "x".
// Метод .removeChild() принимает элемент, который должен быть удалён из данного "родителя".
// В нашем случае удаляется элемент <div>, заключённый в переменной "x", а "родитель" определяется через "x.parentNode" (описано выше).
  })
  return root.innerHTML;
// Возвращаем новое содержимое элемента <span>, заключённого в переменной "root", в виде строки ('Hello <b>World!</b>').
}

const html = '<div></div>Hello<div><div><p>Hello world</p></div></div> <b>World!</b>';

alert(removeDivs(html));
alert(removeDivs(html) === 'Hello <b>World!</b>'); // Должно быть true


// const removeDivs = html => {
//   const root = document.createElement('span');
//   root.innerHTML = html;
//   const divs = root.querySelectorAll('div');
//   divs.forEach(div => {
//     div.parentNode.removeChild(div);
//   })
//   return root.innerHTML;
// }
// 
// const html = '<div></div>Hello<div><div><p>Hello world</p></div></div> <b>World!</b>';
// 
// alert( removeDivs(html));
// alert( removeDivs(html) === 'Hello <b>World!</b>'); // Должно быть true