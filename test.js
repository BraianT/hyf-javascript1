console.log("Hola Mundo");
console.log("Hello World!");//1

console.log("I'm awesome"); //2. quotation marks

var x; //3.1
console.log("The vslue of x will be: String Test");//3.2

console.log(x); //3.3

x = "String Test";
console.log(x);


var y = "New String fourth excercise";
console.log("The value will be: New String fourth excercise");

//#7
let myString = "this is a test";
console.log(myString);

//#8
let foo = 3;
console.log('The value of my variable foo is: ' + foo);

var aString = "String";
var aNumber = "4";
var anArray = ["Array String", 10, 20];

console.log(typeof aString);
console.log(typeof aNumber);
console.log(typeof anArray);

//-----------------

let myObj = {
    propEng: "Hello",
    propSwe: "hej"

};
const prop1 = "hola";
let prop2 = prop1;
const myObj2 = Object.assign({}, myObj); //makes a copy of the elements of myObj

myObj.propEng = "hi";
prop2 = "salut";

console.log(myObj2);
console.log(myObj);

//----
//Arrays

const myArray = [
    "Hello",
    "Hej",
];

const myArray2 = myArray;
myArray2[myArray.length] = "tjiena";

console.log(myArray);