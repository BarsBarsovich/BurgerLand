<?
if((isset($_POST['name'])&&$_POST['name']!="")
    &&(isset($_POST['phone'])&&$_POST['phone']!="")
    &&(isset($_POST['street'])&&$_POST['street']!="")
    &&(isset($_POST['house'])&&$_POST['house']!="")
    &&(isset($_POST['flat'])&&$_POST['flat']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'mail@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения
        $adr = ' ул.'.$_POST['street'].' дом. '.$_POST['house'].' кв.'.$_POST['flat'];
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>                     
                        <p>Адрес: '.$adr.'</p>                           
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>