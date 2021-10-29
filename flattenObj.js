import { readJSON } from "./helpers.js";

// you can import your own JSON Object here
const user = await readJSON("./testObject.json");

// toggle to enable/disable verbose console logging
let debug = false;
if (debug) {
    console.log("Initial User Object:");
    console.dir(user, { depth: null });
}

let flattenObject = (obj, baseStr="") => {
    let flattenedObject = new Object;
    flattenedObject = magic(obj, baseStr, flattenedObject);
    return flattenedObject;
}

let magic = (inputObj, strBase="", currentObj={}) => {
    let accumulator = currentObj;
    let debugKey = strBase;
    for (let key in inputObj) {
        if(typeof inputObj[key] === "object") {
            let strGrow = (strBase=="") ? key : strBase+"_"+key;
            if (debug) {
                console.log("----- >>>>> layer >>>>> " + key + " >>>>>>>>>> -----")
                debugKey = key;
            }
            accumulator = Object.assign(accumulator, magic(inputObj[key], strGrow, accumulator));
        } else {
            let strGrow = (strBase=="") ? key : strBase+"_"+key;
            accumulator[strGrow] = inputObj[key];
            if (debug) {
                debugKey = key;
                console.log("added to Object Accumulator:    " + strGrow + ": " + inputObj[key]);
            }
        };
    }
    if (debug) {console.log("----- <<<<< layer <<<<< " + debugKey + " <<<<<<<<<< -----")};
    return accumulator;
}

// finally call func
let finalObject = flattenObject({user});
console.log(finalObject);