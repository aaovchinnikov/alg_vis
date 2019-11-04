<!DOCTYPE html>
<?php
    require_once('include/database.php');
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Algorithm and structure visualisation</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="menu_style.css" />
    <link rel="stylesheet" href="footer_style.css" />
    <link rel="stylesheet" href="context_menu.css" />
</head>
<body>
<div>
<div class="operator">
    <div id="header">
        <h1>Режим обучаемого</h1>
    </div>

    <div id="drawing">
        <div class="menu-draw">
            <div class="primitives" id="graph-primitives">
                <ul class="editor">
                    <li>
                        <img id="rectangle" src="pictures1/rect.svg" width="80" height="50" alt="draw variable">
                    </li>
                    <li>
                        <img id="circule" src="pictures1/circ.svg" width="100" height="70" alt="draw variable">
                    </li>
                    <li>
                        <button class="btn btn5" id="qbutton">Готово</button>
                    </li>
            </div>
            <div id="outer-dropzone" class="dropzone"></div>
        </div>
        <div id="picturesCol1">
            <ul class="menu" id="available-containers1">
                <?php foreach ($containers as $container):
                    $id = strval($container["id"]);
                    ?>
                <li class="one-container" id=$id><div>&#9773; <?=$container["container_name"]?></div></li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>

    <div id="footer">
        <div class="container">
            <button class="btn btn2">Сбросить</button>
            <button class="btn btn4" id="op_button"> <a href="operator.php" class="btn-ref">Войти в режим оператора</a></button>
        </div>
    </div>
</div>
</body>
</html>