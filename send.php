<?php
// Telegram-tokens
$telegramBotToken = '6388860220:AAFCqRDsCuBG_WdxlRVkqExJe6nAtOlnmQQ';
$chatId = '-954787432';
// Receiving data from form
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$message = trim($_POST['message']);
$checkbox = isset($_POST['checkbox']) ? 'Yes' : 'No';

// Checking if $name, $email and $message are filled
if (empty($name) || empty($email) || empty($message)) {
    die('Please, fill all fields.');
}

// Layouting a message text
$text = "<b>Name:</b> $name\n";
$text .= "<b>Email:</b> $email\n";
$text .= "<b>Pinned Message</b>:\n<pre>$message</pre>\n";
$text .= "<b>Has the user agreement condition been accepted in <a href='https://alashchev17.github.io/eslavo-slava/policy'>Privacy Policy</a></b>: $checkbox\n\n";
$text .= "<b>Hashtag</b>: #contacts\n";

// Sending message to Telegram
$messageUrl = "https://api.telegram.org/bot{$telegramBotToken}/sendMessage?chat_id={$chatId}&parse_mode=HTML&text=" . urlencode($text);

// Sending a query
$result = file_get_contents($messageUrl);

// Checking result
if ($result === false) {
    die('Error occured');
}

header("Location: ./thankyou.php");