<?php
    require_once('database.php');
    $got_name = $_POST["name"];
    $got_descr = $_POST["descr"];
    $req = "INSERT INTO containers (container_name, description) VALUES ( '".$got_name."', '".$got_descr."');";
    $result = mysqli_query($link, $req);
    $req = "SELECT id FROM containers WHERE container_name = '".$got_name."';";
    $result1 = mysqli_query($link, $req);
    $id = mysqli_fetch_all($result1, MYSQLI_ASSOC);
    foreach ($id as $id1):
        $k = $id1["id"];
    endforeach;
    echo $result." ".$k;
