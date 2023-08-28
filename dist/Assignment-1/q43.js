"use strict";
// question 43
Object.defineProperty(exports, "__esModule", { value: true });
const magicians = ["Aladdin", "granny", "billie", "david"];
const show_magicians = (magiciansArr) => {
    magiciansArr.map((magician) => {
        console.log(magician);
    });
};
const make_great = (magiciansArr) => {
    const arr = [];
    magiciansArr.map((name) => {
        arr.push("The Great " + name);
    });
    return arr;
};
let new_arr = make_great(magicians);
console.log("Original: ");
show_magicians(magicians);
console.log("New Array: ");
show_magicians(new_arr);
