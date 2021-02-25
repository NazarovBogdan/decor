<?php
require ("header.php");
require ("config.php");
require ("check.php");
$changeRecords =  $_POST['id'];
var_dump($_POST);
$sql = "UPDATE content SET title = :title  WHERE id = '$changeRecords'";
$query = $pdo->prepare($sql);
$query->execute([
    'title' => TITLE, 
]);
?>