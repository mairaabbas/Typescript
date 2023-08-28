// let teacher = {
//     name: "Zeeshan",
//     experience: "10"
// }
export {};
// console.log(teacher.name);
// console.log(teacher["experience"]);
// Type Declaration
// let student : {
//     name: string,
//     age: number
// }
// student = {
//     name: "Hira",
//     age: 30
// };
// console.log(student["name"]);
// console.log(student.age);
// let teacher : {name: string, exp: number} = {
//     name: "Zeeshan",
//     exp: 10
// }
// Aliased Object Type
// type Student = {
//     name: string,
//     age?: number
// }
// let student: Student = {
//     name: "Hira",
//     age: 30
// }
// console.log(student.name);
// console.log(student.age);
// Interfaces
// interface Manager {
//     name: string,
//     subordiates?: number
// }
// let storeManager: Manager = {
//     name: "Bilal"
// };
//  ?optional before colon
// type declaration
// let car: {name:string, model : number} = 
// {name: 'honda' , model : 2002};
//  console.log(car);
//  type feature = {
//      name: string,
//      model: number,
//      color: string,
//  }
//  let car1 : feature =
//  {name: 'honda' , model : 2002 , color: "black"};
//  let car2: feature = 
//  {name: 'BMW' , model : 2000 , color: "white"};
//  console.log(car1.color);
//  console.log(car2.model);
// These two interfaces are completely
// transferrable in a structural type system:
// interface Ball {
//     diameter: number;
// }
// interface Sphere {
//     diameter: number;
// }
//  freshobjects
// let ball: Ball = { diameter: 10 };
//   let sphere: Sphere = { diameter: 20 };
//   stale objects
// sphere n ball both needs diametre
//   sphere = ball;
//   ball = sphere;  
// If we add in a type which structurally contains all of
// the members of Ball and Sphere, then it also can be
// set to be a ball or sphere.
//   interface Tube {
//     diameter: number;
//     length: number;
//   }
//   let tube: Tube = { diameter: 12, length: 3 };
//tube = ball;//Error
//   ball = tube;
// Because a ball does not have a length, then it cannot be
// assigned to the tube variable. However, all of the members
// of Ball are inside tube, and so it can be assigned.
// TypeScript is comparing each member in the type against
// each other to verify their equality.
//===================================================
// Now lets do it Case By Case
//Case when "FRESH"" object literal are assigned to a variable 
//Rule: When a fresh object literal is assigned to a variable or passed for a parameter of a non-empty target type, 
//it is an error for the object literal to specify properties that don't exist in the target type.
//The rationale for the below two errors is that since the fresh types of the object literals are 
//never captured in variables, static knowledge of the excess or misspelled properties should not be silently lost. 
// let myType = { name: "Zia", id: 1 };
//Case 1
// myType = { id: 2,  name: "Tom" };//Case 1: can only assign a type which has the the same properties
//Object literals can only have properties that exist in contextual type
//Case 2a
// myType = { id: 2,  name_person: "Tom" };//Case 2a: Error, renamed or missing property
//Case 2b 
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
// var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string
// x = { id: 1, fullname: "Zia" };  // Ok, `fullname` matched by index signature
//Case 3
// myType = { id: 2,  name: "Tom", age: 22 };//Case 3: Error, excess property
//=================================================
//Case when STALE object literal are assigned to a variable 
// let myType2 = { id: 2,  name: "Tom" };
//Case 1
// myType = myType2;//Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object
// let myType3 = { id: 2,  name_person: "Tom" };
//Case 2a
// myType = myType3;//Case 2: Error, renamed or missing property, rule same for stale and fresh object 
//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
// type indexsignature = {
//      id: number;
//      [key:string]: any;
// };
// var x: { id: number, [x: string]: any };
// x={ id: 1, fullname: "maira abbas"};
// x={ id: 1, age : 21 };
// x= {id: 1, firstname: "maira", lastname:"abbas" };
//Note now 'x' can have any name, just that the property should be of type string
// var y = { id: 1, fullname: "Zia" };
// x = y;// Ok, `fullname` matched by index signature
// var myType4 = { id: 2,  name: "Tom", age: 22 };
//Case 3
// myType = myType4;//Case 3: Ok, excess property allowed in case of stale object which is different from fresh object
/*
var x: { foo: number };
x = { foo: 1, baz: 2 };  // Error, excess property `baz`

var y: { foo: number, bar?: number };
y = { foo: 1, baz: 2 };  // Error, excess or misspelled property `baz`



var a: { foo: number };
var a1 = { foo: 1, baz: 2 };
a = a1;//No Error

var z: { foo: number, bar?: number };
var z1 = { foo: 1, baz: 2 };
z = z1;//No Error
*/
