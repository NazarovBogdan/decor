<?php
require ("header.php");
require ("config.php");

$path = '/static/media';
$pathRecord = '../../static/media';

$extension = strtolower(substr(strrchr($_FILES['img']['name'], '.'), 1));
$filename = uniqid() . '.' . $extension;

$target = $path . '/' . $filename;
$targetRecord = $pathRecord . '/' . $filename;

move_uploaded_file($_FILES['img']['tmp_name'], $target);

$changeRecords =  $_POST['id'];
var_dump($_FILES);
var_dump($_POST);
$sql = "UPDATE slider_images SET image = '$targetRecord' WHERE id = '$changeIdRecords '";
if ($pdo->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: ";
}
?>