<?php

header("Content-type: application/json");
$data = [
    [
        'image'=> 'busan.jpg',
        'name'=>'부산',
        'price' => 12000,
        'result' => 3670
    ],
    [
        'image'=> 'damyang.jpg',
        'name'=>'담양',
        'price' => 12000,
        'result' => 6040
    ],
    [
        'image'=> 'jeju.jpg',
        'name'=>'제주',
        'price' => 12000,
        'result' => 15032
    ],
    [
        'image'=> 'kwangwha.jpg',
        'name'=>'광화',
        'price' => 12000,
        'result' => 23845
    ],
    [
        'image'=> 'busan.jpg',
        'name'=>'부산',
        'price' => 12000,
        'result' => 32341
    ],
    [
        'image'=> 'damyang.jpg',
        'name'=>'담양',
        'price' => 12000,
        'result' => 18064
    ],
    [
        'image'=> 'jeju.jpg',
        'name'=>'제주',
        'price' => 12000,
        'result' => 7699
    ],
    [
        'image'=> 'kwangwha.jpg',
        'name'=>'광화',
        'price' => 12000,
        'result' => 6870
    ],
    [
        'image'=> 'jeju.jpg',
        'name'=>'제주',
        'price' => 12000,
        'result' => 14032
    ],
    [
        'image'=> 'kwangwha.jpg',
        'name'=>'광화',
        'price' => 12000,
        'result' => 10000
    ],

];

echo json_encode($data);