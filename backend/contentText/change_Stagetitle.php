<?php
require ("header.php");
require ("config.php");
require ("check.php");
$changeRecords =  $_POST['id'];
$sql = "UPDATE stages SET title = :title  WHERE id = '$changeRecords'";
$query = $pdo->prepare($sql);
$query->execute([
    'title' => TITLE, 
]);
var_dump($_POST);
?>