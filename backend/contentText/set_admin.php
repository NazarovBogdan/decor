<?php
require ("header.php");
require ("config.php");
require ('check.php');
$login123 = $_POST['login'];
$pass123 = $_POST['password'];
$query = $pdo->query("SELECT * FROM `admin` WHERE login = '$login123' AND password = '$pass123'");
$Text = [];
    while($row = $query->fetch_array(MYSQLI_BOTH)) {
        
        for ($id=0; $id < strlen($id); $id++) {
            array_push($Text, $row);   
        };
    };      
    if (count($Text) >= 1) {
        echo "1";
    } else {
        echo "0";
    }
?>