// Sigma
//? Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).
console.log("Sigma");

function sigma(num) {
    var newSum = 0;
    for(var i=1; i<=num; i++) {
        newSum += i;
    };
    return newSum;
};

var sigmaNum = 5;
var sigmaNewNum = sigma(sigmaNum);

console.log(sigmaNewNum);

console.log("------------------------------");

// Factorial
//? Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). 
//? For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).
console.log("Factorial");

function factorial(num) {
    var newMult = 0;
    for(var i=1; i<=num; i++) {
        if(i == 1) {
            newMult += i;
        };
        newMult *= i;
    };
    return newMult;
};

var factorialNum = 5;
var factorialNewNum = factorial(factorialNum);

console.log(factorialNewNum);

console.log("------------------------------");

// Star Art
//? Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively. Depending on which function is called, those stars should be left-justified (the first star would be very first char in the text field), or right-justified (the last star would be very last char in the text field, with potentially some number of spaces at beginning of text field before the block of stars start), or centered in the 75- character text field (with the same number of spaces on either side of the block of stars, plus/minus one).
//? Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.
//? Write a function drawRightStars(num) that prints 75 characters total. Stars should build from the right side. The last num characters should be asterisks; the other 75 should be spaces.  
//? Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces.
console.log("Star Art");

var textLength = 75;

function drawLeftStars(num) {
    var newStr;
    if(num>textLength) {
        return "The given number has exceeded the limit."
    };
    for(var i=1; i<=textLength; i++) {
        if(i==1 && num>0) {
            newStr = "*";
        }
        else if(i<=num) {
            newStr += "*";
        }
        else {
            newStr += " ";
        };
    };
    return newStr;
};

function drawRightStars(num) {
    var newStr;
    var spaceCount = textLength-num;
    if(num>textLength) {
        return "The given number has exceeded the limit."
    };
    for(var i=1; i<=textLength; i++) {
        if(i==1 && spaceCount>0) {
            newStr = " ";
        }
        else if(i<=spaceCount) {
            newStr += " ";
        }
        else {
            newStr += "*"; 
        };
    };
    return newStr;
};

function drawCenteredStars(num) {
    var newStr;
    var spaceCount = textLength-num;
    var spaceCountFront = spaceCount/2;
    var starCount = spaceCountFront+num;
    if (num > textLength) {
        return "The given number has exceeded the limit.";
    };
    for(var i=1; i<=textLength; i++) {
        if(i==1 && spaceCount>0) {
            newStr = " ";
        }
        else if(i<=spaceCountFront) {
            newStr += " ";
        }
        else if(i<=starCount) {
            newStr += "*";
        }
        else {
            newStr += " ";
        };
    };
    return newStr;
};

var starArtNum = 3;
var starArtNewStr = drawCenteredStars(starArtNum);

console.log(starArtNewStr);