<?php

$data = json_decode(file_get_contents('php://input'), true);

$success = 0;
$word = file_get_contents('word.txt');
$letters = str_split($word);

$answer = $data['answer'];

if ($answer == '')
{
    for($i = 0; $i < count($letters); $i++)
    {
        $answer = $answer . "_";
    }
}

$answer_arr = str_split($answer);

for($i = 0; $i < count($letters); $i++)
{
    if ($letters[$i] === $data['text'])

        $answer_arr[$i] = $data['text'];
    
}

$answer = toStr($answer_arr);


if ($word === $data['text'] || $answer === $word)
{
    $success = 1;
}



$output = json_encode(['answer' => $answer, 'success' => $success]);
echo $output;


function toStr($letters)
{
    $str = '';

    foreach ($letters as $letter)
    {
        $str = $str . $letter;
    }

    return $str;
}