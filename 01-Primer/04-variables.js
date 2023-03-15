//> Variables are representation of some space in memory

var name = "Ajay";

//% Initially undefined
var age;
//% Then assigned
age = "23";

//# accessing a set of memory using one name
let myArray = ["Akshay Kumar", 22, [1, 2, 3, 4]]; //~^ creating

//> what is this console now?
console.log(myArray.length); //~^ accessing
console.log(myArray[0]);

//? Function Invocation expression/operator
// func()

// ~? semicolon operator
// It ends the statement

//~# operations only with variables - do and reassign
var count = 0;
count++;
count = count - 1;
count *= 5;
