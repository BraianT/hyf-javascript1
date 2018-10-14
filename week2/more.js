//1
function myFunction(a, b, c) {
    console.log(a + b + c);
}
myFunction(10, 20, 30);
//2
function colorCar(color) {
    console.log("a " + color + " car");
}
colorCar("blue");
//3
var myObject = [20, "apple", "orange"];
function printObject(x) {
    console.log(x);
}
printObject(myObject);
//4
function vehicleType(color, code) {
    if (code == 1) {
        console.log(color + " car.");
    }
    else if(code == 2) {
        console.log(color + " motorbike.")
    }
    else {
        console.log("Not a valid value")
    }
}
vehicleType("blue", 2);
//5
3 === 3 ? console.log("yes") : console.log("no");
//6
