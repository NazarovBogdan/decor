<?php
require ("header.php");
define("NAME", $_POST['name']);
define("PHONE", $_POST['phone']);
define("MAIL", $_POST['mail']);
mail('nazarovbogdan30081995@gmail.com', 'Test', $message);

$to  = "<nazarovbogdan30081995@gmail.com>, " ; 
$to .= "nazarovbogdan30081995@gmail.com>"; 

$subject = "Заявка проекта"; 

$message = NAME. "  хочет заказать проект, его телефон: ".PHONE." ,Почта: ".MAIL."Имя: ".NAME;

$headers  = "Content-type: text/html; charset=UTF-8 \r\n"; 
$headers .= "From:<decorum@vh285.sweb.ru>\r\n"; 
$headers .= "Reply-To: reply-to@example.com\r\n"; 

mail($to, $subject, $message, $headers); 
?>