// ==================== Notes This page ===========================
/**
 * hm import me jo function import kra rkhe hai onke name ko sort kr skte hai like this 
 * jase ki niche function import hai userFunction es function ka name kaffi big hai or ma ese sort kr skta hu aalice method ki help se 
 * import { message, user, userFunction as usFu, modulesClass } from "./modules-two.js";
 * ab userFunction :- usFu k name se change ho chuka hai ab hm ese apne new name se call krege jase ki 
 * usFu();
 * 
 * ==================== second note ===================
 * hamare pass modules-two.js me kaffi kuj hai jase ki variabels, classes, function exc.. hm un sbi ko hi apni es file me use krna chate hai to hm inko globaly import kr skte hai * ka use krke or esme hm import se pehale * k sath aalice methods ki help se aak name create krege jo hme import krne me help krega example below like this 
 * 
 * import * as vikas from "./modules-two.js";
 * ab hmne yha dusri file k sbi classes or varibels or functions kause kr liya hai ab hm enko niche likhe anusar use kr skte hai jase kki 
 *  console.log(vikas.message);
 * vikas.user();
 * vikas.userFunction("user function vikas");
 * let modulesClassResult = new vikas.modulesClass();  
 * es trike se hm enko use kr skte hai 
 */




import { message, user, userFunction, modulesClass } from "./modules-two.js";
console.log(message);
/**document.body.innerHTML = message;
 * hm body me direct print kra skte hai text ko as a variabel
 */
user();

// function use with perametter
userFunction("user function vikas");

// javascript modules class section 
let modulesClassResult = new modulesClass();    