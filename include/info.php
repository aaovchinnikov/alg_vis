<?php
require_once('database.php');
$got_id = $_POST["id"];
$request = "SELECT container_name, description FROM containers WHERE id='".$got_id."';";
$result1 = mysqli_query($link, $request);
$inf = mysqli_fetch_all($result1, MYSQLI_ASSOC);
foreach ($inf as $cur):
    $descr = $cur["description"];
endforeach;
echo $descr;