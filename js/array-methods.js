console.log("This is a Array Methods chapter");
// javascript array length section 
let arrayLength = ["vikas","kumar","kargwal","dangar khera"];
let arrayLengthResult = arrayLength.length;
document.getElementById("javascript-array-lenght").innerHTML = arrayLengthResult;

// javascript array convert to string toString section 
let arrayToString = ["hello ","bhai ","yeh ","array se ","string me ","change ho ","gya hai "];
let arrayToStringConvert = arrayToString.toString();
document.getElementById("javascript-array-string").innerHTML = typeof arrayToStringConvert + " <br>" + arrayToStringConvert;

// javascript array toJoin methods section 
let arrayToJion = ["muj ","me value ", "add kro ","plus icon "," "];
// ===========Note:- after add join methods your array convert the string ============
let arrayToJionResult = arrayToJion.join(" + ");
document.getElementById("array-join-methods").innerHTML =  typeof arrayToJionResult + "<br>" + arrayToJionResult;

// javascript pop aray methods section 
let arrayPop = ["muj me ", "se last ", "value remove ", "kr doo ","vikas"];
document.getElementById("array-pop").innerHTML = arrayPop;
let arrayPopResult = arrayPop.pop();
// now i have cut the last array "vikas"
document.getElementById("array-pop-result").innerHTML = arrayPop;

// javascript array push methods section 
let arrayPush = ["muj", "me", "end" ,"me" ,"value" ,"push" ,"kr" ,"doo" ];
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
let arrayConcatenatingResult = arrayConcatenating.concat(arrayConcatenatingAdd,arrayConcatenatingAddOne);
document.getElementById("array-concatenating-result").innerHTML = arrayConcatenatingResult;

// javascript flat array methods section 
// this is a nested array 
let arrayFlat = [[1,2],[3,4],[5,6],[7,8]];
let arrayFlatResult = arrayFlat.flat();
// it's return the one set array [3,4]
// document.getElementById("array-flat").innerHTML = arrayFlat[2];
// its return the two number index (3)
document.getElementById("array-flat").innerHTML = arrayFlatResult[2];

// javascript splice array methods section 
let arraySplice = ["vikas ", "kumar ", "Abohar to "];
document.getElementById("array-splice").innerHTML = arraySplice;
// 2 define where to start, 0 define how many values remove and "kargwal" add new array value when you define start
let arraySpliceResult = arraySplice.splice(2,0,"kargwal");
document.getElementById("array-splice-result").innerHTML = arraySplice;

// javascript array slice methods section 
let arraySlice = ["one ","two ","three ","four ","five"];
document.getElementById("array-slice").innerHTML = arraySlice;
let arraySliceResult = arraySlice.slice(1,3);
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
const numaricSorting = [1,3,5,8,7,12,14,6,2];
document.getElementById("array-sorting-numaric").innerHTML = numaricSorting;
numaricSorting.sort(function(a,b){return a - b});

// it will print the highest to lowest number 
/*numaricSorting.sort(function(a,b){return b - a});*/
document.getElementById("array-sorting-numaric-one").innerHTML = numaricSorting;

// javascript compare function in array sorting section 
const sortingCompareFunction = [1,3,5,8,7,12,14,6,2];
document.getElementById("javascript-compare-function-array-sorting").innerHTML = sortingCompareFunction;

function sortingAlphabetically(){
    sortingCompareFunction.sort();
    document.getElementById("javascript-compare-function-array-sorting").innerHTML = sortingCompareFunction;
}
function sortingNumerically(){
    sortingCompareFunction.sort(function(a,b){return a - b});
    document.getElementById("javascript-compare-function-array-sorting-one").innerHTML = sortingCompareFunction;
}