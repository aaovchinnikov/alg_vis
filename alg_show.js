let algShowModal = document.getElementById('modal-show-alg'); // Get modal element for algorithm
let close7 = document.getElementById("cross7"); // The modal window's cross

window.addEventListener('click', outsideClick); // Listen for outside click

function outsideClick(e) {
    /* Function has no input parameters
    * Functions closes modal on outside click
    * Function doesn't return anything
    * Author: Shorygina Tatyana
    */
    if (e.target == showSceneModal){
        algShowModal.style.display = 'none';
    }
}

function closeModal() {
    /* Function has no input parameters
    * Functions closes modal
    * Function doesn't return anything
    * Author: Shorygina Tatyana */
   algShowModal.style.display = 'none';
}

close7.onclick = function() {
    /* Event listener for the cross of the modal window
    * The function disables visibity of the modal window and cleans input strings
    * Input parameter: none. Output parameter: none.
    * Author: Shorygina Tatyana
    */
   algShowModal.style.display = 'none';
};

function outsideClick(event) {
    /* Function has no input parameters
    * Function closes modal on outside click
    * Function doesn't return anything
    * Author: Shorygina Tatyana
    */
    if (event.target === algShowModal) {
        algShowModal.style.display = 'none';
    }
}

function showAlgorithm() {
    /* The function gets the id of the clicked algorithm
    * and shows it's scenes.
    * Input parameter: event. Output parameter: none.
    * Author: Shorygina Tatyana
     */
    let eventTarget = event.target.id;
    console.log(eventTarget);
    let check = eventTarget.split('-') // Splitting the clicked element id
    if (check.length === 2) { // Checkking that the click has been on an algorithm but not on the buttton
        currentAlgId = check[1]; // Getting the algorithm's id which it has in the database
        //cleanScenes();
        let modal = document.getElementById("modal-show-scene"); // Modal
        modal.style.display = 'block';
        let htmlCode = modal.outerHTML;
        let xhr1 = new XMLHttpRequest(); // Creating new HTTP request
        xhr1.open("POST", "include/scene_list.php", true); // Setting destination and type
        xhr1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Setting encoding
        xhr1.send('id=' + encodeURIComponent(currentAlgId));
        xhr1.onreadystatechange = function () { // Waiting for the server's answer
            /* Event listener for getting response from server.
            * The function unpackages the info about the visualisation of each scene
            * and about their ids. The function inserts the recived scenes' visualisation
            * into the list of the scenes.
            * Input parameter: none. Output parameter: none.
            * Author: Elena Karelina
            */
            if (xhr1.readyState == 4) { // The answer has been got
                if (xhr1.status == 200) {
                    let fileName = JSON.parse(xhr1.responseText); // Parsing the answer to get information about
                    // each scene separately
                    for(let i = 0; i < fileName.length; i++) { // Going through each scene
                        let scenePict = document.createElement('div'); // Creating a frame for each scene's visualisation
                        let sceneInfo = JSON.parse(fileName[i]); // Parsing the info about the scene
                        let sceneImg = new Image(); // Creating an interface image for a scene's visualisation
                        scenePict.id = 'scene-' + sceneInfo["s_id"]; // Setting an id for the frame
                        scenePict.classList.add("one-scene"); // Setting class for the frame
                        scenePict.addEventListener('click', selectScene); // Setting event listener for working with the scene
                        sceneImg.src = 'data:image/jpg;base64,' + sceneInfo["s_picture"]; // Setting the pictures content gor from the server
                        sceneImg.id = 'scenevis-' + sceneInfo["s_id"]; // Setting id for the image
                        sceneImg.classList.add('small-scene'); // Setting class for the image
                        addSceneButton.before(scenePict); // Inserting the frame into the user's interface
                        scenePict.appendChild(sceneImg); // Appending the image to the frame
                        let content = xhr.responseText; // Getting the text of the server's response
                        let canvas = document.getElementById("show-scene"); // canvas
                        canvas.innerHTML = content; // Inserting the HTML code into the canvas
                    }
                }
            }
        };
    }
}
