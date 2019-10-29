let addButton = document.getElementById("add_a_container"); //Кнопка для появления меню с графическими примитивами
let finishButton = document.getElementById("qbutton"); //кнопка для исчезновения менб с графическими примитивами
let graphEditor = document.getElementById("graph-primitives"); // Меню графических примитивов
let allPictures = graphEditor.querySelectorAll('img');
let modalWindow = document.getElementById("modal-window");
let confButton = document.getElementById("conf");
let inputName = document.getElementById("str-inp1")
let containerName = ''
let baseList = document.getElementById("available-containers")

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
    event.preventDefault(); // Отключение дефолтного обработчика
    graphEditor.classList.remove("primitives-active"); // Удаление из списка классов класса, в котором прописана полная видимость меню
    let tmp = document.createElement("li");
    tmp.innerHTML = "&#9773; " + containerName;
    tmp.classList.add("one-container")
    tmp.id = containerName
    baseList.prepend(tmp)
    //baseList.appendChild(tmp);
}

confButton.onclick = function() {
    containerName = inputName.value;
    modalWindow.style.display = "none";
    graphEditor.classList.add("primitives-active"); // Добавление к списку классов класса, в котором прописана полная видимость меню
}
