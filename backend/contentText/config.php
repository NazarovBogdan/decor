<?php
require ("header.php");
//$dsn = 'mysql:host=77.222.57.68;dbname=decorum_landing';
//$pdo = new PDO($dsn, 'decorum_landing', 'bD9TU9fQ');
$pdo= new mysqli("localhost", "decor", "root", "root");
$pdo->query("SET NAMES 'utf8'");
?>