console.log("This is a javascript Function section ");
// javascript function one addition
let functionA = functionOne(2, 3);
document.getElementById("function-one").innerHTML = functionA;

function functionOne(a, b) {
    return a + b;
}

// javascript substraction (-) function 

let functionB = functionSubstraction(10, 2);
document.getElementById("function-substraction").innerHTML = functionB;

function functionSubstraction(a, b) {
    return a - b;
}

// javascript multiplication (*) function
let c = 90;
/*
esme mane variabel banaya hai c jski value hai 90 or mane c ko print kiya hai function me or jo niche function me functionMultiplication(a,b) yeh likha hua hai to esme b ki value c k equal ho gyi hia jo ki 90 thi to ab a * b ka answer 900 ayega 
 */
let functionC = functionMultiplication(10, c);
document.getElementById("function-multiplication").innerHTML = functionC;

function functionMultiplication(a, b) {
    return a * b;
}

// javascript exponentiation (**) function
let functionD = functionExponentiation(5, 3);
document.getElementById("function-exponentiation").innerHTML = functionD;

function functionExponentiation(a, b) {
    return a ** b;
}

// javascript division (/) function 
let functionE = functionDivision(10, 5);
document.getElementById("function-division").innerHTML = functionE;

function functionDivision(a, b) {
    return a / b;
}

// javascript modulus (%) function 
let functionF = functionModulus(10, 3);
document.getElementById("function-modulus").innerHTML = functionF;

function functionModulus(a, b) {
    return a % b;
}

// javascript increment (++) function
let functionG = functionIncrement(10);
document.getElementById("function-increment").innerHTML = functionG;

function functionIncrement(a) {
    // a++;
    return ++a;
}

// javascript assignment (=) opreater function 
let functionH = functionAssignment(10, 4);
document.getElementById("function-assignment").innerHTML = functionH;

function functionAssignment(a, b) {
    return a = b;
    // hm esko sb trika se likh skte hai 
    // return (10 + a) + b;
    // return 10 + b;
}

// addition assignment opreater (+=) function 
let functionI = functionAdditionAssignment(10, 2);
document.getElementById("addition-assignment-function").innerHTML = functionI;

function functionAdditionAssignment(a, b) {
    // return a += b + 10;
    // return a += 5;
    return a += b;

    /* es trike se hm function k under b variabel decleare kr skte hai */
    // var vicky = 10;
    // vicky++;
    // return vicky;
}

// javascript substraction assignment function (-=) 
let functionJ = functionSubstractionAssignment(10, 2);
document.getElementById("substraction-assignment-function").innerHTML = functionJ;

function functionSubstractionAssignment(a, b) {
    return a -= b;
}

// javascript multiplication assignment opreater (*=)
let functionK = functionMultiplicationAssignment(10, 2);
document.getElementById("multiplication-assignment-function").innerHTML = functionK;

function functionMultiplicationAssignment(a, b) {
    return a *= b;
    // return (10 + 10) * a;
}
/* yha hamne id or function ko print kiya hai jo ki hamne pehale hi define kiye hue tha  */
// document.getElementById("vikas").innerHTML = functionK;
// document.write(functionMultiplicationAssignment(10,2));

// javascript exponetiation assignment opreater (**=)
let functionL = functionExponentiationAssignment(10, 2);
document.getElementById("exponentiation-assignment-function").innerHTML = functionL;

function functionExponentiationAssignment(a, b) {
    return a **= b
    // return (10 + 10) ** b;
}

// javascript division assignment opreater function (/=)
let functionM = functionDivisionAssignment(10, 2);
document.getElementById("division-assignment-function").innerHTML = functionM;

function functionDivisionAssignment(a, b) {
    return a /= b;
    // return (10 + 20) / b;
}

// javascript remainder assignment opreater (%=) function
let functionN = functionRemainderAssignment(10, 3);
document.getElementById("remainder-assignment-function").innerHTML = functionN;

function functionRemainderAssignment(a, b) {
    return a % b;
    // return (10 + 20) / b;
}

// javascript logical AND assignment opreater (&&=) function
/**
 agar ma esme yha (false,2) false likh deta hu to mare first value print ho jaygi agr mare firsst value true (10,2) hai to mare second value print hogi 
 */
//  If the first value is true, the second value is assigned.
let functionO = functionLogicalAndAssiganmentFunction(10, 2);
document.getElementById("logical-and-assignment-function").innerHTML = functionO;

function functionLogicalAndAssiganmentFunction(a, b) {
    return a &&= b;
}

// javascript logical OR assignment opreater (||=) function
// If the first value is false, the second value is assigned.
let functionP = functionLogicalOrAssignment(false, 4);
document.getElementById("logical-OR-assignment-function").innerHTML = functionP;

function functionLogicalOrAssignment(a, b) {
    return a ||= b;
}

