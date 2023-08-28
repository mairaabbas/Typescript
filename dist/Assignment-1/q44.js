"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// question 44
const sandwich_summary = (...items) => {
    console.log("A sandwich ordered with items: ");
    items.map((item) => console.log(item));
};
let items = ["beef", "cheese", "onions", "egg"];
sandwich_summary(...items);
items = ["mayo", "garlic", "cheese", "onions", "chicken", "parsley", "carrot"];
sandwich_summary(...items);
