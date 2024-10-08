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

// { Lesson 3 } arithmatic operation
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

// { Lesson 4 } accept user input

/* this is windows prompt the easy way for user input
let username;
// a popup prompt
username = window.prompt("what is your username?");

console.log(username);
*/

// this is professional way with the html text box
let username;
document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  document.getElementById("myuser").textContent = `Hey ${username}`;
};
// { Lesson 4 }

// { Lesson 5 } type conversion
let agetc = window.prompt("how old are you?");
// if the conversion is not here it would be a string so instead of 18 it is 171
agetc = Number(agetc);
agetc += 1;
console.log(agetc, typeof agetc);

let x5 = "0";
let y5 = "0";
let z5 = "0";

x5 = Number(x5);
y5 = String(y5);
z5 = Boolean(z5);

console.log(x5, typeof x5);
console.log(y5, typeof y5);
console.log(z5, typeof z5);
// { Lesson 5 }

// { Lesson 6 } const
//let pi = 3.14159; // can be changed
const PI = 3.14159; // cannot be changed
let radius;
let circumference;

radius = window.prompt("enter the radius of a circle");
radius = Number(radius);

circumference = 2 * PI * radius;

// console.log(circumference);

document.getElementById("mysubmitR").onclick = function () {
  radius = document.getElementById("mytextR").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myh3").textContent = circumference + "cm";
};
// { Lesson 6 }
// session 2 left off at 52:30
// { Lesson 7 } counter app but without the help of the video and i will time it
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const counter = document.getElementById("countlable");
let counternum = 0;

increase.onclick = function () {
  counternum++;
  counter.textContent = counternum;
};

decrease.onclick = function () {
  counternum--;
  counter.textContent = counternum;
};

reset.onclick = function () {
  counternum = 0;
  counter.textContent = counternum;
};
// { Lesson 7 } the app was make in aprox 17 minuites
// session 3 done leaving the vid on 01:01:47

// { Lesson 8 } Math function

Math.PI;
console.log(Math.PI);
console.log(Math.E);
let mx = 3.2;
let my = 2;
let mz = 1;

//rounds
// mz = Math.round(x);
//rounds down
// mz = Math.floor(x);
// rounds up
// mz = Math.ceil(x);
// mz = Math.trunc(x);
// mz = Math.pow(x, y);
// mz = Math.sqrt(x);
// mz = Math.log(x);
// mz = Math.sin(x);
// mz = Math.cos(x);
// mz = Math.tan(x);
// mz = Math.abs(x);
// mz = Math.sign(x);
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);

console.log(`1`);
// end session 4 at 01:07:09
// { Lesson 8 }

// { Lesson 9 }

// const minRan = 50;
// const maxRan = 100;

// let randomNum = Math.floor(Math.random() * (maxRan)) + minRan;

// console.log(randomNum);

const dicebutton = document.getElementById("dicebutton");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const mindice = 1;
const maxdice = 6;
let randomNumdice1;
let randomNumdice2;
let randomNumdice3;

dicebutton.onclick = function () {
  randomNumdice1 = Math.floor(Math.random() * maxdice) + mindice;
  randomNumdice2 = Math.floor(Math.random() * maxdice) + mindice;
  randomNumdice3 = Math.floor(Math.random() * maxdice) + mindice;
  dice1.textContent = randomNumdice1;
  dice2.textContent = randomNumdice2;
  dice3.textContent = randomNumdice3;
};
