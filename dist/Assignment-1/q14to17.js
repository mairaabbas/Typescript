"use strict";
// question 14 to 17
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Maira", "amna", "ali", "aiza", "zainab"];
guestList.map((name) => {
    console.log(`Hi ${name}, your dinner is on me today`);
});
console.log(`Maira can't come on dinner`);
guestList = ["mehwish", "amna", "ali", "aiza", "zainab"];
guestList.map((Name) => {
    console.log(`Hi ${Name}, your dinner is on me today`);
});
console.log(`Bigger list for  dinner`);
guestList.unshift("iqra");
guestList.splice(3, 0, "alishba");
guestList = guestList.concat("hafsa");
guestList.map((name) => {
    console.log(`Hi ${name}, your dinner is on me today`);
});
console.log(`and you have space for only two guests.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
guestList.map((name) => {
    console.log(`Hi ${name}, you are still inviting on dinner at my Home`);
});
guestList.pop();
guestList.pop();
guestList.map((name) => {
    console.log(`Hi ${name}, you are still inviting on dinner at my Home`);
});
