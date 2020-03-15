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
$tmp = $parse->xpath("//div[font = 'input_a']")[0]["style"];
echo $tmp. PHP_EOL;
$parse->xpath("//div[font = 'input_a']")[0]["style"] = preg_replace('/[#][A-F | 0-9]{6}/', "#FF0000", $tmp);
print_r($parse->xpath("//div[font = 'input_a']")[0]["style"]);
print_r($parse->asXML());
//$parse->xpath("//switch[text = 'input_a']/text")[0] = "8";
//print_r($parse->xpath("//switch[text = 'input_a']/text")[0]);
/*print_r($texts[0]["fill"]);
foreach($texts as $text) {
    $text["fill"] = "#FF0000";
    //print_r($text["fill"]);
}*/
//echo $parse->asXML();
//print_r($parse->g->g->switch->text);
/*$parse->registerXPathNamespace('svg', 'http://www.w3.org/2000/svg');
$parse->registerXPathNamespace('xlink', 'http://www.w3.org/1999/xlink');
$result = $parse->xpath('//svg:g');
$content = $result[0];
//print_r($content->xpath('rect'));
/*preg_match_all("/[<][a-z].*?input_a.*?>/", $xml_code, $match, PREG_OFFSET_CAPTURE);
$match = $match[0];
foreach($match as $elem):
    $code = $elem[0];
    $position = $elem[1];
    $code = preg_replace('/[#][A-F | 0-9]{6}/', "#FF0000", $code);
    $xml_code = substr_replace($xml_code, $code, $elem[1], strlen($code));
endforeach;
echo PHP_EOL;
$xml_code = str_replace("input_a", "222", $xml_code);
echo $xml_code;
print_r($match);
print_r('\n');
$xml_code = str_replace("input_a", "222", $xml_code);
$xml_code = preg_replace('/[#][A-F | 0-9]{6}/', "#FF0000", $xml_code);
//echo $xml_code;
/*$parse = new SimpleXMLElement($xml_code);
$parse->registerXPathNamespace('svg', 'http://www.w3.org/2000/svg');
//$parse->registerXPathNamespace('xlink', 'http://www.w3.org/1999/xlink');
//$result = $parse->xpath('//svg:g');
$result = $parse->xpath('svg/g');
var_dump($parse);
//echo $xml_code;
/*<!DOCTYPE html>
<img src=<?=$xml_code?>>*/