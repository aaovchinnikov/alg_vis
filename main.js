var dragItem1 = document.getElementById("vr"); // Перетаскиваемая картинка
var dragItem2 = document.getElementById("one_list"); // Перетаскиваемая картинка
var dragItem3 = document.getElementById("tree_node"); // Перетаскиваемая картинка
var dragItem4 = document.getElementById("array"); // Перетаскиваемая картинка
var dropLoc = document.getElementById("outer-dropzone"); // Канва, на которую осуществляется перетаскивание

dragItem1.ondragstart = function(event) {
    /*Функция-обработчик события начала перетаскивания картинки
    * Функция принимает на вход событие (event)
    * Функция записывает перетаскиваемый элемент в событие
    * Автор: Карелина Елена
    */
    event.dataTransfer.setData('key', event.target.id);
}

dragItem2.ondragstart = function(event) {
    /*Функция-обработчик события начала перетаскивания картинки
    * Функция принимает на вход событие (event)
    * Функция записывает перетаскиваемый элемент в событие
    * Автор: Карелина Елена
    */
    event.dataTransfer.setData('key', event.target.id);
}

dragItem3.ondragstart = function(event) {
    /*Функция-обработчик события начала перетаскивания картинки
    * Функция принимает на вход событие (event)
    * Функция записывает перетаскиваемый элемент в событие
    * Автор: Карелина Елена
    */
    event.dataTransfer.setData('key', event.target.id);
}

dragItem4.ondragstart = function(event) {
    /*Функция-обработчик события начала перетаскивания картинки
    * Функция принимает на вход событие (event)
    * Функция записывает перетаскиваемый элемент в событие
    * Автор: Карелина Елена
    */
    event.dataTransfer.setData('key', event.target.id);
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
