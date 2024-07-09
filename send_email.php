<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_email = $_POST['email'];
    $message = $_POST['message'];

    // 이메일 수신자 주소
    $to = $user_email; // 사용자의 이메일 주소로 설정

    // 이메일 제목
    $subject = 'Your Contact Form Submission';

    // 이메일 본문
    $body = "Thank you for contacting us. Here is a copy of your message:\n\n".
            "Your Email: $user_email\n\n".
            "Your Message:\n$message";

    // 이메일 헤더
    $headers = "From: hyeongjun967329@gmail.com\r\n" .  // 여기에 보낸 사람의 이메일 주소를 입력하세요
               "Reply-To: no-reply@example.com\r\n" .
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
