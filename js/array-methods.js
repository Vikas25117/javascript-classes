console.log("This is a Array Methods chapter");
// javascript array length section 
let arrayLength = ["vikas", "kumar", "kargwal", "dangar khera"];
let arrayLengthResult = arrayLength.length;
document.getElementById("javascript-array-lenght").innerHTML = arrayLengthResult;

// javascript array convert to string toString section 
let arrayToString = ["hello ", "bhai ", "yeh ", "array se ", "string me ", "change ho ", "gya hai "];
let arrayToStringConvert = arrayToString.toString();
document.getElementById("javascript-array-string").innerHTML = typeof arrayToStringConvert + " <br>" + arrayToStringConvert;

// javascript array toJoin methods section 
let arrayToJion = ["muj ", "me value ", "add kro ", "plus icon ", " "];
// ===========Note:- after add join methods your array convert the string ============
let arrayToJionResult = arrayToJion.join(" + ");
document.getElementById("array-join-methods").innerHTML = typeof arrayToJionResult + "<br>" + arrayToJionResult;

// javascript pop aray methods section 
let arrayPop = ["muj me ", "se last ", "value remove ", "kr doo ", "vikas"];
document.getElementById("array-pop").innerHTML = arrayPop;
let arrayPopResult = arrayPop.pop();
// now i have cut the last array "vikas"
document.getElementById("array-pop-result").innerHTML = arrayPop;

// javascript array push methods section 
let arrayPush = ["muj", "me", "end", "me", "value", "push", "kr", "doo"];
document.getElementById("arary-push").innerHTML = arrayPush;
let arrayPushResult = arrayPush.push("vikas add ho gya hai ab");
document.getElementById("arary-push-result").innerHTML = arrayPush;

// javascript array shift section 
let arrayShift = ["mera first ", "array remove ", "kr doo"];
document.getElementById("array-shift").innerHTML = arrayShift;
let arrayShiftResult = arrayShift.shift();
document.getElementById("array-shift-result").innerHTML = arrayShift;

// javascript unshift array methods section 
let arrayUnshift = ["muj me ", " first me ", "value ko ", "add kro "];
document.getElementById("array-unshift").innerHTML = arrayUnshift;
let arrayUnshiftResult = arrayUnshift.unshift("vikas");
document.getElementById("array-unshift-result").innerHTML = arrayUnshift;

// javascript delete array methods sectionn 
let arrayDelte = ["mera koi ", "v array ", "delete kr ", "doo ", "vikas "];
document.getElementById("array-delete").innerHTML = arrayDelte;
let arrayDelteResult = delete arrayDelte[4];
// when i print the [4] index number than return the undefinded result because delete array not the permanently delete array it's delete the value not a position 
document.getElementById("array-delete-result").innerHTML = arrayDelte;

// javascript concatenating array methods section 
let arrayConcatenating = ["muj me ", "koi array ", "add kro ", "vikas "];
let arrayConcatenatingAdd = ["ok bhai ", "ma add ", "ho gya ", "hu abi "];
let arrayConcatenatingAddOne = ["ma apne ", "sath one ", "array or ", "add kr ", "reha hu yrr ok"];
document.getElementById("array-concatenating").innerHTML = arrayConcatenating;
let arrayConcatenatingResult = arrayConcatenating.concat(arrayConcatenatingAdd, arrayConcatenatingAddOne);
document.getElementById("array-concatenating-result").innerHTML = arrayConcatenatingResult;

// javascript flat array methods section 
// this is a nested array 
let arrayFlat = [[1, 2], [3, 4], [5, 6], [7, 8]];
let arrayFlatResult = arrayFlat.flat();
// it's return the one set array [3,4]
// document.getElementById("array-flat").innerHTML = arrayFlat[2];
// its return the two number index (3)
document.getElementById("array-flat").innerHTML = arrayFlatResult[2];

// javascript splice array methods section 
let arraySplice = ["vikas ", "kumar ", "Abohar to "];
document.getElementById("array-splice").innerHTML = arraySplice;
// 2 define where to start, 0 define how many values remove and "kargwal" add new array value when you define start
let arraySpliceResult = arraySplice.splice(2, 0, "kargwal");
document.getElementById("array-splice-result").innerHTML = arraySplice;

