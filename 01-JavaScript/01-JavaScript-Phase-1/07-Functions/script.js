// Functions

// what why how -> Just Understand

// ------ Function declarations, expressions, and arrow functions

// function declaration / function statement
// function lolo(){
//     console.log("Happy New Year");
// }
// lolo();

// function expression
// let fnc = function(){
//     console.log("heyheyhey");
// }
// fnc();

// fat arrow function
// let fnc = () => {
//     console.log("ooooUUUuuhoooooooo...");
// }
// fnc();

// ----- Parameters vs arguments
// function dance(v1){
//     console.log(`${v1} naach rha hai`);
// }
// dance("ghoda");
// dance("cheel");
// dance("ullu");
// dance("dogi");

// function add(v1, v2){ // v1 and v2 are parameters
//     console.log(v1 + v2);
// }
// add(2, 3); // 2, 3 are arguments


// ------- Default, rest, and spread parameters

// Default parameter
// function add(v1 = 0, v2 = 0){
//     console.log(v1 + v2);
// }
// add(1, 2);

// rest operator
// jab arguments kai saare ho to humein utne hi parameter banane padenge, isse bachne ke liye ham rest ka use krte hain ...
// ... function ke parameter space me lage to wo rest operator hai
// ... agar arrays and objects me lage toh wo spread operator hai.

// function abcd(a, b, c, ...val){  // rest operator
//     console.log(a, b, c, val)
// }
// abcd(1, 2, 3, 4, 5, 6)


// ------- Return values and early returns
// return mtlb :-
// jaha se aaya hai wahi thus dungi - definition by dadiji

// function abcd(v){
//     return 12 + v;
// }
// val = abcd(23);
// console.log(val);

// ------- First-class functions (assign to variables, pass as arguments, return from other functions)
// First class functions ek concept hai
// functions ko values ki tarah treat/use kr sakte hain

// let abcd = function(val){
//     val();
// }
// abcd(function(){
//     console.log("hey");
// })


// --------- Higher-order functions (HOF)
// HOF wo function hota hai jo ki return kre ek function
// Ya fir accept kre ek function apne parameter me

// Accept Function
// function abcd(val){

// }
// abcd(function(){

// })

// Return Function
// function abcd(){
//     return function(){
//         console.log("HOF")
//     }
// }
// abcd()()

// -------- Pure vs impure functions

// Pure function
// Aisa function jo ki bahar ki value ko na badle

// function abcd(){
//     console.log("heyhey");
// }
// abcd();

// Impure Function
// Aisa function jo bahar ki value ko badal de
// Jiska side effect ho bahar

// let a = 12;
// function hui(){
//     a++;
// }
// hui();


// ------- Closures and lexical scoping

// Closures
// ek function jo return kre ek aur function aur return hone wala function hamesha use krega parent function ka koi variable

// function abcd(){
//     let a = 12;
//     return function(){
//         console.log(a);
//     }
// }
// abcd()();

// Lexical scoping
// function ke andar jo variable hai uska scope kya hai
// kaha tak accessable hai

// function abcd(){
//     let a = 12;
//     function defg(){
//         let b = 13;
//         function ghij(){
//             let c = 14;
//         }
//     }
// }

// ------ IIFE (Immediately Invoked Function Expressions)
// Immediately/Turant Invoked/Chalega -> Turant Chalega

// (function(){

// })()

// ------- Hoisting differences between declaration and expression

// abcd();

// function declaration / statement
// hoisting work krti hai
// function abcd(){
//     console.log("heyhey");
// }

// function expression 
// hoisting nhi work krti
// same error like let variable error
// let abcd = function(){
//   console.log("heyheyhey");  
// }

// ----- Practice

// Q1: What's the difference between function declaration and expression in terms of hoisting?
// Answer: function declaration me hoisting kaam krti hai, function axpression me jo ki ham ek variable ka use krke function banate hain usme hoisting kaam nhi karti hai. cannot access before initialization ka error aa jata hai.

// Q2.
// greet();

// function greet(){
//     console.log("--Hello--");
// }

// Answer: 
// function declaration / statement hai
// hoisting kaam krega / can access before initialization
// log krega --Hello--

// Q4: Convert into arrow function
// function multiply(a, b){
//     return a * b;
// }

// let multiply = (a, b) => {
//     return a * b;
// }

// Q5: Identify parameters & arguments
// function welcome(name) { // name is parameter
//     console.log(name);
// }
// welcome("Abhishek"); // "Abhishek" is argument

// Q6: How many parameters does this function have
// function demo(a, b, c){
// }
// demo(1, 2);
// Ans: Three parameters a, b & c
// and 2 arguments 1 and 2

// Q6: Predict output
// function sayHi(name = "Guest"){
//     console.log("Hi", name);
// }
// sayHi();
// Ans: Hi, Guest

// Q7: What does the ... operator mean in parameter

// function abcd(a, b , c, ...val){ // rest operator // bache hue sabhi yeha a jayege

// }
// abcd(1,2,3,4,5,6,7);

