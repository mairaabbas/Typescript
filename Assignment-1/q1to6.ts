// question no 2
//  Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName: string = "Maira";

let message1: string = `"Hello ${personName}, would you like some tea?"`;
console.log(message1);


// question no 3
//  Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let name: string = "Maira Abbas" ;
// lowercase
console.log("lowercase:" , name.toLowerCase()); 

// uppercase
console.log("uppercase:", name.toUpperCase());
 
// titlecase
console.log ("Title Case",name .charAt (0).toUpperCase() + name.slice(1));

// question no 4
// find a quote from a famous person you admire.print the quote and the name of its author.

let authorname: string = ("Benjamin Franklin once said,");
const quote: string = `${authorname}"welldone is better than well said."`;
console.log(quote);

// question no 5
// store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = ("Tony Robbins once said,");
const message :string = `${famous_person}"The only impossible journey is the one you never begin."`;
console.log(message);


// question no 6
//  Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.



let fullname= "\t  \n Maira Abbas\t \n";

console.log(fullname);
console.log(fullname.trim());


