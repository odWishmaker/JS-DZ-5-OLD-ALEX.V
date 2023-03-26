var userFullName = prompt('Enter your Full Name');
var userFullNameWill = '';

standartFullName();

function standartFullName() {
    for (var str of userFullName.split(' ')) {
        userFullNameWill += str.replace(str[0], str[0].toUpperCase()) + " ";
    }

    console.log('Homework 13:');
    console.log('Full Name: ' + userFullNameWill.trim());
}


var arrayNum = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
var sum = 0;
var i = 0;

arrayIterationFirst();

function arrayIterationFirst() {
    arrayNum = arrayNum.filter((num) => num >= 0);
    for (; i < arrayNum.length; i++) {
        sum += arrayNum[i];
    }

    console.log('Homework 14:');
    console.log('1) ' + arrayNum.length + ' positive element.' +  'Sum of positive elements = ' + sum);
}


var arrayNum = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

maxMinNumber();

function maxMinNumber() {
    var max = Math.max.apply(null, arrayNum);
    arrayNum = arrayNum.filter((numm) => numm <= 0);
    var min = Math.min.apply(null, arrayNum);

    console.log('2) Minimum array element = ' + min);
    console.log('3) Maximum array element = ' + max);
    console.log('4) Number of negative element = ' + arrayNum.length)
}


var arrayNum = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
var sumOdd = 0;
var sumEven = 0;
var i = 0;

arrayIterationSecond();

function arrayIterationSecond() {
    arrayNum = arrayNum.filter((num) => num >= 0);
    arrayNum = arrayNum.map((num) => num % 2);
    for (; i < arrayNum.length; i++) {
        if (arrayNum[i] == 0) {
            sumEven += 1;
        } 
        
        if (arrayNum[i] == 1) {
            sumOdd += 1;
        }
    }

    console.log('5) Odd positive elements = ' + sumOdd);
    console.log('6) Even negative elements = ' + sumEven);
}


var arrayNum = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
var sumEven = 0;
var sumOdd = 0;
var i = 0;

arrayIterationThird();

function arrayIterationThird() {
    arrayNum = arrayNum.filter((num) => num >= 0);
    for (; i < arrayNum.length; i++) {
        if (arrayNum[i] % 2 == 0) {
            sumEven += arrayNum[i];
        } 
        
        else if (arrayNum[i] % 2 == 1) {
            sumOdd += arrayNum[i];
        }
    }

    console.log('7) The sum of all even' + sumEven);
    console.log('8) The sum of all odd' + sumOdd);
}


var arrayNum = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
var number = 0;
var i = 0;

arrayIterationFourth();

function arrayIterationFourth() {
    for (; i < arrayNum.length; i++) {
        if (arrayNum[i] == 4) {
            number++;
        }
    }

    console.log('9) Number of elements 4 in the array = ' + number);
}


var getNumber = prompt('Entr the number');
var get = 0;
var i = 0;
var sum = 0;

getNumberOfEven();

function getNumberOfEven() {
    get = getNumber.split('').map((Number) => Number % 2);
    for (; i < get.length; i++) {
        if (+get[i] == 0) {
            sum++;
        }
    }
    
    console.log('Homework 15:')
    console.log('Contain even numbers = ' + sum);
}
