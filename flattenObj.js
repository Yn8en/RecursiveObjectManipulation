import { readJSON } from "./helpers.js";

// alternatively import your own JSON Object here
const user = await readJSON("./testObject.json");
console.log(user);

// toggle to enable/disable verbose console logging
let debug = false;
if (debug) {
    console.log("Initial User Object:");
    console.dir(user, { depth: null });
}

// wrapperFunction to keep the initialisation stage out of recursion
let flattenObject = (obj, baseStr="") => {
    let flattenedObject = new Object;
    flattenedObject = magic(obj, baseStr, flattenedObject);
    return flattenedObject;
}

// recursive object handler with some comments, clg and debugging lines, could be scrapped!
// KVP == key-value-pair
let magic = (inputObj, strBase="", currentObj={}) => {
    let accumulator = currentObj;
    let debugKey = strBase;
    // loop over all keys in top level layer of current branch
    for (let key in inputObj) {
        // check if current key is a base case (final value) or holds an object (recursion deeper)
        if(typeof inputObj[key] === "object") {
            // in case current key holds another child object, ...
            // append current key (parent key of sub-object) to the strBase for recursion 
            let strGrow = (strBase=="") ? key : strBase+"_"+key;
            if (debug) {
                console.log("----- >>>>> layer >>>>> " + key + " >>>>>>>>>> -----")
                debugKey = key;
            }
            // trigger recursion and backwards-recursively assign the returned KVPs
            // from all deeper base-cases from bottom up to the accumulator
            accumulator = Object.assign(accumulator, magic(inputObj[key], strGrow, accumulator));
        } else {
            // in case current key is a final dead-end base case ...
            // append original key to actual base-string and then write the final KVP onto accumulator
            let strGrow = (strBase=="") ? key : strBase+"_"+key;
            accumulator[strGrow] = inputObj[key];
            if (debug) {
                debugKey = key;
                console.log("added to Object Accumulator:    " + strGrow + ": " + inputObj[key]);
            }
        };
    }
    if (debug) {console.log("----- <<<<< layer <<<<< " + debugKey + " <<<<<<<<<< -----")};
    // after all work is done, all recursions complete, all KVPs accumulated return
    return accumulator;
}

// finally call func and show result
let finalObject = flattenObject({user});
console.log(finalObject);