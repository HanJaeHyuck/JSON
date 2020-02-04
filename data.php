<?php

header("Content-type: application/json");
$data = [
    [
        'image'=> 'busan.jpg',
        'name'=>'부산',
        'price' => 65466,
        'result' => 3670
    ],
    [
        'image'=> 'damyang.jpg',
        'name'=>'담양',
        'price' => 35447,
        'result' => 6040
    ],
    [
        'image'=> 'jeju.jpg',
        'name'=>'제주',
        'price' => 45566,
        'result' => 15032
    ],
    [
        'image'=> 'kwangwha.jpg',
        'name'=>'광화',
        'price' => 33555,
        'result' => 23845
    ],
    [
        'image'=> 'busan.jpg',
        'name'=>'부산',
        'price' => 98712,
        'result' => 32341
    ],
    [
        'image'=> 'damyang.jpg',
        'name'=>'담양',
        'price' => 54446,
        'result' => 18064
    ],
    [
        'image'=> 'jeju.jpg',
        'name'=>'제주',
        'price' => 1233,
        'result' => 7699
    ],
    [
        'image'=> 'kwangwha.jpg',
        'name'=>'광화',
        'price' => 35678,
        'result' => 6870
    ],
    [
        'image'=> 'jeju.jpg',
        'name'=>'제주',
        'price' => 34567,
        'result' => 14032
    ],
    [
        'image'=> 'kwangwha.jpg',
        'name'=>'광화',
        'price' => 12334,
        'result' => 10000
    ],

];

echo json_encode($data);