var locMenu = document.getElementById('dynMenu');
var lst = document.getElementById('options');
let lis;

variable.onclick = function() {
	createMenu(4, ['Нарисовать', 'Присвоить новое значение', '', '']);
}

array.onclick = function() {
	createMenu(5, ['Нарисовать', 'Инициализировать элементы', 'Вставка нового элемента согласно заданным условиям', 'Сортировка', 'Удаление сдвигом']);
}

structure.onclick = function() {
	createMenu(2, ['Нарисовать', 'Инициализировать поля']);
}

mfile.onclick = function() {
	createMenu(3, ['Нарисовать', 'Связать файл с переменной', 'Записать информацию']);
}

pointer.onclick = function() {
	createMenu(3, ['Нарисовать', 'Связать файл с переменной', 'Записать информацию']);
}

muchness.onclick = function() {
	createMenu(2, ['Нарисовать', 'Добавить новый элемент']);
}

mstack.onclick = function() {
	createMenu(8, ['Нарисовать', 'Добавление элемента в стек', 'Вставка по заданному условию', 'Удаление вершины стека', 'Удаление элемента', 'Обход стека', 'Поиск элементов по заданному условию', 'Полное удаление стека']);
}

mqueue.onclick = function() {
	createMenu(7, ['Нарисовать', 'Добавление элемента в очередь', 'Вставка в очередь по заданному условию', 'Удаление элемента очередь', 'Удаление', '', '']);
}

function createMenu(length, strArray) {
	var lis;
	for (let i = 0; i < length; i++) {
		lis = document.createElement('LI');
		lis.innerHTML = strArray[i];
		lst.appendChild(lis);
	}
}
