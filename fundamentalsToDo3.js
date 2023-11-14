// Biggie Size
//? Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].
console.log("Biggie Size");

function biggieSize(array) {
    var newArray = [];
    for(var i=0; i<array.length; i++) {
        if(array[i]>0) {
            newArray.push("big");
        }
        else {
            newArray.push(array[i]);
        }
    };
    return newArray;
};

var biggieArray = [-1, 3, 5, -5];
var biggieNewArray = biggieSize(biggieArray);

console.log(biggieNewArray);

console.log("------------------------------");

//Print Low, Return High
//? Create a function that takes an array of numbers. The function should print the lowest value in the array, and return the highest value in the array.
console.log("Print Low, Return High");

function printLowReturnHigh(array) {
    var newLow = null;
    var newHigh = null;
    for(var i=0; i<array.length; i++) {
        if(newLow == null && newHigh == null) {
            newLow = array[i];
            newHigh = array[i];
        }
        if(array[i]<newLow) {
            newLow = array[i];
        }
        else if(array[i]>newHigh) {
            newHigh = array[i];
        }
    };
    console.log(newLow);
    return newHigh;
};

var printLReturnHArray = [1,5,2,8];
var returnedHigh = printLowReturnHigh(printLReturnHArray);

console.log(returnedHigh);

console.log("------------------------------");

// Print One, Return Another
//? Build a function that takes an array of numbers. The function should print the second-to-last value in the array, and return first odd value in the array.
console.log("Print One, Return Another");

function printOneReturnAnother(array) {
    var secondToLast;
    var firstOdd = null;
    for(var i=0; i<array.length; i++) {
        if(firstOdd == null && (array[i]%2)==1) {
            firstOdd = array[i];
        }
        if(i<(array.length-1)) {
            secondToLast = array[i];
        }
    };
    console.log(secondToLast);
    return firstOdd;
};

var printOreturnAArray = [2,3,7,9,1];
var returnedOdd = printOneReturnAnother(printOreturnAArray);

console.log(returnedOdd);

console.log("------------------------------");

// Double Vision
//? Given an array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.
console.log("Double Vision");

function doubleVision(array) {
    var newArray = [];
    for(var i=0; i<array.length; i++) {
        newArray.push(array[i]*2);
    };
    return newArray;
};

var doubleVisionArray = [1,4,9];
var doubleVisionNewArray = doubleVision(doubleVisionArray);

console.log(doubleVisionNewArray);

console.log("------------------------------");

// Count Positives
//? Given an array of numbers, create a function to replace last value with the number of positive values. Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
console.log("Count Positives");

function countPositives(array) {
    var newArray = [];
    var positiveCount = 0;
    for(var i=0; i<array.length; i++) {
        if(array[i]>0) {
            positiveCount++;
        }
        if(i == (array.length-1)) {
            newArray.push(positiveCount);
        }
        else {
            newArray.push(array[i]);
        }
    };
    return newArray;
}

var countPositivesArray = [-1,2,-4,7,1];
var countPositiveNewArray = countPositives(countPositivesArray);

console.log(countPositiveNewArray);

console.log("------------------------------");

// Evens and Odds
//? Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"
console.log("Evens and Odds");

function evensAndOdds(array) {
    var oddCount = 0;
    var evenCount = 0;
    for(var i=0; i<array.length; i++) {
        if((array[i]%2)==0) {
            evenCount++;
            if(oddCount>0) {
                oddCount = 0;
            }
        };
        if((array[i]%2)==1) {
            oddCount++;
            if(evenCount>0) {
                evenCount = 0;
            }
        };
        if(oddCount == 3) {
            console.log("That's odd!");
        };
        if(evenCount == 3) {
            console.log("Even more so!");
        };
    };
};

var evensAndOddsArray = [1,9,7,2,1,8,2,6];
evensAndOdds(evensAndOddsArray);

console.log("------------------------------");

// Increment the Seconds
//? Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.
console.log("Increment the Seconds");

function incrementTheSeconds(array) {
    var newArray = [];
    for(var i=0; i<array.length; i++) {
        if((array[i]%2)==1) {
            newArray.push(array[i]+1);
        }
        else {
            newArray.push(array[i]);
        };
    };
    console.log(newArray);
    return newArray;
};

