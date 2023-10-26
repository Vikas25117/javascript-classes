console.log("This is a math methods section");

// javascript Math.ceil section 
let Mathceil = Math.ceil(1.2);
/** agar hm - me koi value date hai jase ki -1.25 de diya to yeh hme return me -1 hi return krega kyuki -1 integer -1.25 se big hai es lye  */
// let Mathceil = Math.ceil(-2.88);
document.getElementById("math-ceil").innerHTML = Mathceil;

let Mathfloor = Math.floor(1.23);
// let Mathfloor = Math.floor(-1.23);
document.getElementById("math-floor").innerHTML = Mathfloor;

// javascript Math.round methods section 
let MathRoundMethod = Math.round(1.5);
// yeh hme ab 1 return krega because value .5 se kam hai 
// let MathRoundMethod = Math.round(1.4);
document.getElementById("Math-round-method").innerHTML = MathRoundMethod;

// javascript Math.trunc method section 
let MathTruncMethod = Math.trunc(25.23);
document.getElementById("Math-trunce-method").innerHTML = MathTruncMethod;

// javasdcript Math.max section 
// yeh hme sbse big value return krta hai 
let MathMaxMethod = Math.max(12, 10, 24, 52, 23, 2, 10, 1);

// yeh hme largest value return krta hai 
// let MathMaxMethod = Math.max(-10, -1, -25);
document.getElementById("Math-max-method").innerHTML = "largest value is " + MathMaxMethod;

// javascript Math.min method section 
let MathMinMethod = Math.min(2, 10, 24, 52, 23, 2, 10, 1);

// yeh hme sbse kam ya chotti value return kr k dega  
// let MathMinMethod = Math.min(-2, -10, -1.0);
document.getElementById("Math-Min-Method").innerHTML = "The lowest value is " + MathMinMethod;

// javascript Math.sqrt method section 
let MathSqrtMethod = Math.sqrt(25);
document.getElementById("Math-Sqrt-Method").innerHTML = "The squre root is " + MathSqrtMethod;

// javascript Math.cbrt method section 
let MathCbrtMethod = Math.cbrt(125);
document.getElementById("Math-Cbrt-Method").innerHTML =  "The cubice root is " + MathCbrtMethod;

// javascript Math.pow method section 
// The result is 2*2*2*2*2 => 32
let MathPowMethod = Math.pow(2, 5);
document.getElementById("Math-Pow-Method").innerHTML = "The value is " + MathPowMethod;

// javascript Math.ramdom method section 
let MathRandomMethod = Math.random();
document.getElementById("Math-Random-Method").innerHTML = "The random value is => " + MathRandomMethod;

// javascript Math.random calculate method 
// yeh hme ab 1 to 10 tk ak integer value dega
let MathRandomMethodCalculate = Math.floor(Math.random() * 10) + 1;
document.getElementById("Math-Random-Method-Calculate").innerHTML = MathRandomMethodCalculate;

// javascript Math.random full function section 
function Mathrandomfunction(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// javascript Math.abs method section 
let MathAbsMethod = Math.abs(-5.20);
document.getElementById("Mth-abs-method").innerHTML = "The absolute value is " + MathAbsMethod;

// javascript Math.PI method section 
let MathPIMethod = Math.PI;
// let result = Math.floor(MathPIMethod * 10) + 1;
document.getElementById("Math-PI-Method").innerHTML = MathPIMethod;