// javascript array slice methods section 
let arraySlice = ["one ", "two ", "three ", "four ", "five"];
document.getElementById("array-slice").innerHTML = arraySlice;
let arraySliceResult = arraySlice.slice(1, 3);
// 1 is define where to start accounting array and 3 is define where to stop aray but 3 is not counting 
document.getElementById("array-slice-result").innerHTML = arraySliceResult;


/* ============= JAVASCRIPT SORTING ARRAY SECTION ================ */
const Fruits = ["Banana", "Apple", "Kiwi", "Mango", "Chiku"];
document.getElementById("array-sorting").innerHTML = Fruits;

const FruitsSorting = Fruits.sort();
document.getElementById("array-sorting-one").innerHTML = FruitsSorting;

// javascript reverse sorting array methods
const FruitsReverse = ["Banana", "Apple", "Kiwi", "Mango", "Chiku", "DraganFruit"];
document.getElementById("array-sorting-reverse").innerHTML = FruitsReverse;
FruitsReverse.sort(); //first sort the array
FruitsReverse.reverse(); // reverse the array now
document.getElementById("array-sorting-reverse-one").innerHTML = FruitsReverse;

// javascript numric sorting array section 
const numaricSorting = [1, 3, 5, 8, 7, 12, 14, 6, 2];
document.getElementById("array-sorting-numaric").innerHTML = numaricSorting;
numaricSorting.sort(function (a, b) { return a - b });

// it will print the highest to lowest number 
/*numaricSorting.sort(function(a,b){return b - a});*/
document.getElementById("array-sorting-numaric-one").innerHTML = numaricSorting;

// javascript compare function in array sorting section 
const sortingCompareFunction = [1, 3, 5, 8, 7, 12, 14, 6, 2];
document.getElementById("javascript-compare-function-array-sorting").innerHTML = sortingCompareFunction;

function sortingAlphabetically() {
    sortingCompareFunction.sort();
    document.getElementById("javascript-compare-function-array-sorting").innerHTML = sortingCompareFunction;
}
function sortingNumerically() {
    sortingCompareFunction.sort(function (a, b) { return a - b });
    document.getElementById("javascript-compare-function-array-sorting-one").innerHTML = sortingCompareFunction;
}

// javascript random methods in array sorting 
const randomSorting = [1, 3, 5, 8, 7, 12, 14, 6, 2];
document.getElementById("javascript-random-sorting").innerHTML = randomSorting;
function randomMethods() {
    randomSorting.sort(function () { return 0.5 - Math.random() });
    document.getElementById("javascript-random-sorting").innerHTML = randomSorting;
}

// javascript find the lowest and highest value in array sorting methods 
const valueFindingSorting = [1, 3, 5, 8, 7, 12, 14, 6, 2];
document.getElementById("javascript-sorting-array-find-values").innerHTML = valueFindingSorting;

valueFindingSorting.sort(function (a, b) { return a - b });
document.getElementById("javascript-sorting-array-find-values").innerHTML = "The lowest value is :- " + valueFindingSorting[0];

// heighest value find krne k lye hm function me b-a type krege to value print ho jaygi or variable k index me hm [0] likhege 
/*valueFindingSorting.sort(function(a, b){return b - a});
document.getElementById("javascript-sorting-array-find-values").innerHTML = "The Highest value is :- " + valueFindingSorting[0];*/

// javascript sorting object array section 
const carsName = [
    { type: "volvo", year: 2016 },
    { type: "maruti", year: 2001 },
    { type: "bmw", year: 2003 }
];
carsName.sort(function (a, b) { return a.year - b.year });
function dispalyCars() {
    document.getElementById("javascript-sorting-object-array").innerHTML =
        carsName[0].type + " " + carsName[0].year + "<br>" +
        carsName[1].type + " " + carsName[1].year + "<br>" +
        carsName[2].type + " " + carsName[2].year;
};
dispalyCars();

/* ============= JAVASCRIPT forEach ARRAY SECTION ================ */
const forEachNumbers = [1, 3, 5, 8, 7, 12, 14, 6, 2];
let forEachNumbersResult = "";
// forEachNumbers.sort(function(a,b){return a - b}); //esme hamne aray ko sort kiya hai eska forEach function me specially work nhi hai

forEachNumbers.forEach(forEachFunction);
document.getElementById("javascript-forEach-array").innerHTML = forEachNumbersResult;

