<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Get the user input from the POST request
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Initialize the PHPMailer object
$mail = new PHPMailer(true);

try {
    // Set the mail server parameters
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'your_email@gmail.com';
    $mail->Password = 'your_email_password';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Set the sender and recipient
    $mail->setFrom('your_email@gmail.com', 'Your Name');
    $mail->addAddress('recipient_email@example.com', 'Recipient Name');

    // Set the message body
    $mail->isHTML(false);
    $mail->Subject = 'New message from your website';
    $mail->Body = "Name: $name\nEmail: $email\nMessage: $message";

    // Send the email
    $mail->send();

    // Redirect the user to the thank you page
    header('Location: thank-you.html');
} catch (Exception $e) {
    // Handle any exceptions that occurred during the process
    echo 'Message could not be sent. Error: ', $mail->ErrorInfo;
}
?>

    