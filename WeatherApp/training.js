// { lesson 1 }
//logs the text into the console
console.log(`Hello`);
console.log(`Fisch`);
//alert when starting the web
// window.alert(`this is an alert`);
// window.alert(`FISCH`);
/* 
this is a comment till it's closed with Ctrl + K + C is comment stuff
 and Ctrl + K + U is the opposite
*/
//the document.get.... inserts the text content
document.getElementById(`myH1`).textContent = `Hello`;
document.getElementById(`myP`).textContent = `Fisch`;
// { lesson 1 }

// { lesson 2 } Variable in Javascript
// 1. declaration let x;
// 2. assignment x = 100
// 3. both let x = 123
/* there are different data type in coding or scripting in javascript
1. number
2. string
3. boolean
*/
//for names it's best to use  "" than `` or ''
//number
let x;
x = 100;
console.log(x);
let age = 17;
let price = 19.21;
let grade = 4.5;
//typeof shows the type of datatype
console.log(typeof price, typeof grade, typeof age);
console.log(`You are ${age} years old`);
console.log(`The price is ${price}`);
console.log(`Your grade is ${grade}`);
//string
let firstName = "Janjao";
let favoritefood = "Potatoe";
let email = "Janjao4750@gmail.com";
console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoritefood}`);
console.log(`Your email is ${email}`);
//boolean
let online = true;
let forSale = false;
let isStudent = true;
console.log(`janjao is online: ${online}`);
console.log(`is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);
//
let fullName = "Setthawut Jedsadaviriya";
let myage = 17;
let student = true;
document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${myage}`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;
// { Lesson 2 }

// { Lesson 3 }
//arithmetic operators = opprands (values, variables, etc.)
//                  opertators (+ - * /)
let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
/* exponent
students = students ** 3;
*/
//students = students % 4;

// augmented assignment operators
// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

//increment is ++
//students++
//decrement is --
//students--

/* 
    operator process
    1. parenthesis ()
    2. exponents
    3. multiplication, division and modulu
    4. addition and subtraction
*/
console.log(students);

let result = 1 + 2 * 3 + 4 ** 2;
let result2 = 6 / 2 ** (2 + 5);

console.log(result2);
console.log(result);

// end of session 1 of the video class is starting soon
// video left of at 32:54
// { Lesson 3 }
