console.log("<i>This is a data type section</i>");
// java script string section
let stringOne = "It's alright";
let stringTwo = "Hello 'Vikas'";
let stringThree = 'Hello "Vicky"';

document.getElementById("string").innerHTML = stringOne + "<br>" + stringTwo + "<br>" + stringThree;

// jaca script number section 

let number = 123;
let numberOne = 123.45;
let numberTwo = 1.234;

document.getElementById("number").innerHTML = number + "<br>" + numberOne + "<br>" + numberTwo;

// javascript number (Exponential Notation) section 

let ExponentialNotation = 123e5;
let ExponentialNotationOne = 123e-5;

document.getElementById("number-notation").innerHTML = ExponentialNotation + "<br>" + ExponentialNotationOne;

// javascrit Booleans section 

let booleansOne = 2;
let booleansTwo = 4;
let booleansThree = 2;

document.getElementById("booleans").innerHTML = (booleansOne == booleansTwo) + "<br>" + (booleansOne == booleansThree);

// javascript array section 

const car = ["BMW", "Rang Rover", "Swift", "Brezza", "Mustang"];

// esme hm jitne chae otne hi index number nikal skte hai
document.getElementById("array").innerHTML = car[0] + "<br>" + car[3] + "<br>" + car[4];

// javascript object section 

const person = {
    firstName: "vikas",
    lastName: "kumar",
    age: 24,
    eyeColor: "red"
}
/* esme object ki value print krwane k lye hme variabel ko sath me likhna peraga jase ki niche likha hai person.firstName like this */
document.getElementById("object").innerHTML = person.firstName + " " + person.lastName + " " + person.age + " " + "year old";

// javascript typeof section 
document.getElementById("typeof").innerHTML = typeof "" + "<br>" + typeof "vikas" + "<br>" + typeof "kumar";

document.getElementById("typeofone").innerHTML = typeof 3 + "<br>" + typeof 123 + "<br>" + typeof 23.23 + "<br>" + typeof (3) + "<br>" + typeof (2 + 2);

// javascript empty values section
let carOne = " ";
document.getElementById("empty-values").innerHTML = "The value is " + carOne + "<br>" + "The type is: " + typeof carOne;

// javascript date section

const datem = new Date();
document.getElementById("date-section").innerHTML = datem;

const dateSection = new Date();
document.getElementById("date-section-2").innerHTML = dateSection;

