// Only Keep the Last Few
//? Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount. Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.
console.log("Only Keep the Last Few");

function onlyKeepTheLastFew(arr, x) {
    var newArray = [];
    var newNum = x;
    for(var i=(arr.length-1); i>=0; i--) {
        if(newNum>0) {
            newArray.unshift(arr[i]);
        };
        newNum--;
    };
    return newArray;
};

var onlyKeepTheLastFewArr = [1,2,3,4,5,6];
var onlyKeepTheLastFewNum = 3;
var onlyKeepTheLastFewNewArr = onlyKeepTheLastFew(onlyKeepTheLastFewArr, onlyKeepTheLastFewNum);

console.log(onlyKeepTheLastFewNewArr);

console.log("------------------------------");

// Math Help
//? Cartman doesn’t really like math; he needs help. You are given two numbers – coefficients M and B in the equation Y = MX + B. Build a function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; Cartman just snorts in his general direction).
console.log("Math Help");

function mathHelp(m, b) {
    var newNum = (0-b)/m;
    return newNum;
};

var mathHelpM = 2;
var mathHelpB = 3;
var mathHelpX = mathHelp(mathHelpM, mathHelpB);

console.log(mathHelpX);

console.log("------------------------------");

// Poor Kenny
//? Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome.
console.log("Poor Kenny");

function whatHappensToday() {
    var newEvent = Math.floor(Math.random()*100)+1;
    switch(true) {
        case (newEvent<=10): 
            console.log("Volcanos");
            break;
        case (newEvent<=25 && newEvent>10):
            console.log("Tsunamis");
            break;
        case (newEvent<=45 && newEvent>25):
            console.log("Earthquakes");
            break;
        case (newEvent<=70 && newEvent>45):
            console.log("Blizzards");
            break;
        case (newEvent<=100 && newEvent>70):
            console.log("Meteors");
            break;
    };
};

whatHappensToday();

console.log("------------------------------");

// What Really Happened?
//? Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently, instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none. Maybe Kenny will survive!
console.log("What Really Happened?");

function checkWeather(num) {
    var newEvent = Math.floor(Math.random() * 100) + 1;
    if(newEvent<=num) {
        return true;
    }
    else {
        return false;
    };
};

function printTrue(val, str) {
    if(val === true) {
        console.log(str);
    };
};

function whatReallyHappensToday() {
    var newVolcanos = checkWeather(10);
    var newTsunamis = checkWeather(15);
    var newEarthquakes = checkWeather(20);
    var newBlizzards = checkWeather(25);
    var newMeteors = checkWeather(30);

    // console.log(newVolcanos);
    // console.log(newTsunamis);
    // console.log(newEarthquakes);
    // console.log(newBlizzards);
    // console.log(newMeteors);

    printTrue(newVolcanos, "Volcano");
    printTrue(newTsunamis, "Tsunamis");
    printTrue(newEarthquakes, "Earthquakes");
    printTrue(newBlizzards, "Blizzards");
    printTrue(newMeteors, "Meteors");

    if(newVolcanos === false && newTsunamis === false && newEarthquakes === false && newBlizzards === false && newMeteors === false) {
        console.log("Clear");
    }

};

whatReallyHappensToday();

console.log("------------------------------");

// Soaring IQ
//? Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ?
console.log("Soaring IQ");

function soaringIQ(baseIQ, days) {
    var newIQ = baseIQ;
    for(var i=1; i<=days; i++) {
        newIQ += (i/100);
    };
    return newIQ;
};

var soaringIQBase = 101;
var soaringIQDays = 98;

var soaringIQNew = soaringIQ(soaringIQBase, soaringIQDays);

console.log(soaringIQNew);

console.log("------------------------------");

// Letter Grade
//? Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".
console.log("Letter Grade");

function letterGrade(num) {
    var score = num;
    var grade;
    switch(true) {
        case(score>=90):
        grade = "A";
        break;
        case(score>=80 && score<90):
        grade = "B";
        break;
        case(score>=80 && score<90):
        grade = "B";
        break;
        case(score>=70 && score<80):
        grade = "C";
        break;
        case(score>=60 && score<70):
        grade = "D";
        break;
        case(score<60):
        grade = "F";
        break;
    };
    console.log("Scores: " + score + ". Grade: " + grade + ".");
};

var letterGradeNum = 86;

letterGrade(letterGradeNum);

console.log("------------------------------");

// More Accurate Grades
//? For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .
console.log("More Accurate Grades");

function moreAccurateGrades(num) {
    var score = num;
    var grade;
    switch (true) {
        case score > 92:
            grade = "A";
            break;
        case score >= 90 && score <= 92:
            grade = "A-";
            break;
        case score >= 88 && score < 90:
            grade = "B+";
            break;
        case score > 82 && score < 88:
            grade = "B";
            break;
        case score >= 80 && score <= 82:
            grade = "B-";
            break;
        case score >= 78 && score < 80:
            grade = "C+";
            break;
        case score > 72 && score < 78:
            grade = "C";
            break;
        case score >= 70 && score <= 72:
            grade = "C-";
            break;
        case score >= 68 && score < 70:
            grade = "D+";
            break;
        case score > 62 && score < 68:
            grade = "D";
            break;
        case score >= 60 && score <= 62:
            grade = "D-";
            break;
        case score < 60:
            grade = "F";
            break;
    };
    console.log("Scores: " + score + ". Grade: " + grade + ".");
};

var moreAccurateGradesNum = 91;

moreAccurateGrades(moreAccurateGradesNum);