var incrementTheSecondsArray = [1,3,2,9,8,10];
var incrementTheSecondsNewArray = incrementTheSeconds(incrementTheSecondsArray);

console.log("------------------------------");

// Previous Lengths
//? You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.
console.log("Previous Lengths");

function previousLengths(strArray) {
    var newArray = [];
    for(var i=0; i<strArray.length; i++) {
        if(i==0) {
            var sampleStr = strArray[strArray.length-1];
            newArray.push(sampleStr.length);
        }
        else {
            var sampleStr2 = strArray[i-1];
            newArray.push(sampleStr2.length);
        };
    };
    return newArray;
};

var previousLArray = ["zero", "one", "two", "three", "four", "five"];
var previousLNewArray = previousLengths(previousLArray);

console.log(previousLNewArray);

console.log("------------------------------");

// Add Seven to Most
//? Build a function that accepts an array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
console.log("Add Seven to Most");

function addSevenToMost(array) {
    var newArray = [];
    for(var i=0; i<array.length; i++) {
        if(i == 0) {
            newArray.push(array[i]);
        }
        else {
            newArray.push(array[i]+7);
        };
    };
    return newArray;
};

var addSevenToMostArray = [8, 2, 9, 11, 2];
var addSevenToMostNewArray = addSevenToMost(addSevenToMostArray);

console.log(addSevenToMostNewArray);

console.log("------------------------------");

// Reverse Array
//? Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].
console.log("Reverse Array");

function reverseArray(array) {
    var newArray = [];
    for(var i=(array.length-1); i>=0; i--) {
        newArray.push(array[i]);
    };
    return newArray;
};

var reverseArrayArray = [2, 9, 11, 52, -8, -2];
var reverseArrayNewArray = reverseArray(reverseArrayArray);

console.log(reverseArrayNewArray);

console.log("------------------------------");

// Outlook: Negative
//? Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
console.log("Outlook: Negative");

function outlookNegative(array) {
    var newArray = [];
    for(var i=0; i<array.length; i++) {
        if(array[i]>0) {
            newArray.push(array[i]*-1);
        }
        else {
            newArray.push(array[i]);
        };
    };
    return newArray;
};

var outlookNegativeArray = [-8, 2, 1, 99, -25];
var outlookNegativeNewArray = outlookNegative(outlookNegativeArray);

console.log(outlookNegativeNewArray);

console.log("------------------------------");

// Always Hungry
//? Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.
console.log("Always Hungry");

function alwaysHungry(array) {
    var foodCount = 0;
    for(var i=0; i<array.length; i++) {
        if(array[i] === "food") {
            console.log("yummy");
            foodCount++;
        };
    };
    if(foodCount == 0) {
        console.log("I'm hungry");
    };
};

var alwaysHungryArray = ["hello", 3, "food", true, "world", 11, "food"];
var alwaysHungryNewArray = alwaysHungry(alwaysHungryArray);

console.log("------------------------------");

// Swap Toward the Center
//? Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
console.log("Swap Toward the Center");

function swapTowardTheCenter(array) {
    var newArray = [];
    for(var i=0; i<array.length; i++) {
        switch(i) {
            case 0:
                newArray.push(array[array.length - 1]);
                break;
            case 2:
                newArray.push(array[array.length - 3]);
                break;
            case array.length-3:
                newArray.push(array[2]);
                break;
            case array.length-1:
                newArray.push(array[0]);
                break;
            default:
                newArray.push(array[i]);
        };
    };
    return newArray;
};

var swapTowardTheCenterArray = [1, 2, 3, 4, 5, 6];
var swapTowardTheCenterNewArray = swapTowardTheCenter(swapTowardTheCenterArray);

console.log(swapTowardTheCenterNewArray);

console.log("------------------------------");

// Scale the Array
//? Given array arr and number num, multiply each arr value by num, and return the changed arr.
console.log("Scale the Array");

function scaleTheArray(arr, num) {
    var newArray = [];
    for(var i=0; i<arr.length; i++) {
        newArray.push(arr[i]*num);
    };
    return newArray;
};

var scaleTheArrayArr = [2, 5, 11, 98, -7];
var scaleTheArrayNum = 3;
var scaleTheArrayNewArr = scaleTheArray(scaleTheArrayArr, scaleTheArrayNum);

console.log(scaleTheArrayNewArr);