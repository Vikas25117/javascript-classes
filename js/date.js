console.log("This is a javascript date methods section ");

// javascript simple date object section 
let DateSection = new Date();
document.getElementById("javascript-simple-date-object").innerHTML = DateSection;

// javascript toDateString section 
let toDateStringMethod = new Date ();
document.getElementById("date-toDateString").innerHTML = toDateStringMethod.toDateString();

// javascript getDate date method section 
let getDateMethod = new Date ();
document.getElementById("date-getDate-method").innerHTML = getDateMethod.getDate();

// jacascript getFullYear methods section 
let getFullYearMethod = new Date ();
document.getElementById("date-get-Full-Year-method").innerHTML = getFullYearMethod.getFullYear();

// jacascript getMonth methods section 
let getMonthMethod = new Date ();
document.getElementById("date-get-Month").innerHTML = getMonthMethod.getMonth();

// jacascript getDay methods section 
let getDayMethod = new Date ();
document.getElementById("date-get-Day").innerHTML = getDayMethod.getDay() + " " + " wednesday";

// pre define date in date object section 
let preDefineDate = new Date ("11 july 1999");
document.getElementById("pre-define-date").innerHTML = preDefineDate.getDate();

/** es trike se hm pre define date me se sb kuj pta kr skte hai example niche hai  */

// document.getElementById("pre-define-date").innerHTML = preDefineDate.getDay();
// document.getElementById("pre-define-date").innerHTML = preDefineDate.getFullYear();
// document.getElementById("pre-define-date").innerHTML = preDefineDate.getMonth();
// document.getElementById("pre-define-date").innerHTML = preDefineDate.getMinutes();
// document.getElementById("pre-define-date").innerHTML = preDefineDate.getHours();
// document.getElementById("pre-define-date").innerHTML = preDefineDate.getSeconds();
// document.getElementById("pre-define-date").innerHTML = preDefineDate.getMilliseconds();

// javascript getHours date methods 
let getHoursMethods = new Date ();
document.getElementById("date-get-hours").innerHTML = getHoursMethods.getHours() + " " + " Hours";

// javascript getMinutes date methods 
let getHoursMinutes = new Date ();
document.getElementById("date-get-minutes").innerHTML = getHoursMinutes.getMinutes() + " " + " minutes";

// javascript getSeconds date methods 
let getSecondsMethod = new Date ();
document.getElementById("date-get-seconds").innerHTML = getSecondsMethod.getSeconds() + " " + " Seconds";

// javascript getMilliseconds date methods 
let getMillisecondsMethod = new Date ();
document.getElementById("date-get-Milliseconds").innerHTML = getMillisecondsMethod.getMilliseconds() + " " + " Milliseconds";

// javascript setDate methods 
let setDateMethods = new Date ();
setDateMethods.setDate(11);
// esne muje ajj ki date me 11 set kr diya baki time whi hai 
document.getElementById("set-date-method").innerHTML = setDateMethods;