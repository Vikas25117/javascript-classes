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
        console.log("constructor methods ");
    }
};

// ============= Notes this page ===================
/**
 * hm apni files me export ko one place per export kr skte hai hme har bar export likhne ki need nhi hai 
 * example below like this esme hmne sbi export ki one hi palce per export kra diya hai hm chae to auper likhe export ko cut ke skte hai or niche likhe export ko uncomment kr dage 
 * 
 * ++++++++++++++++ export { message, user, userFunction, modulesClass }; +++++++++++++++++++++++
 *  =============== hm export ko default v use kr skte hai per eske lye app chatGPT ja google per search kre 
*/
