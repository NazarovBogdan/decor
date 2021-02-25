<?php
require ("header.php");
define("COMM", $_POST['comm']);

$to  = "<nazarovbogdan30081995@gmail.com>, " ; 
$to .= "nazarovbogdan30081995@gmail.com>"; 

$subject = "Оставлен комментарий"; 

$message = "Вам оставили комментарий: ".COMM;

$headers  = "Content-type: text/html; charset=UTF-8 \r\n"; 
$headers .= "From:<decorum@vh285.sweb.ru>\r\n"; 
$headers .= "Reply-To: reply-to@example.com\r\n"; 

mail($to, $subject, $message, $headers); 
?>