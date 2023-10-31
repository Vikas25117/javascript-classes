console.log("This is a javascript Loops section");

// javascript loops section 
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let carsResult = "";
for (let i = 0; i < cars.length; i++) {
    carsResult += cars[i] + "<br>";
};
document.getElementById("javascript-loops").innerHTML = carsResult;

// javascript for loop section
let forLoop = "";
for (let i = 0; i < 11; i++) {
    forLoop += "The number is " + i + "<br>";
};
document.getElementById("javascript-for-loop").innerHTML = forLoop;

// javascript for loop expression one defination 
let expressionOne = ["BMW", "Volvo", "Saab", "Ford"];
let iOne, len, expressionOneResult;
for (iOne = 0, len = expressionOne.length, expressionOneResult = ""; iOne < len; iOne++) {
    expressionOneResult += expressionOne[iOne] + "<br>";
}
document.getElementById("javascript-for-loop-expression-one").innerHTML = expressionOneResult;

// javascript for loop expression one defination another way
let expressionTwo = ["BMW", "Volvo", "Saab", "Ford"];
let iTwo = 0;
let expressionTwoLength = expressionTwo.length;
let expressionTwoResult = "";
for (; iTwo < expressionTwoLength; iTwo++) {
    expressionTwoResult += expressionTwo[iTwo] + "<br>"
};
document.getElementById("javascript-for-loop-expression-two").innerHTML = expressionTwoResult;

// javascript for loop expression three defination 
const carsExpressionThree = ["BMW", "Volvo", "Saab", "Ford"];
let iThree = 0;
let carsExpressionThreeLength = carsExpressionThree.length;
let carsExpressionThreeResult = "";
for (; iThree < carsExpressionThreeLength;) {
    carsExpressionThreeResult += carsExpressionThree[iThree] + "<br>";
    iThree++;
}
document.getElementById("javascript-for-loop-expression-three").innerHTML = carsExpressionThreeResult;

/** =============== javascript for in loop section =========== */
let forInLoop = {fname:"vikas", lname:"kumar", age:24};
let forInLoopText = "";
for (let forInLoopResult in forInLoop) {
    forInLoopText += forInLoop[forInLoopResult] + " ";
};
document.getElementById("javascript-for-in-loop").innerHTML = forInLoopText;

// javascript for in over array section 
let forInOver = [1,2,3,4,5,6,7,8,9];
let forInOverText = "";
for (let forInOverResult in forInOver){
    forInOverText += forInOver[forInOverResult] + "<br>";
};
document.getElementById("javascript-for-in-over-array").innerHTML = forInOverText;

// javascript loops for each method 
let loopForEach = [1,2,3,4,5,6,7,87,89];
let loopForEachText = "";
loopForEach.forEach(forEachFunction);
document.getElementById("javascript-for-each-method").innerHTML = loopForEachText;
function forEachFunction(value,index,array){
    loopForEachText += value + "<br>"
};


/** =============== javascript for of loop section =========== */

// javascript for of loop section 
let forOfLoop = [1,2,3,4,5,6];
let forOfLoopText = "";
for (let forOfLoopResult of forOfLoop) {
    forOfLoopText += forOfLoopResult + "<br>";
}
document.getElementById("javascript-for-of-loop").innerHTML = forOfLoopText;

// javascript looping over string 
let loopingOver = "vikas kumar";
let loopingOverText = "";
for (let loopingOverResult of loopingOver) {
    loopingOverText += loopingOverResult + "<br>"; 
};
document.getElementById("javascript-looping-over").innerHTML = loopingOverText;

/** =================javascript while loop section ================ */
let whileLoopText = "";
let iwhile = 0;
while (iwhile < 11) {
    whileLoopText += "<br> The number is " + iwhile;
    iwhile++;
};
document.getElementById("javascript-while-loop").innerHTML = whileLoopText;

// javascript do while loop section 
let doWhileloop = "";
let ido = 0;
do {
    doWhileloop += "<br> This number is" + ido;
    ido++;
}
while(ido < 11);
document.getElementById("javascript-do-while-loop").innerHTML = doWhileloop;

// jqavascript comparing for and while loop 
const carsForComparing = ["BMW", "Volvo", "Saab", "Ford"];
let iFor = 0;
let carsForComparingText = "";
for (; carsForComparing[iFor] ;) {
    carsForComparingText += carsForComparing[iFor] + " ";
    iFor++;
};
document.getElementById("comparing-for-loop").innerHTML = carsForComparingText;

// javascript comparing while loop section 

const carsWhileComparing = ["BMW", "Volvo", "Saab", "Ford"];
let iWhile = 0;
let carsComparingText = "";
while (carsWhileComparing[iwhile]) {
    carsForComparingText += carsWhileComparing[iwhile] + " ";
    iwhile++;
};
document.getElementById("comparing-while-loop").innerHTML = carsComparingText;