var userFullName = prompt('Enter your Full Name');
var userFullNameWill = '';

standartFullName(userFullName);

function standartFullName(userFullName) {
    for (var str of userFullName.split(' ')) {
        userFullNameWill += String(str.replace(str[0], str[0].toUpperCase())) + " ";
    }

    console.log(userFullNameWill);
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

    console.log(sum + ' sum of array elements');
    console.log(arrayNum.length + ' element');
}


var arrayNum = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

maxMinNumber();

function maxMinNumber() {
    var max = Math.max.apply(null, arrayNum);
    arrayNum = arrayNum.filter((numm) => numm <= 0);
    var min = Math.min.apply(null, arrayNum);

    console.log(max + ' maximum array element');
    console.log(min + ' minimum array element');
    console.log(arrayNum.length + ' element');
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
            sumOdd += 1;
        } 
        
        if (arrayNum[i] == 1) {
            sumEven += 1;
        }
    }

    console.log(sumOdd + ' odd elements');
    console.log(sumEven + ' even elements');
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

    console.log(sumEven + ' the sum of all even');
    console.log(sumOdd + ' the sum of all odd');
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

    console.log(number + ' number of elements in the array');
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
    console.log(sum + ' the number of all even');
}
