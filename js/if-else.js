console.log("This is a javascript if else conditions section");

// javascript if conditions section 
if (new Date().getHours() < 18) {
    document.getElementById("javascript-if").innerHTML = "Good day vikas";
}

// javascript if else conditiond section 
let hour = new Date().getHours();
let greeting;
if (hour >= 8 && hour < 13) {
    greeting = "Good Morning Vikas";
} else {
    greeting = "Abi Good Morning nhi hui bhai ";
};
document.getElementById("javascript-if-else").innerHTML = greeting;

// javascript else if conditions 
let hours = new Date();
hours.setHours(23);
let asd = hours.getHours();

console.log(asd)
if (asd > 8 && asd < 12) {
    gretting = "Good morning bhai";
} else if (asd >= 12 && asd < 14) {
    gretting = "Good afternoon";
} else if (asd >= 14 && hours < 19) {
    gretting = "Good evening"
} else if (asd >= 19 && asd < 23) {
    gretting = "Good Night"
}
else {
    gretting = "Good Morning";
};
document.getElementById("javascript-else-if").innerHTML = gretting;