// ДЗ 13. Правильное обращение
// Написать функцию которая будет принимать строку с Ф.И.О и будет возвращать 
// Ф.И.О в правильном регистре. Ф.И.О - нужно запросить у пользователя.

var userFullName = prompt('Enter your Full Name').toLowerCase();
var userFullNameWill = '';

standartFullName();

function standartFullName() {
    for (var str of userFullName.split(' ')) {
        userFullNameWill += str.replace(str[0], str[0].toUpperCase()) + " ";
    }

    console.log('Homework 13:');
    console.log('Full Name: ' + userFullNameWill.trim());
}


// ДЗ 14. Массивы
// Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Найти сумму и количество положительных элементов.
// Найти минимальный элемент массива.
// Найти максимальный элемент массива.
// Определить количество отрицательных элементов.
// Найти количество нечетных положительных элементов.
// Найти количество четных положительных элементов.
// Найти сумму четных положительных элементов.
// Найти сумму нечетных положительных элементов.
// Найти определить количество элементов, равных 4.

var arrayNum = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
var sum = 0;
var positiveElement = 0;
var minNumberArray = 0;
var maxNumberArray = 0;
var amountNegativeElement = 0;
var amounOddPositiveElements = 0;
var amounEvenPositiveElements = 0;
var sumEvenPositiveElements = 0;
var sumOddPositiveElements = 0;
var number = 0;
var test = 0;

array();

function array() {
    for (i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] > 0) {
            sum += arrayNum[i];
        }

        if (arrayNum[i] > 0) {
            positiveElement++;
        }

        if (arrayNum[i] < minNumberArray) {
            minNumberArray = arrayNum[i];
        }

        if (arrayNum[i] > maxNumberArray) {
            maxNumberArray = arrayNum[i];
        }

        if (arrayNum[i] < 0) {
            amountNegativeElement++;
        }

        if (arrayNum[i] > 0) {
            if ((arrayNum[i] % 2) === 1) {
                amounOddPositiveElements++;
                sumOddPositiveElements += arrayNum[i];
            }

            if ((arrayNum[i] % 2) === 0) {
                amounEvenPositiveElements++;
                sumEvenPositiveElements += arrayNum[i];
            }

            if (arrayNum[i] === 4) {
                number++;
            }
        }
    }

    console.log('Homework 14:');
    console.log('1) ' + positiveElement + ' positive element.' +  'Sum of positive elements = ' + sum);
    console.log('2) Minimum array element = ' + minNumberArray);
    console.log('3) Maximum array element = ' + maxNumberArray);
    console.log('4) Number of negative element = ' + amountNegativeElement)
    console.log('5) Amount odd positive elements = ' + amounOddPositiveElements);
    console.log('6) Amount even positive elements = ' + amounEvenPositiveElements);
    console.log('7) The sum of all even' + sumEvenPositiveElements);
    console.log('8) The sum of all odd' + sumOddPositiveElements);
    console.log('9) Number of elements 4 in the array = ' + number);
}


// ДЗ 15. Четные числа
// Написать функцию getNumberOfEven(n) - получить количество 
// четных цифр в числе

var getNumber = prompt('Entr the number').split('');
var i = 0;
var sum = 0;

getNumberOfEven();

function getNumberOfEven() {
    for (; i < getNumber.length; i++) {
        if ((getNumber[i] % 2) == 0) {
            sum++;
        }
    }
    
    console.log('Homework 15:')
    console.log('Contain even numbers = ' + sum);
}
