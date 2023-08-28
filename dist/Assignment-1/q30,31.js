"use strict";
// question 31 and 32
Object.defineProperty(exports, "__esModule", { value: true });
let usernames = ["maira", "mehwish", "amal", "miral", "fatima"];
usernames.map((user) => {
    user == "Admin"
        ? console.log("Hello admin, would you like to see a status report?")
        : console.log("Hi " + user + ", thank you for logging in again");
});
usernames = [];
if (!!usernames.length) {
    console.log("We need to find some users!");
}
