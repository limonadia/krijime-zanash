<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(204);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    error_log("POST request received");

    $name = htmlspecialchars($_POST['name']);
    $number = htmlspecialchars($_POST['number']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    error_log("Form data: Name=$name, Number=$number, Email=$email, Message=$message");
    
    $to = "nadiamezini@gmail.com"; 
    $subject = "New contact form submission";
    $body = "Name: $name\nNumber: $number\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        error_log("Email successfully sent!");
        echo "Email successfully sent!";
    } else {
        error_log("Email sending failed.");
        echo "Email sending failed.";
    }
} else {
    error_log("Invalid request method.");
    echo "Invalid request method.";
}
?>