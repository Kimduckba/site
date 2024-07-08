<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 메일 받을 사람의 이메일 주소
    $to = "hyeongjun967329@gmail.com";
    
    // 사용자가 제출한 이메일과 메시지
    $from = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    // 이메일 제목과 헤더
    $subject = "New Contact Form Submission";
    $headers = "From: " . $from;

    // 이메일 전송
    if (mail($to, $subject, $message, $headers)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "There was an error sending your message.";
    }
}
?>
