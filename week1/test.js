//1
console.log("Hello World");
console.log("Hola Mundo");
console.log("Hej Värld");
console.log("Hej Verden");
//2
console.log('I\'m awesome'); // added a "\" to correct the mistake
//3
var x;
console.log('the value of my variable x will be: test');
x = "test";
console.log(x);
//4
var y = "This is a String";
console.log('the value of my string will be: This is a String');
console.log(y);
y = "New Value of Y string"
console.log('the value of my string will be: New Value of Y string');
console.log(y);
//5
var z = 7.25;
console.log(z);
var a = Math.round(z);
var highest;
if (a > z) {
    highest = a;
} else {
    highest = z;
}
console.log(highest);
//6
var myPlaces = [];
console.log('the value of my array will be: Undefined');
console.log(myPlaces);
var myFavAnimals = ["Dogs", "Rabbits", "Horses"];
console.log(myFavAnimals);
var myFavAnmsAndDans = [myFavAnimals, "baby pig"];
console.log(myFavAnmsAndDans);
//7
let myString = "this is a test"
console.log(myString);
console.log(myString.length);
//8
let stringType = "String data type"
console.log('The value of my variable stringType is: ' + stringType);
let numberType = 50;
console.log('The value of my variable numberType is: ' + numberType);
let arrayType = [20, 40, 50, 10];
console.log('The value of my variable arrayType is: ' + arrayType);
let undefinedType;
console.log('The value of my variable undefinedType is: ' + undefinedType);
//--
console.log('The type of my variable stringType is: a String');
console.log('The type of my variable numberType is: a Number');
console.log('The type of my variable arrayType is: an Array');
console.log('The type of my variable undefinedType is: a Undefined');

let sType = typeof stringType;
let nType = typeof numberType;
let aType = typeof arrayType;
let undType = typeof undefinedType;
console.log(sType);
console.log(nType);
console.log(aType);
console.log(undType);

if (typeof sType == typeof nType) {
    console.log('SAME TYPE');
} else {
    console.log('DIFERENT TYPE')
}
if (typeof arrayType == typeof numberType) {
    console.log('SAME TYPE');
} else {
    console.log('DIFERENT TYPE')
}
if (typeof stringType == typeof undefinedType) {
    console.log('SAME TYPE');
} else {
    console.log('DIFERENT TYPE')
}
//9
console.log("The new Value of x will be 1 since % devides the value of X by 3 and the remainder of the division are now the newvalue of X");
console.log("example");
let theX = 7
theX = theX % 3;
console.log(theX);
console.log("prove");
let theY = 11
theY = theY % 3;
console.log(theY);
10//
let mixedArray = ["String", 50. [2, "array", "inside"]];

6/0 === 10/0 ? console.log("Same") : console.log(Different);

