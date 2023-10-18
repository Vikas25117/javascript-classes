console.log("This is a javascript object section");

// javascript simple object section 
const car = {
    type: "fiat",
    model: "500",
    color: "red"
};
// first way to print (call) object 
// document.getElementById("simple-object").innerHTML = typeof car["color"] + car["model"];

// second way to print (call) object
// document.getElementById("simple-object").innerHTML = car.color;

// third way to print (call) object
document.getElementById("simple-object").innerHTML = car["type"]; 

// JavaScript object with an object literal
const objectLiteral = {firstName:"vikas", lastName:"kumar", age:"24"};

document.getElementById("object-literal").innerHTML = `My name is ${objectLiteral["firstName"]} ${" "} ${objectLiteral["lastName"]} I am ${objectLiteral["age"]} year old`;

// javascript array and function object section
const arrayObject = {
    fName: "vicky",
    lName: "singh",
    age: 24,
    email: "vicky@gmail.com",
    country:{
        city:{
            cityName: "Abohar"
        }
    },
    favMovie: ["Dhoom", "Sholay", "Marjava"],
    salary: function(){
        return 25000;
    },
    fullName: function(){

        return this.fName + " " + this.lName;
    }
}
// document.getElementById("array-object").innerHTML = arrayObject.favMovie[1];
document.getElementById("array-object").innerHTML = arrayObject.favMovie;
// object me function ko ase call kiya jata hai 
document.getElementById("object-function").innerHTML =  arrayObject.salary();
// esme hmne object me special functionn banaya hai 
document.getElementById("object-function-one").innerHTML =  arrayObject.fullName();
// esme hamne object k under or object banaya hai or oske under or onject banaya hai 
document.getElementById("javascript-object-in-object").innerHTML = arrayObject.country.city.cityName;

// javascript empty onject section
// niche likhe dono concept se hm empty object create kr skte hai 
const emptyObject = {}; // this is a non singleten object
document.getElementById("javascript-empty-object").innerHTML = emptyObject;
// console.log(emptyObject);
const emptyObjectOne = new Object(); //this is a singleten object
document.getElementById("javascript-empty-object-one").innerHTML = emptyObjectOne;
// console.log(emptyObjectOne);

// javascript one const variabel define the multiple values assign 
const user = {};
user.id = "1234"
user.name = "vikas"
user.isLoggedIn = false
//eski orignial value console me hai out put me to [object Object] ayega
document.getElementById("javascript-const-variabel").innerHTML = 
user;
// console.log(user); //real value output in console

// create the multiple object variabel assign the one variabel 

const obj1 = {1: "vikas", 2:"kuldeep", 3: "pta nhi"};
const obj2 = {4: "sahil", 5:"little", 6: "brother"};
// const obj3 = {obj1, obj2};
// es concept se dono alag alag variabel one line me aa jayge
// esme mane aak empty object likha hai {} ease oska mean hai ki baki k jitne b variabel hai woh sbi aak hi line me aa jay
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

// using the spread opreater in javascript object 
// yeh concept wha use hoga jha hame above side empty object define kiya hai oski jga per 
const obj4 = {1: "vikas", 2:"kuldeep", 3: "pta nhi"};
const obj5 = {4: "sahil", 5:"little", 6: "brother"};
const obj6 = {...obj1, ...obj2};
console.log(obj6);

// javascript object freeze section 
const jsUser = {
    email: "jsUser@gmail.com"
}
console.log(jsUser);
// object.freeze se hm kisi v object ko aage work krne per rok skte hai jase niche likha hai
Object.freeze(jsUser);
jsUser.email = "vicky@gmail.com";
console.log(jsUser);