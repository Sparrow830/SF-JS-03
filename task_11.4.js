// Выведите на экран надпись «Ширина экрана {width} пикселей» и обновляйте её при изменении ширины экрана.


// Разметку HTML создали в отдельном HTML-файле (task_11.4.html), подгрузили туда данный JS-файл. Также подгрузили туда CSS (task_11.4.css).
const button = document.querySelector('button');
// Создаём переменную "button", которая примет в себя результат выполнения последующего действия.
// Метод .querySelector() определён для объекта "document" и любого HTML-элемента.
// Принимает строку с названием селектора (то есть название селектора должно быть в кавычках).
// В качестве селектора может выступать тег, класс и id. Находит первый дочерний элемент, соответствующий селектору и возвращает его.
// В данном случае это первый найденный внутри всего документа элемент <button>.
// Можно также искать элементы, вложенные в другие элементы - например, <button>, вложенные в <div>: document.querySelector('div>button')
const updateWidthLabel = () => button.innerHTML = `Ширина экрана ${window.innerWidth} пикселей`;
// Свойство .innerHTML позволяет считать содержимое элемента в виде HTML-строки или установить новый HTML.
// В данном случае мы вставляем внутрь только что найденного элемента <button> шаблонную строку.
// Свойство .innerWidth объекта "window" возвращает ширину окна просмотра браузера в пикселях.
// В отличие от .clientWidth возвращает ширину, включая полосы прокрутки (если они есть).
updateWidthLabel();
// Запускаем функцию, чтобы сразу отобразить количество пикселей при открытии страницы.
window.addEventListener('resize', updateWidthLabel);
// Метод .addEventListener() добавляет элементу действие, которое будет выполнено после срабатывания события.
// Например, на клик мышки или нажатие клавиши.
// Принимает строку, содержащую название события (в данном случае - 'resize', то есть изменение размера окна),
// функцию, которая будет вызвана, когда событие произойдёт, а также необязательный параметр "options" или "capture",
// который описывает дополнительные свойства для срабатывания события (здесь его нет).


// HTML:
// 
// <div class="field">
//   <button type="button">
//     Ширина экрана x пикселей
//   </button>
// </div>
// 
// 
// CSS:
// 
// body {
//   width: 100vw;
//   height: 100vh;
//   padding: 0;
//   margin: 0;
// }

// .field {
//   box-sizing: border-box;
//   margin: 10px;
//   border: 1px solid blue;
//   height: calc(100% - 20px);
// }

// button {
//   white-space: nowrap;
//   padding: 10px 20px;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   transition: all 0.2s ease;
// }
// 
// 
// JS:
// 
// const button = document.querySelector('button');
// 
// const updateWidthLabel = () => {
//   const currentWidth = window.innerWidth;
//   button.innerHTML = `Ширина экрана ${currentWidth} пикселей`;
// }
// 
// updateWidthLabel();
// window.addEventListener('resize', updateWidthLabel);