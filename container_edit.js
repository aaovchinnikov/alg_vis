let close4 = document.getElementById("cross4"); // The modal window's cross
let confButton4 = document.getElementById("conf4"); // Button OK of the modal window
let inputName4 = document.getElementById("str-edit-container-name"); // String input for editting a container's name
let inputDescription4 = document.getElementById("str-edit-container-info"); // String input for editting the container's descriprion
let containerName4 = ''; // Let for keeping the container's name which has been edited
let containerDesrcription4 = ''; // Let for keeping the container's description which has been edited
let containerId4 = ''; // Let for keeping the updated container's id

close4.onclick = function() {
    /* Event listener for the cross of the modal window
    * The function disables visibity of the modal window and cleans input strings
    * Input parameter: none. Output parameter: none.
    * Author: Tatyana Shorygina
    */
    inputName4.value = '';
    inputDescription4.value = '';
    dialogEditContainer.style.display = 'none';
};

function editContainer(currentId) {
    /* The function makes the dialog window for editng a container visible
    * The function initially fills the string inputs with the information from database
    * The function sends input changes to the server
    * The function informs user about the errors during editing information in the database
    * Input parameter: none. Output parameter: none.
    * Author: Tatyana Shorygina
    */
    inputParameter = currentId;
    containerId4 = currentId;
    let xhr = new XMLHttpRequest(); // Creating new HTTP request
    xhr.open("POST", "include/container_info.php", true); // Setting destination and type
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Setting encoding
    xhr.send('id=' + encodeURIComponent(containerId4));
    xhr.onreadystatechange = function() { // Waiting for the server's answer
        /* Event listener for getting response from server
        * Inserts the information about the container into the modal window and makes it visible
        * Input parameter: none. Output parameter: none.
        * Author: Tatyana Shorygina
        */
        if (xhr.readyState == 4) { // The answer has been got
            if(xhr.status == 200) { // The server's returned code 200 (success)
                let containerInfo = JSON.parse(xhr.responseText); // Unpackaging the server's response to get all containers'
                inputName4.value = containerInfo["container_name"];
                inputDescription4.value = containerInfo["description"];
                dialogEditContainer.style.display = 'block';
            }
        }
    };
}

confButton4.onclick = function () {
    /* Event listener for clicking button "OK" of the modal window
    * The function sends input changes to the server
    * The function informs user about the errors during editing information in the database
    * Input parameter: none. Output parameter: none.
    * Author: Tatyana Shorygina
     */
    containerName4 = inputName4.value; // Getting the values which have been input
    containerDesrcription4 = inputDescription4.value;
    let xhr = new XMLHttpRequest(); // Creating new HTTP request
    xhr.open("POST", "include/container_edit.php", true); // Setting destination and type
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Setting encoding
    xhr.send('id=' + encodeURIComponent(containerId4)+ '&name=' + encodeURIComponent(containerName4) + '&descr=' + encodeURIComponent(containerDesrcription4)); // Sending
    // the container's id and changed fields
    xhr.onreadystatechange = function() { // Waiting for the server's answer
        /* Event listener for getting response from server
        * Informs the user if an error has occured at updating information
        * Input parameter: none. Output parameter: none
        * Author: Tatyana Shorygina
        */
        if (xhr.readyState == 4) { // The answer has been got
            if(xhr.status == 200) { // The server's returned code 200 (success)
                let result = xhr.responseText;
                if (result != "1") { // If the inserting into database was not successful
                    alert('При изменении информации в базе данных произошла ошибка'); // Informing the user about it
                } else {
                    let containerString = document.getElementById(containerId4);
                    containerString.innerHTML = containerName4;
                }
            }
        }
    };
    // Cleaning input strings
    inputName4.value = '';
    inputDescription4.value = '';
    dialogEditContainer.style.display = 'none'; // Disabling visibility of the modal window
};