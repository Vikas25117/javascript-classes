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
// let hours = new Date();
// hours.getHours();
// let asd = hours.setHours();
// let usd = asd.toString() ;

// console.log(usd);
// if (usd > 8 && usd < 12) {
//     var gretting = "Good morning bhai";
// } else if (usd >= 12 && usd < 14) {
//     gretting = "Good afternoon";
// } else if (usd >= 14 && hours < 19) {
//     gretting = "Good evening"
// } else if (usd >= 19 && usd < 23) {
//     gretting = "Good Night"
// }
// else {
//     gretting = "Good Morning";
// }
// document.getElementById("javascript-else-if").innerHTML = gretting + usd;
// document.write(hours);

// javascript date if else condition 
let getDateSection = new Date();
// getDateSection.setHours(getDateSection.getHours () + 6);
// getDateSection.setMinutes (getDateSection.getMinutes () + 38);
let timeSec = getDateSection.getHours();
if(timeSec > 16 && timeSec < 17){
    var wish = "Good Evening sir ";
}
else{
    wish = "Good 😀 sir";
};
document.getElementById("javascript_date_method").innerHTML = timeSec + " " + wish;