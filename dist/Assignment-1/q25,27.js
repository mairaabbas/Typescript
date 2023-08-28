"use strict";
// question 25to26
Object.defineProperty(exports, "__esModule", { value: true });
const colorMessage = (color) => {
    if (color === "green") {
        console.log("Congrats! you earned 5 points!");
    }
};
colorMessage("green");
colorMessage("red");
const colorMessageWithIfElse = (color) => {
    color === "green"
        ? console.log("Congrats! you earned 5 points!")
        : console.log("Congrats! you earned 10 points!");
};
colorMessageWithIfElse("green");
colorMessageWithIfElse("red");
const colorMessageChain = (color) => {
    color === "green"
        ? console.log("Congrats! you earned 5 points!")
        : color === "yellow"
            ? console.log("Congrats! you earned 10 points!")
            : color === "red" && console.log("Congrats! you earned 15 points!");
};
colorMessageChain("green");
colorMessageChain("red");
colorMessageChain("yellow");
