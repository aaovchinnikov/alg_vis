let lst = document.getElementById('available-containers');
// Get modal element
let modal_1wayList = document.getElementById('list1Modal');
let allCont = lst.querySelectorAll('li');
let closeBtn = document.getElementsByClassName('closeBtn')[0];
let contName = document.getElementById('cont-name');
let contDescr = document.getElementById('cont-descr');

// Добавление к каждой картинке обработчика события начала перетаскивания
/*for(let i = 0; i < allCont.length; i++) {
    let curLi = allCont[i];
    curLi.addEventListener('click', openModal);
}
*/

lst.onclick = function(event) {
    if(event.target.tagName === 'LI')
        openModal(event);
};

// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(event) {
    modal_1wayList.style.display = 'block';
    let xhr = new XMLHttpRequest(); // Создание нового HTTP запроса к серверу
    xhr.open("POST", "include/info.php", true); // Определение типа и адреса запроса
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Передача кодировки информации
    xhr.send('id=' + encodeURIComponent(event.target.id)); // Передача информации
    xhr.onreadystatechange = function() { // Ждём ответа от сервера
        /* Функция-обработчик события получения ответа от сервера
        * В случае подтверждения сервером удачного добавления в БД добавляет имя контейнера в интерфейс
        * Ничего не принимает, ничего не возвращает
        * Автор: Елена Карелина
        */
        if (xhr.readyState == 4) { // Ответ пришёл
            if(xhr.status == 200) { // Сервер вернул код 200 (что хорошо)
                contName.innerHTML = document.getElementById(event.target.id).textContent;
                contDescr.innerHTML = xhr.responseText;
            }
        }
    };
}

// Function to close modal
function closeModal() {
    modal_1wayList.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
    if (e.target == modal_1wayList){
        modal_1wayList.style.display = 'none';
    }
    
}