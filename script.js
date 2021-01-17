'use strict'

//1-2
let strFirst = 'js',
    strSecond = 'JS';

console.log(strFirst.toUpperCase());
console.log(strSecond.toLowerCase());

//1.2.3
let strOne = 'я учу javascript!';
console.log('количество символов в строке' + ' - ' + strOne.length);
console.log('способ через substr' + ' - ' + strOne.substr(0, 1) + strOne.substr(5));
console.log('способ через substring' + ' - ' + strOne.substring(0, 1) + strOne.substring(5));
console.log('способ через slice' + ' - ' + strOne.slice(0, 1) + strOne.slice(5));
console.log('позиция учу' + ' - ' + strOne.indexOf('учу', 0));

// если количество символов этого текста больше заданного в переменной n, то в переменную result 
// запишем первые n символов строки  tr и добавим в конец троеточие '...'.
// В противном случае в переменную result запишем содержимое переменной str.

let strForCut = 'Реализуйте обрезание длинного текста';
let n = 6;

function CutStr(str) {
    let result;
    if (str.length > n) {
        result = str.slice(0, 3) + '...';
    } else {
        result = str;
    }
    return result;
};

console.log(CutStr(strForCut));
console.log(CutStr('яблоко'));

//Работа с replace
let strReplace = 'Я-учу-javascript!';
console.log(strReplace.replace(/-/g, '!')); //воспользуемся глобальным поиском с помощью регулярного выражения

//Работа с split
let arrFirst = strOne.split(' ', 3);
console.log(arrFirst);

let arrSecond = strOne.split('');
console.log(arrSecond);

let date = '2025-12-31',
    arrDate = date.split('-', 3),
    arrNewDate = arrDate[2] + '.' + arrDate[1] + '.' + arrDate[0];
console.log(arrNewDate);

//Работа с join
let arrForJoin = ['я', 'учу', 'javascript', '!'];
let stringForJoin = String(arrForJoin.join('+', 4));
console.log(stringForJoin);

let text = 'преобразуйте первую букву строки в верхний регистр';
let newText = text.slice(0, 1).toUpperCase() + text.slice(1);
console.log(newText);

let textSecond = 'Преобразуйте первую букву каждого слова строки в верхний регистр.';
let arrTextSecond = textSecond.split(' ');

for (let i = 0; i < arrTextSecond.length; i++) {
    arrTextSecond[i] = arrTextSecond[i].slice(0, 1).toUpperCase() + arrTextSecond[i].slice(1);
}

console.log(arrTextSecond.join);

//Преобразуйте строку 'var_test_text' в 'varTestText'. 
// Скрипт должен работать с любыми аналогичными строками.

let str = 'var_test_text';

function makeNoSpace(str) {
    let arrStr = str.replace(/_/g, ' ').split(' ');
    let result;

    for (let i = 1; i < arrStr.length; i++) {
        arrStr[i] = arrStr[i].slice(0, 1).toUpperCase() + arrStr[i].slice(1);
        result = arrStr.join('');
    }

    return result;
};

console.log(makeNoSpace(str));
console.log(makeNoSpace('new_day'));
console.log(makeNoSpace('long_large_small_little_good_bad'));