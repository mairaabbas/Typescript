"use strict";
// quesion 33
Object.defineProperty(exports, "__esModule", { value: true });
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numberArray.map((number) => {
    number == 1
        ? console.log(`${number}st`)
        : number == 2
            ? console.log(`${number}nd`)
            : number == 3
                ? console.log(`${number}rd`)
                : console.log(`${number}th`);
});
