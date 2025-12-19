<?php
$num1 = 3;
$num2 = 4;

$sum = $num1 + $num2;

echo "Первое число: $num1<br>";
echo "Второе число: $num2<br>";
echo "Сумма: $sum<br>";

if ($sum % 2 == 0) {
    echo "Сумма является чётным числом";
} else {
    echo "Сумма является нечётным числом";
}