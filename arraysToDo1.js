// Push Front
console.log("Push Front:");

var pushFrontArray = [91, 92, 93, 94];
var pushFrontValue = 90;

console.log(pushFrontArray);
console.log(pushFrontValue);

function pushFront(givenArray, givenValue) {
    givenArray.push(givenValue);
    var i = givenArray.length-1;
    while(i > 0) {
        var temp = givenArray[i];
        givenArray[i] = givenArray[i-1];
        givenArray[i-1] = temp;
        i--;
    }
}

pushFront(pushFrontArray, pushFrontValue);

console.log(pushFrontArray);

console.log("------------------------------");

// Pop Front
console.log("Pop Front:");

var popFrontArray = [89, 90, 91, 92];

console.log(popFrontArray);

function popFront(givenArray) {
    for(var i=0; i < givenArray.length-1; i++) {
        var temp = givenArray[i];
        givenArray[i] = givenArray[i+1];
        givenArray[i+1] = temp;
    }
    return temp = givenArray.pop();
}

var popFrontValue = popFront(popFrontArray);
console.log(popFrontArray);
console.log(popFrontValue);

console.log("------------------------------");

// Insert At
console.log("Insert At:");

var insertAtArray = [90, 91, 93, 94];
var insertAtIndex = 2;
var insertAtValue = 92;

console.log(insertAtArray);
console.log(insertAtIndex);
console.log(insertAtValue);

function insertAt(givenArray, givenIndex, givenValue) {
    givenArray.push(givenValue);
    var i = givenArray.length-1;
    while(i > givenIndex) {
        var temp = givenArray[i];
        givenArray[i] = givenArray[i - 1];
        givenArray[i - 1] = temp;
        i--;
    }
    return givenArray;
}

var newInsertAtArray = insertAt(insertAtArray, insertAtIndex, insertAtValue);
console.log(newInsertAtArray);

console.log("------------------------------");