function forEachFunction(value, index, array) { //esme jo value,index,array ko hi likhna jaruri nhi hai hm yha per jo marji likh skte hai bs en paramatter ka work pta hona chaiye
    forEachNumbersResult += value + "<br>";
}

// javascript array map methodsm 
const arrayMap = [1, 3, 5, 8, 7, 12, 14, 6, 2];
const arrayMapResult = arrayMap.map(arrayMapFunction);
document.getElementById("javascript-array-map").innerHTML = arrayMapResult;
function arrayMapFunction(value, index, array) {
    return value * 2;
}

// javascript array filter methods 
const arrayFilter = [1, 3, 5, 8, 7, 12, 14, 6, 2];
const arrayFilterResult = arrayFilter.filter(arrayFilterFunction);
document.getElementById("javascript-array-filter").innerHTML = arrayFilterResult;
function arrayFilterFunction(value, index, array) {
    return value > 5;
}

// javascript array reduce methods 
const arrayReduce = [1, 3, 5, 8, 7, 12, 14, 6, 2];
let arrayReduceSum = arrayReduce.reduce(arrayReduceRightFunction);
function arrayReduceFunction(total, value, index, array) {
    return total + value
}
// yeh hamne niche function ko sort kr k likha hai dono hi concept same hai 
// let arrayReduceSum = arrayReduce.reduce((total,value) => {return total + value});
document.getElementById("javascript-reduce-array").innerHTML = arrayReduceSum;

// javascript array reduceRight methods 
const arrayReduceRight = [1, 3, 5, 8, 7, 12, 14, 6, 2, 4, , 8];
let arrayReduceRightSum = arrayReduceRight.reduceRight(arrayReduceRightFunction);
function arrayReduceRightFunction(total, value, index, array) {
    return total + value
}
// yeh hamne niche function ko sort kr k likha hai dono hi concept same hai 
// let arrayReduceRightSum = arrayReduceRight.reduceRight((total,value) => {return total + value});
document.getElementById("javascript-reduceRight-array").innerHTML = arrayReduceRightSum;

// javascript every array methods 
const everyArray = [1, 3, 5, 8, 7, 12, 14, 6, 2];
let everyArrayResult = everyArray.every(everyArrayFunction);
document.getElementById("javascript-every-array-method").innerHTML = "The result is " + everyArrayResult + " because value is not biggest the 18";
function everyArrayFunction(value) {
    return value > 18;
}

// javascript some array methods 
const someArray = [1, 3, 5, 8, 7, 12, 14, 6, 2];
let someArrayResult = someArray.some(someArrayFunction);
document.getElementById("javascript-some-array-method").innerHTML = "The result is " + someArrayResult + " because value is biggest the 3";
function someArrayFunction(value) {
    return value > 3;
}

// javascript array indexOf methods 
const araryIndexOf = ["Apple", "Orange", "Apple", "Mango"];
let araryIndexOfResult = araryIndexOf.indexOf("Apple") + 1;
document.getElementById("javascript-array-indexOf").innerHTML = araryIndexOfResult;

// javascript lastIndexOf array method 
const arraylastIndexOf = ["Apple", "Orange", "Apple", "Mango"];
let arraylastIndexOfResult = araryIndexOf.lastIndexOf("Apple") + 1;
document.getElementById("javascript-lastIndexOf-array").innerHTML = arraylastIndexOfResult;

// javascript find array method 
const arrayFind = [1, 3, 5, 8, 7, 12, 14, 6, 2];
let arrayFindResult = arrayFind.find(arrayFindFunction);
document.getElementById("javascript-find-arrray").innerHTML = "Find number is " + arrayFindResult;
function arrayFindFunction(value, index, array) {
    return value > 12;
}

// javascript findIndex array method
const FindIndexArray = [1, 3, 5, 8, 7, 12, 14, 6, 2];
let FindIndexArrayResult = FindIndexArray.findIndex(FindIndexArrayFunction);
document.getElementById("javascript-findIndex-array").innerHTML = FindIndexArrayResult;
function FindIndexArrayFunction(value, index, array) {
    return value > 12;
}

// javascript Array.from array method 
var arrayFrom = "ABCDEFG";
let arrayFromResult = Array.from(arrayFrom);
document.getElementById("javascript-Array-from").innerHTML = arrayFromResult;   