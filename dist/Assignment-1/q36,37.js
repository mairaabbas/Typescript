"use strict";
// question no 36 and 37
Object.defineProperty(exports, "__esModule", { value: true });
const make_shirt = (size, message) => {
    console.log("Shirt size: " + size + ". Message: " + message);
};
make_shirt("XS", "hurray! we're gonna dance all night!");
// funtion is updated
function make_shirtUpdate(size = "L", message = "I love programming") {
    console.log("Shirt size: " + size + ". Message: " + message);
}
make_shirtUpdate();
make_shirtUpdate("M", "i am a mess");
make_shirtUpdate("XL", "You are just perfect!");
