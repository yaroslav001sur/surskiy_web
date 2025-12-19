<?php
$users = [
    [
        "name" => "Ярослав",
        "age" => 20,
        "city" => "Волжск"
    ],
    [
        "name" => "Максим",
        "age" => 23,
        "city" => "Чебоксары"
    ],
    [
        "name" => "Даниил",
        "age" => 26,
        "city" => "Йошкар-Ола"
    ]
];

echo "<ul>";
foreach ($users as $user) {
    echo "<li>Имя: " . $user["name"] . ", Возраст: " . $user["age"] . ", Город: " . $user["city"] . "</li>";
}
echo "</ul>";