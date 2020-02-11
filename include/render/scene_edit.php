<?php
require_once('../database.php');
$xml = $_POST["xml"];
$svg_file = "tmp".getmypid().".svg";
$xml_file = "tmp".getmypid().".xml";
file_put_contents($xml_file, $_POST["xml"]);
exec("java -classpath bin;backend/mxgraph-all.jar com.mxgraph.examples.Xml2Svg ".$xml_file." ".$svg_file,
    $message, $status);
if($status != 0) {
    unlink($xml_file);
    unlink($svg_file);
    exit(3);
}
else {
    $scene_id = $_POST["id"];
    $request = "SELECT update_scene(".$scene_id.", '".$xml."');";
    $result = mysqli_query($link, $request);
    if(gettype($result) == "boolean") {
        unlink($xml_file);
        unlink($svg_file);
        exit(4);
    }
    $inf = mysqli_fetch_all($result, MYSQLI_NUM);
    $file_name = "../images/".$inf[0][0];
    rename($svg_file, $file_name);
    unlink($xml_file);
    header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
    header("Cache-Control: no-store, no-cache, must-revalidate");
    header("Pragma: no-cache");
    header("Last-Modified: " . gmdate("D, d M Y H:i:s") . "GMT");
    echo "include/images/".$inf[0][0];
}