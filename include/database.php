<?php
$link = mysqli_connect('localhost', 'root', '', 'project');

if(mysqli_connect_errno()) {
    echo 'Ошибка при подключении к базе данных ('.mysqli_connect_errno().'): '.mysqli_connect_error();
    exit();
}

function get_containers($db) {
    $req = "SELECT * FROM containers";
    $result = mysqli_query($db, $req);
    $containers = mysqli_fetch_all($result, MYSQLI_ASSOC);
    return $containers;
}

$containers = get_containers($link);
