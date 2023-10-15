// Remove Blanks
console.log("Remove Blanks:");

var removeBlanksString = "pi ne App le";

console.log(removeBlanksString);

function removeBlanks(givenString) {
    var sampleArray = givenString.split(" ");
    return sampleArray.join("");
};

console.log(removeBlanks(removeBlanksString));

console.log("------------------------------");

// Get Digits
console.log("Get Digits");

var getDigitsString = "he110 w0r1d";

console.log(getDigitsString);

function getDigits(givenString) {
    var sampleArray = givenString.split("");
    var newArray = [];
    for(var i=0; i < sampleArray.length; i++) {
        if(!isNaN(sampleArray[i])){
            newArray.push(sampleArray[i]);
        }
    }
    return newArray.join("");
}

console.log(getDigits(getDigitsString));

console.log("------------------------------");

// Acronyms
console.log("Acronyms:");

var acronymsString = "fruit salad";

console.log(acronymsString);

function acronyms(givenString) {
    var sampleArray = givenString.split(" ");
    var newArray = [];
    for(var i=0; i<sampleArray.length; i++) {
        var temp = sampleArray[i].split("");
        if(isNaN(temp[0])) {
            newArray.push(temp[0]);
        }
    }
    return newArray.join("");
}

console.log(acronyms(acronymsString).toUpperCase());

console.log("------------------------------");

// Count Non-Spaces
console.log("Count Non-Spaces:");

var countNonSpacesString = "blueberry muffin";

console.log(countNonSpacesString);

function countNonSpaces(givenString) {
    var sampleArray = givenString.split("");
    var sampleCount = 0;
    for(var i=0; i<sampleArray.length; i++) {
        if(sampleArray[i] != " ") {
            sampleCount++;
        }
    }
    return sampleCount;
}

console.log(countNonSpaces(countNonSpacesString));

console.log("------------------------------");

// Remove Shorter Strings
console.log("Remove Shorter Strings:");

var removeShorterStringsString = "the fruit cake recipe";
var removeShorterStringsValue = 4;

console.log(removeShorterStringsString);
console.log(removeShorterStringsValue);

function removeShorterStrings(givenString, givenValue) {
    var sampleArray = givenString.split(" ");
    var newArray = [];
    for(var i=0; i<sampleArray.length; i++) {
        if(sampleArray[i].length >= givenValue) {
            newArray.push(sampleArray[i]);
        }
    }
    return newArray.join(" ");
}

console.log(removeShorterStrings(removeShorterStringsString, removeShorterStringsValue));

console.log("------------------------------");