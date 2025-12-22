<?php
$products = [
    ['name' => 'Ручка', 'price' => 5, 'stock' => 100],
    ['name' => 'Ноутбук', 'price' => 1200, 'stock' => 10],
    ['name' => 'Блокнот', 'price' => 15, 'stock' => 50],
    ['name' => 'Мышь', 'price' => 45, 'stock' => 0],
    ['name' => 'Клавиатура', 'price' => 70, 'stock' => 20],
    ['name' => 'Карандаш', 'price' => 2, 'stock' => 200],
];

$filteredProducts = array_filter($products, function($product) {
    return $product['price'] < 50 && $product['stock'] > 0;
});

foreach ($filteredProducts as $product) {
    echo "Название: " . $product['name'] . ", Цена: " . $product['price'] . ", В наличии: " . $product['stock'] . "<br>";
}
?>