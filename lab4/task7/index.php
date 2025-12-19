<?php
function generatePassword($length) {
    $lowercase = range('a', 'z');
    $uppercase = range('A', 'Z');
    $numbers = range('0', '9');

    $allChars = array_merge($lowercase, $uppercase, $numbers);

    $password = "";

    for ($i = 0; $i < $length; $i++) {
        $index = random_int(0, count($allChars) - 1);
        $password .= $allChars[$index];
    }

    return $password;
}

echo generatePassword(10);
?>