<?php
require_once('database.php');
$got_id = $_POST["id"];
$req = "DELETE FROM containers WHERE containers.id=".$got_id.";";
$result = mysqli_query($link, $req);
echo $result;