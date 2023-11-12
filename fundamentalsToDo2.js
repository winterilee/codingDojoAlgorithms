// Countdown
console.log("Countdown");

function countdown(input) {
    var newCount = 0;
    for(var i=input; i>=0; i--) {
        console.log(i);
        newCount++;
    }
    return newCount;
}

var countdownLength = countdown(5);
console.log("The length is " + countdownLength);

console.log("------------------------------");

// Print and Return
console.log("Print and Return");

function printAndReturn(array) {
    var newNum = 0;
    console.log(array[0]);
    newNum = array[1];
    return newNum;
}

var printAndReturnArray = [5, 7];
var printAndReturnNum = printAndReturn(printAndReturnArray);

console.log(printAndReturnNum);

console.log("------------------------------");

// First Plus Length
console.log("First Plus Length");

function firstPlusLength(array) {
    var newNum;
    newNum = array[0] + array.length;
    return newNum;
}

var firstArray = [false,"what?",2];
var firstNum = firstPlusLength(firstArray);

console.log(firstNum);

console.log("------------------------------");

// Values Greater than Second
console.log("Values Greater than Second");

function valuesGreaterThanSecond(array) {
    var newSum = 0;
    for(var i=0; i<array.length; i++) {
        if(array[i]>array[1]) {
            console.log(array[i]);
            newSum++;
        }
    };
    return newSum;
}

var valuesGreaterArray = [1,3,5,7,9,13];
var valuesGreaterCount = valuesGreaterThanSecond(valuesGreaterArray);

console.log("The count is " + valuesGreaterCount);

console.log("------------------------------");

// Values Greater than Second, Generalized
console.log("Values Greater than Second, Generalized");

function valuesGreaterThanSecondGeneral(array) {
    var newArray = [];
    var newArrayCount = 0;
    if(!array[1]) {
        console.log("Second value does not exist");
        return;
    }
    for(var i=0; i<array.length; i++) {
        if(array[i]>array[1]) {
            newArray.push(array[i]);
            newArrayCount++;
        }
    }
    console.log(newArrayCount);
    return newArray;
};

var valuesGreaterGeneralArray = [1];
var valuesGreaterGeneralNewArray = valuesGreaterThanSecondGeneral(valuesGreaterGeneralArray);
console.log(valuesGreaterGeneralNewArray);

console.log("------------------------------");

// This Length, That Value
console.log("This Length, That Value");

function thisLengthThatValue(num1, num2) {
    var newArray = [];
    for(var i=0; i<num1; i++) {
        newArray.push(num2);
    };
    if(newArray.length == num2) {
        console.log("Jinx!");
    };
    return newArray;
};

var thisLengthNum1 = 2;
var thisLengthNum2 = 2;

var thisLengthArray = thisLengthThatValue(thisLengthNum1, thisLengthNum2);
console.log(thisLengthArray);

console.log("------------------------------");

// Fit the First Value
console.log("Fit the First Value");

function fitTheFirstValue(array) {
    if(array[0]>array.length) {
        console.log("Too big!");
    }
    else if(array[0]<array.length) {
        console.log("Too small!");
    }
    else {
        console.log("Just right!");
    };
};

var fitArray = [5,3,1];
fitTheFirstValue(fitArray);

console.log("------------------------------");

// Fahrenheit to Celsius
console.log("Fahrenheit to Celsius");

function fahrenheitToCelsius(fDegrees) {
    var newTemp = (fDegrees-32)*(5/9);
    return newTemp.toFixed(2);
}

var newFTemp = 98;
var newCTemp = fahrenheitToCelsius(newFTemp);

console.log(newCTemp);

console.log("------------------------------");

// Celsius to Fahrenheit
console.log("Celsius to Fahrenheit");

function celsiusToFahrenheit(cDegrees) {
    var newTemp = ((9/5)*cDegrees)+32;
    return newTemp.toFixed(2);
}

var newCTemp2 = 22;
var newFTemp2 = celsiusToFahrenheit(newCTemp2);

console.log(newFTemp2);