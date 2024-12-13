<?php

return [
    'paths' => ['*'], // Разрешить все пути

    'allowed_methods' => ['*'], // Разрешить все HTTP-методы

    'allowed_origins' => ['http://manage-front', 'http://localhost:8000'], // Укажите домены фронтенда

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], // Разрешить все заголовки

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false, // Установите true, если требуются куки
];

?>