// Q8: use rest parameter to accept any number of scores and return the total.

// function getScore(...scores){
//     let total = 0;
//     scores.forEach(function(val){
//         total += val;
//     })
//     return total;
// }
// console.log(getScore(10, 12, 14, 18));

// Q9: Fix the function using early return

// function checkAge(age){
//     if(age < 18){
//         console.log("Too young");
//     } else{
//         console.log("Allowed");
//     }
// }

// function checkAge(age){
//     if(age < 18) return "Too young";
//     return "Allowed";
// }
// console.log(checkAge(17));

// Q10: What is the return value of this function

// function f(){
//     return;
// }
// console.log(f());
// Ans: undefined

// What does it mean when we say "functions are first-class citizens"?
// variable ki tarah use kr sakte hain
// functions are treated like values

// Can you assign a function to a variable and then call it? Show how.
// let fnc = function(){
//     console.log("heyheyehey");
// }
// fnc();

// Pass a function into another function and execute it inside
// function rec(pass){
//     pass();
// }
// rec(function(){
//     console.log("HeyHeyHey");
// })

// What is HOF - Higher Order Function
// Ek aisa function jo return kare ek function
// ya fir accept kre apne parameter me ek function

// function abcd(val){
//     val();
//     return function(){
//         console.log("HEYHEYEHEY");
//     }
// }
// abcd(function(){
//     console.log("Abhishek");
// })();

// Identify which is HOF
// [1, 2, 3].map(function (x){
//     return x * 2.
// })
// map is a Higher Order Function

// find pure or impure

// let total = 0;
// function addToTotal(num){
//     total += num;
// }
// Impure hai kyuki bahar ka value ko change kr rha hai

// Convert the above function into pure function
// let total = 0;
// function addToTotal(num){
//     let newTotal = total;
//     newTotal += num;
// }
// hence now it's pure function because ye bahar ka koi value ko change nhi kar rha hai jisko change kr rha hai wo function ke andar hi hai.

// What is a Closure? When it is created?
// Ek aisa function jo ki return kre ek aur function aur andar wala function bahar wale function ke value ko use kre.

// function abcd(){
//     let firstName = "Abhishek";
//     let lastName = "Mahto";
//     return function(){
//         console.log(firstName, lastName);
//     }
// }
// abcd()();



// kya log krega?

// function outer(){
//     let count = 0;
//     return function (){
//         count++;
//         console.log(count);
//     };
// };
// const counter = outer();
// counter();
// counter();

// Ans: Increment krte hue numbers log krega 1, 2, ...



// Convert this normal function into IIFE
// function init(){
//     console.log("Initialized");
// }

// IIFE
// (function init(){
//     console.log("Initialized");
// })()

// What is the use case of IIFE? Name one real-world use case.
// let shery = (function(){
//     let score = 0;
//     return{
//         getScore: function (){
//             console.log(score);
//         },
//         setScore: function (val){
//             score = val;
//         }
//     }
// })();

// JavaScript Libraries aise hi banate hain

// What will be the output here and why?
// greet();

// let greet = function(){
//     console.log("Happy New Year");
// }

// Error aayega because of hoisting kyuki ye function expression hai


// What will be the output here and why?
// greet();

// function greet(){
//     console.log("Happy New Year");
// }

// Isme log hoga Happy New Year because of Hoisting kyuki ye Function declaration / statement hai 


// More Questions on Functions

// ------ Write a BMI calculator

// function bmi(weight, height){
//     return weight / (height * height)
// }
// console.log(bmi(69, 1.7).toFixed(2));


// ------- Create a reusable discount calculator (HOF)

// function discountCalc(dis){
//     return function(price){
//         return price - price * (dis / 100);
//     }
// }
// let ten = discountCalc(10);
// let twenty = discountCalc(20);

// console.log(ten(1000));
// console.log(twenty(200));


// ------------- counter with closures

// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// }
// let c = counter();
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());

// ------ Create a pure function to transform a value

// function double(val){
//     return val * 2;
// }
// console.log(double(10));


// - Use IIFE to isolate variables

// (function(){
//     let password = "secret password";
//     console.log(password);
// })();


// Common Confusions?
// -- Arrow vs regular function : this context.
// jab bhi aap functions bana rhe ho aap fat arrow function bana sakte ho koi problem nhi hai, siway ek jagah ke jab aap objects create kroge.
const obj = {
    value: 42,
    regular: function () { return this.value; },
    arrow: () => this.value
};
//  objects ke andar jab bhi aapke pass ek key hogi jiski value ek function hai, yeha pe aaj fat arrow function use nhi kr sakte kyuki yeha pe fat arrow function use krne se aapka this keyword value loose kr dega.

// -- Function hoisting and TDZ
greet(); // Works
function greet() {}

greet(); // Error
let greet = () => {}

// Difference between Closures & HOF 
// HOF -> Function returning function
// Closures -> Function returning function but returning function will use some variable of the parent function.

// - Scope chains and closure traps
// khudse find out krna ye.. 