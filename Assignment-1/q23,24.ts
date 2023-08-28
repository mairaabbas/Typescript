// question no 23 and 24

let item: string = "shoes";
console.log("item == shoes should be true => ", item == "shoes");
console.log("item != shoes should be false => ", item != "shoes");
console.log("item == nike should be false => ", item == "nike");
console.log("item != nike should be true => ", item != "nike");
console.log("item == SHOES should be false => ", item == "SHOES");
let count: number = 10;
console.log("count == 10 should be true => ", count == 10);
console.log("count != 10 should be false => ", count != 10);
console.log("count < 6 should be false => ", count < 6);
console.log("count > 6 should be true => ", count > 6);
console.log("count >= 10 should be true => ", count >= 10);
console.log("count <= 10 should be true => ", count <= 10);

console.log(
  "count > 6 && count == 10 should be true => ",
  count > 6 && count == 10
);
console.log(
  "count < 6 && count > 10 should be false => ",
  count > 6 && count > 10
);
console.log(
  "count < 6 || count > 10 should be false => ",
  count < 6 || count > 10
);
console.log(
  "count > 6 || count == 10 should be true => ",
  count > 6  || count == 10
);
let array: Array<string> = ["items", "count"];
console.log("array.includes('Onion') should be false =>", array.includes("Onion"));
console.log("array.includes('items') should be true =>", array.includes("items"));
console.log("array.includes('ITEMS') should be false =>", array.includes("ITEMS"));
console.log(
  "arr.includes('items', 1) should be false =>",
  array.includes("items", 1)
);