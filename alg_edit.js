let dialogEditAlg = document.getElementById('dialog-edit-alg'); // Get modal element
let close3 = document.getElementById("cross3"); // The modal window's cross
let confButton3 = document.getElementById("conf3"); // Button OK of the modal window
let inputName3 = document.getElementById("str-edit-alg-name"); // String input for editting an algorithm's name
let inputDescription3 = document.getElementById("str-edit-alg-info"); // String input for editting the algorithm's descriprion
let inputDifficulty3 = document.getElementById("str-edit-alg-dif"); // String input for editting the algorithm's difficulty
let algName3 = ''; // Let for keeping the algorithm's name which has been edited
let algDesrcription3 = ''; // Let for keeping the algorithm's description which has been edited
let algDifficulty3 = ''; // Let for keeping the algorithm's difficulty which has been edited
//let algContainer3 = ''; // Let for keeping the id of the container to which the inserted algorithm refers
let algId3 = ''; // Let for keeping the updated algorithm's id

close3.onclick = function() {
    /* Event listener for the cross of the modal window
    * The function disables visibity of the modal window and cleans input strings
    * Input parameter: none. Output parameter: none.
    * Author: Elena Karelina
    */
    cleandialogEditAlg();
};

function editAlgorithm(currentId) {
    /* The function makes the dialog window for editng an algorithm visible
    * The function initially fills the string inputs with the information from database
    * The function sends input changes to the server
    * The function informs user about the errors during editing information in the database
    * Input parameter: none. Output parameter: none.
    * Author: Elena Karelina
     */
    inputParameter = currentId;
    algId3 = currentId.split('-')[1];
    let xhr = new XMLHttpRequest(); // Creating new HTTP request
    xhr.open("POST", "include/alg_info.php", true); // Setting destination and type
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Setting encoding
    xhr.send('id=' + encodeURIComponent(algId3));
    xhr.onreadystatechange = function() { // Waiting for the server's answer
        /* Event listener for getting response from server
        * Inserts the information about the algorithm into the modal window and makes it visible
        * Input parameter: none. Output parameter: none.
        * Author: Elena Karelina
        */
        if (xhr.readyState == 4) { // The answer has been got
            if(xhr.status == 200) { // The server's returned code 200 (success)
                let algorithmInfo = JSON.parse(xhr.responseText); // Unpackaging the server's response to get all algorithms'
                inputName3.value = algorithmInfo["algorithm_name"];
                inputDescription3.value = algorithmInfo["description"];
                inputDifficulty3.value = algorithmInfo["difficulty"];
                dialogEditAlg.style.display = 'block';
            }
        }
    };
}

confButton3.onclick = function () {
    /* Event listener for clicking button "OK" of the modal window
    * The function sends input changes to the server
    * The function informs user about the errors during editing information in the database
    * Input parameter: none. Output parameter: none.
    * Author: Elena Karelina
     */
    algName3 = inputName3.value; // Getting the values which have been input
    if (algName3 === "")
        alert("Имя алгоритма не может быть пустым");
    else {
        algDesrcription3 = inputDescription3.value;
        algDifficulty3 = inputDifficulty3.value;
        let xhr = new XMLHttpRequest(); // Creating new HTTP request
        xhr.open("POST", "include/alg_edit.php", true); // Setting destination and type
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Setting encoding
        xhr.send('id=' + encodeURIComponent(algId3) + '&name=' + encodeURIComponent(algName3) + '&descr=' + encodeURIComponent(algDesrcription3)
            + '&diff=' + encodeURIComponent(algDifficulty3)); // Sending
        // the algorithm's id and changed fields
        xhr.onreadystatechange = function () { // Waiting for the server's answer
            /* Event listener for getting response from server
            * Informs the user if an error has occured at updating information
            * Input parameter: none. Output parameter: none.
            * Author: Elena Karelina
            */
            if (xhr.readyState == 4) { // The answer has been got
                if (xhr.status == 200) { // The server's returned code 200 (success)
                    let result = xhr.responseText;
                    if (result == "1") { // If the inserting into database was not successful
                        let editedAlgorithm = document.getElementById('alg-' + algId3);
                        editedAlgorithm.innerHTML = algName3;
                    } else {
                        alert('При изменении информации в базе данных произошла ошибка'); // Informing the user about it
                    }
                }
            }
        };
        cleandialogEditAlg();
    }
}

function cleandialogEditAlg() {
    /* The function makes the dialog window for editing an algorithm invisible.
    * The function resets all values of the text strings.
    * Input parameter: none. Output parameter: none.
    * Author: Elena Karelina.
    */
    // Cleaning input strings
    inputName3.value = '';
    inputDescription3.value = '';
    inputDifficulty3.value = '';
    dialogEditAlg.style.display = 'none'; // Disabling visibility of the modal window
}