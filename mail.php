<?php

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$messages = $_POST['message'];

$mailheader = "From: ".$name."<".$email.">\r\n":

$recipient = "nicolecht@hotmail.com";

mail($recipient, "Enquiry for HatchTank Consulting", $message, $mailheader)
or die("Error!");

echo "Message Sent";

?>