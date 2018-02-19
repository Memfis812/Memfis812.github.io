<?
if (isset($_POST["submitForm"])){
	$name = $_POST["userName"];
	$email = $_POST["email"];
	$title = $_POST["title"];
	$message = $_POST["message"];
	$name = htmlspecialchars($name);
	$email = htmlspecialchars($email);
	$title = htmlspecialchars($title);
	$message = htmlspecialchars($message);
	$name = urldecode($name);
	$email = urldecode($email);
	$title = urldecode($title);
	$message = urldecode($message);
	$name = trim($name);
	$email = trim($email);
	$title = trim($title);
	$message = trim($message);
	};
mail("****@mail.ru", "сообщение с сайта", "Имя отправителя:".$name."\n"."Адрес электронной почты:".$email."\n"."Тема письма:".$title."\n"."Сообщение:".$message);
$redirect = isset($_SERVER["HTTP_REFERER"])? $_SERVER["HTTP_REFERER"]:"index.html";
header("Location: $redirect");
exit();
?>