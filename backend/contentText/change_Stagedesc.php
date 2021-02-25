<?php
require ("header.php");
require ("config.php");
require ("check.php");
$changeRecords =  $_POST['id'];
$sql = "UPDATE stages SET description = :description  WHERE id = '$changeRecords'";
$query = $pdo->prepare($sql);
$query->execute([
    'description' => DESCRIPTION, 
]);
var_dump($_POST);
?>