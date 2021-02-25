<?php
require ("header.php");
require ("config.php");
$query = $pdo->query("SELECT * FROM `content`");
$Text = [];

 while($row = $query->fetch_array(MYSQLI_BOTH)) {

        for ($id=0; $id < strlen($id); $id++) {
            array_push($Text, $row);   
        };
    };      
    echo json_encode($Text , JSON_UNESCAPED_UNICODE);;
?>