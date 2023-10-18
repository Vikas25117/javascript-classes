console.log("javascript array chapter");

// javascript normal array section 
let ary = ["vikas", "kumar", "aboharTo", 24];
document.getElementById("javascript-array").innerHTML = ary;

// javascript empty array section  
let emptyArray = [];
emptyArray[0] = "vikas";
emptyArray[1] = "kumar";
emptyArray[2] = "kargwal";
emptyArray[3] = "vicky";
emptyArray[4] = "singh";
emptyArray[5] = "king";
document.getElementById("Javascript-empty-array").innerHTML = emptyArray;

// javascript new keyword array section 
let newArray = new Array ("first", "second", "third", "four");
document.getElementById("javascript-new-keyword-array").innerHTML = newArray;

// javascript accessing array section 
let accessingArray = ["Apple","Banana","Mango"];
// its return the arary index value like this
document.getElementById("javascript-accessing-array").innerHTML = accessingArray[2];

// javascript changing aray section 
let changingArray = [1,2,3,4,5,6];
document.getElementById("jacascript-changing-array").innerHTML = changingArray;
// array element changing value
changingArray[2] = "Hunny";
document.getElementById("jacascript-changing-array-1").innerHTML = changingArray;

// javascript converting array to string 
let jacascriptConverArray = ["hello", "bhai", "kase", "hoo"];
document.getElementById("javascript-converting-array").innerHTML = jacascriptConverArray;
// array converting to string now check it typeof 
document.getElementById("javascript-converting-array1").innerHTML = typeof jacascriptConverArray.toString() + "<br>" + jacascriptConverArray;

// javascript array lenght property section 
let arrayLength = [1,2,3,4,5,6,"hello",true];
let arrayLengthResult = arrayLength.length;
document.getElementById("javascript-array-length").innerHTML = arrayLength;
document.getElementById("javascript-array-length-result").innerHTML = arrayLengthResult;

// javascript looping array section
const javascriptLopingArray = ["vikas", "kuldeep", "sahil", "sandeep", "vashu"];
document.getElementById("javascript-loping-array").innerHTML = javascriptLopingArray;

let javascriptLopingArrayLength = javascriptLopingArray.length;
let textHtml = "<ul>";
for (let i = 0; i < javascriptLopingArrayLength; i++){
    textHtml += "<li>" + javascriptLopingArray[i] + "</li>";
}
textHtml += "</ul>";

document.getElementById("javascript-loping-array").innerHTML = textHtml;

// javascript array for each function
const people = [1,2,3,4,5,6];
let textForEach = "<ul>";
people.forEach(javascriptForEachFunction);
textForEach += "</ul>";

document.getElementById("array-for-each-function").innerHTML = textForEach;
function javascriptForEachFunction(value){
    textForEach += "<li>" + value + "</li>";
}

// javascript adding array element section 
let javascriptAddingElement = [1,2,3,4,5,];
document.getElementById("array-adding").innerHTML = javascriptAddingElement;

function javascriptAddingArray(){
    javascriptAddingElement.push(6);
    document.getElementById("array-adding").innerHTML = javascriptAddingElement;
}

// javascript associative array section 
//eske under hm object ki tra string me value de skte hai or access v kr skte hai 
const associativeArray = [];
associativeArray["firstName"] = "vikas";
associativeArray["lastName"] = "kumar";
associativeArray["age"] = 24;
document.getElementById("javascript-associative-array").innerHTML = associativeArray["lastName"];

// javascript Array.isArray() section 
let num = [1,2,3,4,5,56,];
// it's return only true and false value 
document.getElementById("javascript-is-array").innerHTML = Array.isArray(num) + "<br>" + num;

// javascript instanceof array section 
let colorsInstanceof = ["red", "pink", "blue","yellow"];
document.getElementById("javascript-instanceOf").innerHTML = colorsInstanceof instanceof Array + "<br>" + colorsInstanceof;