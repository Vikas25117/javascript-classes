export let message = "This is a javascript modules section";

export function user() {
    console.log("Hello function modules");
};
// function use with perametter below like this
export function userFunction(name) {
    console.log(`Hello ${name}`);
};

// javascript modules class section 
export class modulesClass {
    constructor() {
        console.log("constructor methods");
    }
};