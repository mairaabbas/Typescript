"use strict";
// question no 32
Object.defineProperty(exports, "__esModule", { value: true });
const current_users = [
    "ali",
    "waseem",
    "ahmad",
    "abbas",
    "bilal",
];
const new_users = [
    "AHMED",
    "haroon",
    "zain",
    "abbas",
    "hameeza",
];
new_users.map((name) => {
    if (current_users.includes(name.toLowerCase())) {
        console.log("username", name, "already in use. Please rename yourself");
    }
    else {
        console.log("username", name, "is available");
    }
});
