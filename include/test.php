<?php
    require_once('database.php');
    $got_name = $_POST["name"];
    $got_descr = $_POST["descr"];
    $req = "INSERT INTO containers (container_name, description) VALUES ( '".$got_name."', '".$got_descr."');";
    $result = mysqli_query($link, $req);
    echo $result;
