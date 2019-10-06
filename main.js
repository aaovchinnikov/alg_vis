<<<<<<< HEAD
var locMenu = document.getElementById('dynMenu');
var lst = document.getElementById('options');
let lis;

draggable = new PlainDraggable(document.getElementById('draggable'));
draggable.containment = document.getElementById('drawing');

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
=======
interact('.dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '#yes-drop',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,

    // listen for drop related events:

    ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
        draggableElement.textContent = 'Dragged in'
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
        event.relatedTarget.textContent = 'Dragged out'
    },
    ondrop: function (event) {
        event.relatedTarget.textContent = 'Dropped'
    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
    }
})

interact('.drag-drop')
    .draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],
        autoScroll: true,
        // dragMoveListener from the dragging demo above
        onmove: dragMoveListener
    })
function dragMoveListener (event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}
>>>>>>> 58ca65d03fa54cd3a05f337bfbadbd7fe6fa7ea4
