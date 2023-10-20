// javascript strign length property section
let stringLength = "vikas kumar kargwal dangar khera abohar fazilka";
let stringLengthResult = stringLength.length;
document.getElementById("javascript-length").innerHTML = stringLengthResult;

// javascript toLowerCase section 
let toLowerCase = "VIKAS Bhai Kase Hoo";
let toLowerCaseResult = toLowerCase.toLowerCase();
document.getElementById("javascript-toLowerCase").innerHTML = toLowerCaseResult;

// jascript toUpperCase section 
let toUpperCase = "vikas bhai ye small latter hai jo capital me convert ho gay hai.";
let toUpperCaseResult = toUpperCase.toUpperCase();
document.getElementById("javascript-toUpperCase").innerHTML = toUpperCaseResult;

// javascript includes section
let includes = "Vicky bhai yeh string includes section hai";
let includesResult = includes.includes("Vicky");
// javascriptm includes srting methods hme apni string me excat mach search kr k deta hai agar result mach hai to true return krega vrna false 
document.getElementById("javascript-includes").innerHTML = includesResult;

// javascript string startWith section 
let startWith = "This is a startWith section javascript string methods section";
let startWithResult = startWith.startsWith("This");
document.getElementById("javascript-startWith").innerHTML = startWithResult;

// javascript string endsWith section 
let endsWith = "javascript endsWith section";
let endsWithResult = endsWith.endsWith("section");
document.getElementById("javascript-endsWith").innerHTML = endsWithResult;

// javascript string search section 
let searchString = "This is a search methods section";
let searchResult = searchString.search("methods");
document.getElementById("javascript-search").innerHTML = searchResult;

// javascript string match section
let matchString = "The is a match section is the is and is the best is ";
let matchResult = matchString.match(/is/g);
// yeh wali string me jo value hai woh without quots k likhi jaygi
document.getElementById("javascript-match").innerHTML = matchResult;

// javascript string indexOf section
let indexOf = "This is a indexOf section ";
let indexOfResult = indexOf.indexOf("a");
document.getElementById("javascript-indexOf").innerHTML = indexOfResult;

// javascript string lastIndexOf section 
let lastIndexOfString = "This is a lastIndexOf section is the best";
let lastIndexOfResult = lastIndexOfString.lastIndexOf("is");
document.getElementById("javascript-lastIndexOf").innerHTML = lastIndexOfResult;

// javascript string replace section
let replace = "It is a string methods section is the best part is in string methods";
// yeh bs pehale is ko hi repeat krega are me baki ko nhi 
// let replaceResult = replace.replace("is", "are");

// yeh string me jitne v is hai un sbko hi change kr dega are me (yeh globaly change krta hai or without qoutes k likha jata hai ease => (/is/g))
let replaceResult = replace.replace(/is/g, "are");
document.getElementById("javascript-replace").innerHTML = replaceResult;

// javascript string trim section 
function javascriptTrim() {
    let javascriptTrimString = "      vikas  ";
    // javascript trim string ki spacing ko cut kr deta hai faltu ki spacing ko
    let javascriptTrimStringResult = javascriptTrimString.trim();
    alert(javascriptTrimStringResult);
}

// javascript string charAt section 
let charAt = "This is a charAt section";
// yeh hme return krta hai ki konse number per string ka index number hai 
let charAtResult = charAt.charAt(6);
document.getElementById("javascript-charAt").innerHTML = charAtResult;

// javascript string charCodeAt section
let charCodeAt = "This is a charCodeAt section";
// yeh hme three (3) number index ka character code return krta hai 
let charCodeAtResult = charCodeAt.charCodeAt(3);
document.getElementById("javascript-charCodeAt").innerHTML = charCodeAtResult;

// javascript string fromCharCode sectionm 
// esme hm character code likhege or yeh hme oska result de dega 
let fromCharCode = String.fromCharCode(90);
document.getElementById("javascript-fromCharCode").innerHTML = fromCharCode;

// javascript string concat section 
let concat = "hello" + " ";
let concatOne = "bhai" + " ";
let concatTwo = "Vikas" + " " + "kumar";
// yeh do string koi aps me mrg yani add kr deta hai (hm one se jyada v add kr skte hai string ko)
let concatResult = concat.concat(concatOne, concatTwo);
document.getElementById("javascript-concat").innerHTML = concatResult;

// javascript string split section 
let split = "This is a split section";
// isne space ko cut krke array me convert kr diya hm space k ilava kuj v cut kr skte hai 
// let splitResult = split.split(" ");
let splitResult = split.split("i");
document.getElementById("javascript-split").innerHTML = splitResult;

// javascript string repeat section 
let repeat = "This is a repeat section ! ";
let repeatResult = repeat.repeat(2);
document.getElementById("javascript-repeat").innerHTML = repeatResult;

// javascript string slice section
let slice = "This is a slice section";
// yeh 4 se 7 k biche k sbi words ko paste kr dega hm apni margi se v cut krke paste kr skte hai baki w3school per dekho
let sliceResult = slice.slice(4, 7);
document.getElementById("javascript-slice").innerHTML = sliceResult;

// javascript string substr section 
// eski pehali value dekhti hai ki kha se start krna hai or second value dekhti hai ki suru hone k bad one se start hokr kha tk jana hai 
let substrString = "This is a substr section";
let substrResult = substrString.substr(3, 6);
document.getElementById("javascript-substr").innerHTML = substrResult;

// javascript string substring section 
// eski firsr value tp check krti hai ki kha se suru krna hai or second value apni khud ki value se aak piche tk run hoti hai 
let substring = "This is a substring section";
let substringResult = substring.substring(2,6);
document.getElementById("javascript-substring").innerHTML = substringResult;

// javascript string toString section 
let toString = 10;
// yeh number ko string men convert kr deta hai 
let toStringResult = toString.toString();
document.getElementById("javascript-toString").innerHTML = toStringResult + 10;

// javascript string valueOf section 
let valueOf = "This is a valueOf Section";
let valueOfResult = valueOf.valueOf();
document.getElementById("javascript-valueOf").innerHTML = valueOfResult;

