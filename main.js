/*interact('.dropzone').dropzone({
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
}*/


//TEST DRAG&DROP SECTION
var dragSrcEl = null;
function handleDragStart(e) {
    // Target (this) element is the source node.
    this.style.opacity = '0.4';
  
    dragSrcEl = this;
  
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }
  
  var cols = document.querySelectorAll('#columns .element');
  [].forEach.call(cols, function(col) {
    col.addEventListener('dragstart', handleDragStart, false);
  });

  canvas_drop = document.querySelectorAll('#drawing #outer-dropzone #columns .element');

function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault(); // Necessary. Allows us to drop.
    }
  
    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
  
    return false;
  }
  
  function handleDragEnter(e) {
    // this / e.target is the current hover target.
    this.classList.add('over');
  }
  
  function handleDragLeave(e) {
    this.classList.remove('over');  // this / e.target is previous target element.
  }

  function handleDrop(e) {
    // this/e.target is current target element.
  
    if (e.stopPropagation) {
      e.stopPropagation(); // Stops some browsers from redirecting.
    }
  
    return false;
  }
  
  function handleDragEnd(e) {
    // this/e.target is the source node.
  
    [].forEach.call(cols, function (col) {
      col.classList.remove('over');
    });
  }
  
  var cols = document.querySelectorAll('#columns .column');
  [].forEach.call(cols, function(col) {
    col.addEventListener('dragstart', handleDragStart, false);
    col.addEventListener('dragend', handleDragEnd, false);
  });

  canvas_drop.addEventListener('drop', handleDrop, false);
  canvas_drop.addEventListener('dragenter', handleDragEnter, false);
  canvas_drop.addEventListener('dragover', handleDragOver, false);
  canvas_drop.addEventListener('dragend', handleDragEnd, false);
  canvas_drop.addEventListener('dragleave', handleDragLeave, false);

//иконка при перетаскивании
  var dragIcon = document.createElement('img');
  dragIcon.src = 'logo.png';
  dragIcon.width = 100;
  e.dataTransfer.setDragImage(dragIcon, -10, -10);

