<?php

    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];


    $email_from = 'nunomcfernandes12@gmail.com';

    $email_subject = 'Novo email Site';

    $email_body = "User Name: $name.\n".
                    "User email: $visitor_email.\n".
                     "User phone number: $phone.\n".
                        "User Message: $message.\n";

    $to = 'nuno.f2002@gmail.com';

    $headers = "From: $email_from \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html ");



?>