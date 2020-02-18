<?php
require_once('database.php');
$id = $_POST["id"];
$json1 = "";
$json2 = "";
$counter = 0;
$arr = array();
$STH = $DB->prepare("SELECT s_id, s_picture FROM scenes WHERE scenes.s_algorithm = :id ORDER BY s_order;");
$STH->setFetchMode(PDO::FETCH_ASSOC);
if(! $STH->execute(array("id" => $id))) {
    echo "0";
    exit(1);
}
$file_name = $STH->fetchAll();
foreach ($file_name as $scene):
    $scene["s_picture"] = "include/images/".$scene["s_picture"];
    $json1 = json_encode($scene);
    $arr[$counter] = $json1;
    $counter += 1;
endforeach;
$json2 = json_encode($arr);
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT"); //Дата в прошлом
header("Cache-Control: no-store, no-cache, must-revalidate"); // HTTP/1.1
header("Pragma: no-cache"); // HTTP/1.1
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . "GMT");
echo $json2;