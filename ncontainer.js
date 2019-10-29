let addButton = document.getElementById("add_a_container"); //Кнопка для появления меню с графическими примитивами
let finishButton = document.getElementById("qbutton"); //кнопка для исчезновения менб с графическими примитивами
let graphEditor = document.getElementById("graph-primitives"); // Меню графических примитивов
let allPictures = graphEditor.querySelectorAll('img'); // Выбор всех изображений, находящихся в меню
let modalWindow = document.getElementById("modal-window"); // Модальное окно
let confButton = document.getElementById("conf"); // Кнопка ОК модального окна
let inputName = document.getElementById("str-inp1"); // Строка ввода
let containerName = ''; // Строка для хранения введенного имени контейнера
let baseList = document.getElementById("available-containers"); // Список контейнеров
let close = document.getElementById("cross1"); // Крестик модального окна

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
    modalWindow.style.display = 'block'
}

finishButton.onclick = function(event) {
    /* Функция-обработчик нажатия на кнопку Готово
   * Делает невидимым меню с графическими примитивами и добавляет введенный контейнер в список
   * Принимает на вход событие, ничего не возвращает
   * Автор: Елена Карелина
    */
    event.preventDefault(); // Отключение дефолтного обработчика
    graphEditor.classList.remove("primitives-active"); // Удаление из списка классов класса, в котором прописана полная видимость меню
    let tmp = document.createElement("li"); // Создание нового элемента списка
    tmp.innerHTML = "&#9773; " + containerName; // Добавление текста - введенного имени контейнера
    tmp.classList.add("one-container"); // Назначение элементу класса элемента списка контейнеров
    tmp.id = containerName; // Назначение элементу id
    baseList.prepend(tmp) // Присоединение элемента к списку (в начало)
}

confButton.onclick = function() {
    /* Функция-обработчик нажатия на кнопку ОК
   * Делает видимым меню с графическими примитивами, если была введена непустая строка
   * Ничего не принимает, ничего не возвращает
   * Автор: Елена Карелина
    */
    containerName = inputName.value; // Сохранение введенного имени контейнера
    if (containerName === "") // Если введена пустая строка, предупреждаем пользователя и ничего не делаем
        alert("Не введено имя контейнера")
    else { // В противном случае переходим в режим графического редактора
        modalWindow.style.display = "none"; // Отключаем видимость модального окна
        graphEditor.classList.add("primitives-active"); // Добавление к списку классов класса, в котором прописана полная видимость меню
    }
}

close.onclick = function() {
    /* Функция-обработчик нажатия на крестик модального окна
   * Делает модальное окно невидимым
   * Ничего не принимает, ничего не возвращает
   * Автор: Елена Карелина
    */
    modalWindow.style.display = "none";
}