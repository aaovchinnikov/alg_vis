// Get modal element
var modal_1wayList = document.getElementById('list1Modal');
// Get open modal button
var modalBtn1List = document.getElementById('cont2');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn1List.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
    modal_1wayList.style.display = 'block';
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