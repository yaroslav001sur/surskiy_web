<?php
$products = [
    ['name' => 'Тетрадь', 'price' => 8, 'stock' => 150],
    ['name' => 'Монитор', 'price' => 950, 'stock' => 5],
    ['name' => 'Ластик', 'price' => 3, 'stock' => 300],
    ['name' => 'Колонки', 'price' => 60, 'stock' => 0],
    ['name' => 'Флешка', 'price' => 40, 'stock' => 25],
    ['name' => 'Линейка', 'price' => 4, 'stock' => 120],
];

$filteredProducts = array_filter($products, function($product) {
    return $product['price'] < 50 && $product['stock'] > 0;
});

foreach ($filteredProducts as $product) {
    echo "Название: " . $product['name'] . ", Цена: " . $product['price'] . ", В наличии: " . $product['stock'] . "<br>";
}
?>