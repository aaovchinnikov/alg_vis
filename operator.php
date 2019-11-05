<!DOCTYPE html>
<?php
require_once 'include/database.php';
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
    <link rel="stylesheet" href="modal_window.css" />
    <link rel="stylesheet" href="modal_style.css" />
</head>

<body>
    <div class="operator">
        <div id="header">
            <h1>Режим оператора</h1>
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
                <ul class="menu" id="available-containers">
                    <?php foreach ($containers as $container):
                        $id = strval($container["id"]);
                        ?>
                        <li class="one-container" id=<?=$id?>><div>&#9773; <?=$container["container_name"]?></div></li>
                    <?php endforeach; ?>
                </ul>
                <ul class="menu">
                    <li>
                        <div id="add_a_container" class="one-container">+ Создать новый контейнер</div>
                    </li>
                </ul>
            </div>
        </div>

        <div id="footer">
            <div class="container">
                <button class="btn btn2">Сбросить</button>
                <button class="btn btn4" id="op_button"> <a href="index.php" class="btn-ref">Выйти из режима оператора</a></button>
            </div>
        </div>
    </div>
    <!-- Контекстное меню для удаления-->
    <nav class="context-menu" id="my-menu">
        <ul class="context-menu__items">
            <li class="context-menu__item">
                <a href="#" class="context-menu__link" id="delete-container">
                    <i class="fa fa-eye"></i> Удалить контейнер
                </a>
            </li>
            <li class="context-menu__item">
                <a href="#" class="context-menu__link">
                    <i class="fa fa-eye"></i> Изменить
                </a>
            </li>
        </ul>
    </nav>
    <!-- Диалоговое окно для ввода информации о контейнере-->
    <div class="dialog-add" id="modal-window">
        <span id="cross1">&times</span>
        <div class="hint">Название контейнера</div>
        <input class="input-str" id="str-inp1" type="text">
        <div class="hint">Описание</div>
        <input class="input-str" id="str-inp2" type="text">
        <btn class="confirm" id="conf">OK</btn>
    </div>

    <!--button id="modalBtn" class="button">Click here</button-->
    <div id="list1Modal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="closeBtn">&times;</span>
                    <h2>Однонаправленный список</h2>
                </div>
                <div class="modal-body">
                    <p>Линейный однонаправленный список — это структура данных, состоящая из элементов одного типа, связанных между собой последовательно посредством указателей.</p>
                    <img id="one_list" src="pictures1/stack_queue.svg" width="100" height="70" alt="draw variable">
                    <div><button id="editBtn" class="button">Редактировать</button></div>
                    <div><button id="deleteBtn" class="button">Удалить</button></div>
                </div>
                <div class="modal-footer">
                    <h3> </h3>
                </div>
            </div>
    </div>

    <!-- подключение скриптов-->
    <script src="main.js" type="module"></script>
    <script src="ncontainer.js" type="module"></script>
    <script src="delete_container.js" type="module"></script>
    <script src="modal.js" type="module"></script>
</body>

</html>