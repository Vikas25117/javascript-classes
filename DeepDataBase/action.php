<?php


if($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['type'] == "form_data"){

    echo json_encode($_POST);
}



?>