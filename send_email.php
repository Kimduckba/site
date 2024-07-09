<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $message = $_POST['message'];

    // 이메일 수신자 주소
    $to = 'hyeongjun967329@gmail.com'; // 여기에 실제 이메일 주소를 입력하세요

    // 이메일 제목
    $subject = 'New Contact Form Submission';

    // 이메일 본문
    $body = "You have received a new message from: $email\n\n".
            "Here is the message:\n$message";

    // 이메일 헤더
    $headers = "From: hyeongjun967329@gmail.com\r\n" .  // 여기에 보낸 사람의 이메일 주소를 입력하세요
               "Reply-To: $email\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // 이메일 보내기
    if (mail($to, $subject, $body, $headers)) {
        echo 'Message sent successfully';
    } else {
        echo 'Error: Unable to send message';
    }
} else {
    echo 'Invalid request method';
}
?>
