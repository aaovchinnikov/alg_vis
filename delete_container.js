let containerMenu = document.getElementById('available-containers');
let allPoints = containerMenu.querySelectorAll('li');

for (let i = 0; i < allPoints.length - 1; i++) {
    let curContainer = allPoints[i];
    curContainer.addEventListener("contextmenu", deleteContainer);
}

function deleteContainer(event) {
    event.preventDefault();
    let deletedContainer = document.getElementById(event.target.id);
    console.log(deletedContainer);
    containerMenu.removeChild(deletedContainer);
}