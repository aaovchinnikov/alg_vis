let addButton = document.getElementById("add_a_container"); //Кнопка для появления меню с графическими примитивами
let finishButton = document.getElementById("qbutton"); //кнопка для исчезновения менб с графическими примитивами
let graphEditor = document.getElementById("graph-primitives"); // Меню графических примитивов
let allPictures = graphEditor.querySelectorAll('img');
let dropLoc = document.getElementById("outer-dropzone"); // Канва, на которую осуществляется перетаскивание

// Добавление к каждой картинке обработчика события начала перетаскивания
for(let i = 0; i < allPictures.length; i++) {
    let curImage = allPictures[i];
    curImage.addEventListener('dragstart', transferId);
}

function transferId(event) {
    /*Функция-обработчик события начала перетаскивания картинки
    * Функция принимает на вход событие (event)
    * Функция записывает перетаскиваемый элемент в событие
    * Автор: Елена Карелина
    */
    event.dataTransfer.setData('key', event.target.id);
}

addButton.onclick = function(event) {
    /* Функция-обработчик нажатия на кнопку добавления контейнера
    * Делает видимым меню с графическими примитивами
    * Принимает на вход событие, ничего не возвращает
    * Автор: Елена Карелина
     */
    event.preventDefault(); // Отключение дефолтного обработчика
    graphEditor.classList.add("primitives-active"); // Добавление к списку классов класса, в котором прописана полная видимость меню
}

finishButton.onclick = function(event) {
    event.preventDefault(); // Отключение дефолтного обработчика
    graphEditor.classList.remove("primitives-active"); // Удаление из списка классов класса, в котором прописана полная видимость меню
}

dropLoc.ondragover = function(event) {
    /*Функция-обработчик события попадания картинки на канву
    * Функция принимает на вход событие (event)
    * Функция отключает дефолтный drag&drop
    * Автор: Карелина Елена
    */
    event.preventDefault();
}

dropLoc.ondrop = function(event) {
    /*Функция-обработчик события бросания картинки на канву
    * Функция принимает на вход событие (event)
    * Функция рисует картинку, идентичную перетаскиваемой, на канве
    * и устанавливает ее размеры и координаты
    * Автор: Карелина Елена
    */
    event.preventDefault();
    var dropItem = event.dataTransfer.getData('key'); //Получение информации о перетаскиваемой картинке
    var droppedElement = document.getElementById(dropItem);
    var newElement = document.createElement('img'); //Создание картинки на канве
    //Задание размеров картинки
    newElement.style.height = "70px";
    newElement.style.width = "100px";
    newElement.src = droppedElement.src; //Подключение файла-источника svg
    //Задание координат картинки
    newElement.style.position = 'absolute';
    newElement.style.left = event.clientX + 'px';
    newElement.style.top = event.clientY + 'px';
    //Задание идентификатора для картинки
    newElement.classList.add('drag-drop');
    newElement.id = 'var1'
    dropLoc.appendChild(newElement); //Присоединение картинки к родительскому элементу-канве
}