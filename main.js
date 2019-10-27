let containerMenu = document.getElementById('available-containers'); // Меню доступных контейнеров
let allPictures = containerMenu.querySelectorAll('img'); // Загрузка всех изображений, находящихся в меню
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

dropLoc.ondragover = function(event) {
    /*Функция-обработчик события попадания картинки на канву
    * Функция принимает на вход событие (event)
    * Функция отключает дефолтный drag&drop
    * Автор: Елена Карелина
    */
    event.preventDefault();
}

dropLoc.ondrop = function(event) {
    /*Функция-обработчик события бросания картинки на канву
    * Функция принимает на вход событие (event)
    * Функция рисует картинку, идентичную перетаскиваемой, на канве
    * и устанавливает ее размеры и координаты
    * Автор: Елена Карелина
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
    clickCoords = getPosition(event); // Вычисление координат мыши
    clickCoordsX = clickCoords.x;
    clickCoordsY = clickCoords.y;
    newElement.style.left = clickCoordsX + 'px';
    newElement.style.top = clickCoordsY + 'px';
    //Задание идентификатора для картинки
    newElement.classList.add('drag-drop');
    newElement.id = 'var1'
    dropLoc.appendChild(newElement); //Присоединение картинки к родительскому элементу-канве
}
