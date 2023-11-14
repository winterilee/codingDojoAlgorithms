// Setting and Swaping
//? Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
console.log("Setting and Swapping");

var myNumber = 42;
var myName = "winter";

var temp;

temp = myNumber;
myNumber = myName;
myName = temp;

console.log(myNumber, myName);

console.log("------------------------------");

// Print -52 to 1066
//? Print integers from -52 to 1066 using a FOR loop.
console.log("Print -52 to 1066");

var printArray = [];
var printMin = -52;
var printMax = 1066;

for(var i=printMin; i<=printMax; i++){
    printArray.push(i);
};

console.log(printArray);

console.log("------------------------------");

// Don't Worry, Be Happy
//? Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
console.log("Don't Worry, Be Happy");

var sayGreeting = "good morning!";
var greetingCount = 98;

function beCheerful(count) {
    for(var i=0; i<count; i++) {
        console.log(sayGreeting);
    }
};

beCheerful(greetingCount);

console.log("------------------------------");

// Multiples of Three - but Not All
//? Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
console.log("Multiples of Three - but Not All");

var multiBy = 3;
var multiMin = -300;
var multiMax = 0;
var multSkip1 = -3;
var multiSkip2 = -6;

var multiArray = [];

for(var i=multiMin; i<=multiMax; i++) {
    if(i==multSkip1 || i==multiSkip2) {
        continue;
    }
    else if((i%multiBy)==0) {
        continue;
    }
    else {
        multiArray.push(i);
    }
};

console.log(multiArray);

console.log("------------------------------");

// Printing Integers with While
//? Print integers from 2000 to 5280, using a WHILE.
console.log("Printing Integers with While");

var printMin = 2000;
var printMax = 5280;

var printArray = [];

while(printMin <= printMax) {
    printArray.push(printMin);
    printMin++;
};

console.log(printArray);

console.log("------------------------------");

// You Say It's Your Birthday
//? If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."
console.log("You Say It's Your Birthday");

var bDayMonthArray = [];
for(var i=1; i<=12; i++) {
    bDayMonthArray.push(i);
};
var bDayDayArray = [];
for(var i=1; i<=31; i++) {
    bDayDayArray.push(i);
};

var givenBDayMonth = 1;
var givenBDayDay = 1;

function bDayCheck(monthArray, dayArray, month, day) {
    for(var i=1; i<=monthArray.length; i++) {
        if(i==month) {
            console.log("How did you know? " + i);
        }
        else {
            console.log("Just another month.... " + i);
        }
    };
    for(var i=1; i<=dayArray.length; i++) {
        if(i==day) {
            console.log("How did you know? " + i);
        }
        else {
            console.log("Just another day.... " + i);
        }
    };
}

bDayCheck(bDayMonthArray, bDayDayArray, givenBDayMonth, givenBDayDay);

console.log("------------------------------");

// Leap Year
//? Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.
console.log("Leap Year");

var givenYear = 2024;

function checkLeapYear(year) {
    if((year%4)==0 && !(year%100)==0) {
        console.log(year + " is a Leap Year");
    }
    else if((year%400)==0) {
        console.log(year + " is a Leap Year");
    }
    else {
        console.log(year + " is not a Leap Year");
    }
};

checkLeapYear(givenYear);

console.log("------------------------------");

// Print and Count
//? Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
console.log("Print and Count");

var printCBy = 5;
var printCMin = 512;
var printCMax = 4096;

var printCArray = [];
var printCount = 0;

for(var i=printCMin; i<=printCMax; i++) {
    if((i%printCBy)==0) {
        printCArray.push(i);
        printCount++;
    }
};

console.log(printCArray);
console.log("The count is " + printCount);

console.log("------------------------------");

// Multiples of Six
//? Print multiples of 6 up to 60,000, using a WHILE.
console.log("Multiples of Six");

var multiSBy = 6;
var multiSMin = 1;
var multiSMax = 60000;

var multiSArray = [];

while(multiSMin<=multiSMax) {
    if((multiSMin%multiSBy)==0) {
        multiSArray.push(multiSMin);
    }
    multiSMin++;
};

console.log(multiSArray);

console.log("------------------------------");

// Counting, the Dojo Way
//? Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
console.log("Counting, the Dojo Way");

var countDojo1 = 5;
var countDojo2 = 10;

var countDojoArray = [];

for(var i=1; i<=100; i++) {
    if((i%10)==0) {
        countDojoArray.push("Dojo");
    }
    else if((i%5)==0) {
        countDojoArray.push("Coding");
    }
    else {
        countDojoArray.push(i);
    }
};

console.log(countDojoArray);

console.log("------------------------------");

// What Do You Know?
//? Your function will be given an input parameter incoming. Please console.log this value.
console.log("What Do You Know");

var knowValue = "More than half of human bones are in hands and feet";

function whatDoYouKnow(incoming) {
    console.log(incoming);
};

whatDoYouKnow(knowValue);

console.log("------------------------------");

// Whoa, That Sucker's Huge...
//? Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
console.log("Whoa, That Sucker's Huge...");

var hugeMin = -300000;
var hugeMax = 300000;

var hugeSum = 0;

while(hugeMin<=hugeMax) {
    if((hugeMin%2)==1 || (hugeMin%2)==-1) {
        hugeSum += hugeMin;
    }
    hugeMin++
};

console.log(hugeSum);

console.log("------------------------------");

// Countdown by Fours
//? Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
console.log("Countdown by Fours");

var countdownValue = 2016;

var countdownArray = [];

while(countdownValue>0) {
    if((countdownValue%4)==0) {
        countdownArray.push(countdownValue);
    }
    countdownValue--;
};

console.log(countdownArray);

console.log("------------------------------");

// Flexible Countdown
//? Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).
console.log("Flexible Countdown");

var flexLowNum = 2;
var flexHighNum = 9;
var flexMult = 3;
var flexArray = [2,9,3];

function flexibleCountdown(lowNum, highNum, mult, array) {
    var newLowNum = null;
    var newHighNum = null;
    var newArray = [];
    for(var i=0; i<array.length; i++) {
        if(array[i]<lowNum) {
            continue;
        }
        else if(array[i]>highNum) {
            continue;
        }        
        else if(newLowNum == null) {
            newLowNum = array[i];
        }
        else if(newHighNum == null) {
            newHighNum = array[i];
        }
        else if(array[i]<newLowNum) {
            newLowNum = array[i];
        }
        else if(array[i]>newHighNum) {
            newHighNum = array[i];
        }
    }
    for(var j=newLowNum; j<=newHighNum; j++) {
        if((j%mult)==0) {
            newArray.push(j);
        }
    }
    newArray.sort(function(a,b){return b-a});
    return newArray;
}

var printArray = flexibleCountdown(flexLowNum, flexHighNum, flexMult, flexArray);
console.log(printArray);

console.log("------------------------------");

// The Final Countdown
//? This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).
console.log("The Final Countdown");

var finalMult = 3;
var finalMin = 5;
var finalMax = 17;
var finalSkip = 9;

function finalCountdown(mult, min, max, skip) {
    var newArray = [];
    for(var i=min; i<=max; i++) {
        if(i==skip) {
            continue;
        }
        else if((i%mult)==0) {
            newArray.push(i);
        }
    }
    return newArray;
};

var finalArray = finalCountdown(finalMult, finalMin, finalMax, finalSkip);
console.log(finalArray);

console.log("------------------------------");