// javascript nullish coalescing assignment opreater (??=)
// If the first value is undefined or null, the second value is assigned.
let functionQ = functionNullishCoalescing(null, 10);
document.getElementById("Nullish-coalescing-function").innerHTML = functionQ;

function functionNullishCoalescing(a, b) {
    return a ??= b;
}

// javascript function original seciton 
let functionR = functionApple(10);
document.getElementById("javascript-function").innerHTML = functionR;

function functionApple(a) {
    return (10 / 2) * (a - 2);
}

// javascript function two
let functionS = functionIncorrect();
document.getElementById("javascript-function-one").innerHTML = functionS;

function functionIncorrect(a) {
    return (10 / 2) * (a + 5);
}

// javascript function three
let functionT = functionWithoutOpreater;
// esme  mane function ko opreater se define nhi kiya hai () es trike se 
document.getElementById("javascript-function-two").innerHTML = functionT;

function functionWithoutOpreater(a) {
    return (10 / 2) * (a + 2 );
}

// javascript Using a function as a variable section
// esko hm dono concepet se use kr skte hai variabel bna kr osko print krwa skte hai nhi to direct function ko hi call krwa skte hai variabels me 
/*let functionU = functionWithVariable(10);
document.getElementById("function-use-variable").innerHTML = functionU;

function functionWithVariable(a){
    return (10 / 2) * (12 + 2);
}*/

let functionU = `javascript Using a function as a variable section ${functionWithVariable(10)} javascript functions`;
document.getElementById("function-use-variable").innerHTML = functionU;

function functionWithVariable(a) {
    return (10 + 10) * (a - 5);
}

// javadcript locial function start
/**
 javascript locial function me variables ka aps me link nhi hota same name k variables function k bahar v define kr skte hai or function k under v output dono ka diffrent hoga 
 */
// let carName = 120;
let result = `Undefine variable value and type of  ${typeof carName}`;

// hm variable ko backticks (``) me dono concepect se likh skte hai auper likhe idea se v or niche likhe ideas se v 

// let result = `Undefine variable value and type of  ${typeof carName + " " + carName}`;
document.getElementById("javascript-locial-function").innerHTML = result;

function locialFunction(){
    let carName = "BMW";
    let result = `Same variable declare inside the function but they work defrentely ${ typeof carName + " " + carName}`;
    document.getElementById("javascript-locial-function-one").innerHTML = result;
}

locialFunction();

/* ========== javascript function and parametter ( you tube video chai aur code ) ========== */
function loginUserMessage(username){
    return `${username} just loggied in`
}
console.log(loginUserMessage(" vikas kumar "));

// function with object and array in javascript
function calculaterCardPrice(val1, val2, ...num1){
    // ...num1 esko rest opreater bola jata  hai yeh function me jitne v values hai on sbko array me band krke de deta hai
    // return num1 + val1 + val2
    return num1
}

console.log(calculaterCardPrice(200,1000,500,50));

// object javascript section
const user  = {
    userName: "vikas kumar",
    price: 199
};

function userHandler(anyObject){
    console.log(`user name is ${anyObject.userName} and price is ${anyObject.price}`);
}
// userHandler(user);

// direct call the object
userHandler({
    userName: "vicky",
    price: 399
});

// array javascript section

const myNewArray = [100,200,300,400,500];

function returnSeconderyValue(getAarray){
    return getAarray[1];
};
console.log(returnSeconderyValue(myNewArray));
// esko dono hi concept se kr skte hai hm 
// console.log(returnSeconderyValue([200,600,800,700]));

// global and local scope in javascript section
let one = "vicky";
var two = "singh";
const three = "shaayar_punjabi";

// console.log(one);
// console.log(two);
// console.log(three);

if(true){
    let one = "vikas";
    var two = "kargwal";
    const three = "kumar";
    console.log("inner let value scope lavel", one);
}
// esme var ne apni dusri value ka out put diya jo ki kargwal hai per kargwal wala var scope lavel me hai jo ki bahar wale var me print nhi hona tha esi wja se hm var ka use nhi krte javascript me 
// console.log(two);
console.log(one);

/* javascript function with parameters yahoo baba video */
/*
function hello(fName,lName){
    document.getElementById("javascript-function-yahoo-baba").innerHTML = "Hello" + " " + fName + " " + lName;
}
hello("vikas","kumar");
*/

//  hm javascript me default parameters v de skte hai let'see below
function hello(fName = "vikas", lName = "kumar"){
    document.getElementById("javascript-function-yahoo-baba").innerHTML = "Hello" + " " + fName + " " + lName + "<br>";
}
hello();
// hm function ko again se argument de skte hai like this below
hello("kuldeep","vashu");
// hello("v","k");

// javascript function with return value
function fullName(fName = "vikas", lName = "kumar"){
    var a = fName + " " + lName;
    return a;
}
let fn = fullName("vicky","singh"); 
document.write(fn);