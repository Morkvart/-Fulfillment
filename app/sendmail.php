<?php
$to = 'maksimgerasenko568@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
$subject = 'Заявка на звонок'; //Заголовок сообщения
$message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Имя: '.$_POST['name'].'</p>
                    <p>Телефон: '.$_POST['tel'].'</p>
                </body>
            </html>'; //Текст нащего сообщения можно использовать HTML теги
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
$headers .= "From: Отправитель <test@test.com>\r\n"; //Наименование и почта отправителя
mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
header("Location: thx.html");
?>