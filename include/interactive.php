<?php
require_once 'database.php';
$scene_id = "160";
$STH = $DB->prepare("SELECT xml_code FROM scenes WHERE s_id = :id");
$STH->setFetchMode(PDO::FETCH_NUM);
if(!$STH->execute(array("id" => $scene_id))) {
    echo "1";
    exit(1);
}
$xml_code = $STH->fetchAll()[0][0];
$xml_code = mb_substr($xml_code, 26);
$xml_code = base64_decode($xml_code);
echo $xml_code;
$xml_code = str_replace('xmlns=', 'ns=', $xml_code);
$parse = new SimpleXMLElement($xml_code);
echo PHP_EOL;
$interactive_elements = $parse->xpath("//div[font = 'input_a']");
foreach($interactive_elements as $cur_elem) {
    $group = $cur_elem->xpath("(ancestor::g[1]/preceding-sibling::*)[last()]");
    $group[0]["stroke"] = "#0066FF";
    $cur_elem["style"] = preg_replace('/[#][A-F|0-9]{6}/', "#FF0000", $cur_elem["style"]);
}
print_r($parse->asXML());
