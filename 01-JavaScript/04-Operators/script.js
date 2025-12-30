// Operators

// -- Arithmetic, comparison, assignment, logical, unary, ternary

// + - * / % **
// == === != !== >= <= < > 
// = += -= *= /= %=
// && || ! !!
// + - ! typeof ++ -- // ek value pe lagte hain
// ? : // condition ? true ka code : false ka code ;


// instanceof (kon h duniya ka papa)
// variable instanceof Array (Identity) ?
// it works only with reference values

// let x = 20;
// let y = 20;

// if(x > 5 && y < 25){
//     console.log("A");
// } else{
//     console.log("B");
// }
// // Answer: A

// let isAdmin = true;
// let isLoggedIn = false;

// if (isAdmin || isLoggedIn){
//     console.log("Access granted");
// } else{
//     console.log("Access denied");
// }
// // Answer: Access granted

// let temp = 35;

// if (!(temp < 30)){
//     console.log("Hot");
// } else{
//     console.log("Pleasant");
// }
// // Answer: Hot

// let a = 0;

// if(a){
//     console.log("Truthy");
// } else{
//     console.log("Falsy");
// }
// // Answer: Flasy

// let score = 25;

// let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";
// console.log(grade);
// // Answer: B if 78, Fail if 25

// let points = 120;

// let status = points > 100 ? "Gold" : points > 50 ? "Silver" : "Bronze";
// console.log(status);
// // Answer: Gold

// let loggedIn = true;
// let hasToken = false;

// let access = loggedIn && hasToken ? "Allow" : "Deny";
// console.log(access);
// // Answer: Deny

let a = 5;
a++;
console.log(a);
// Answer: 6

let b = 7;
++b;
console.log(b);
// Answer: 8

// imp
let x = 3;
let y = x++;
console.log(x, y);
// Answer: 4, 3

let p = 4;
let q = ++p;
console.log(p, q);
// Answer: 5, 5

let m = 10;
console.log(m--);
console.log(m);
// Answer: 10, 9

let n = 5;
let result = n++ + ++n;
console.log(result);
// Answer: 12

let likes = 100;

function likePost() {
    return ++likes;
}

console.log(likePost());
console.log(likes);
// Answer: 101, 101

let count = 5;

if (count-- === 5){
    console.log("Matched");
} else{
    console.log("Not Matched");
}
// Answer: Matched

// Suggestion by Harsh Sir
// Try to solve more and more questions, use chatGPT for questions.
// Jitna jada questions solve kroge utna acha rhega


// common confusions

// -- !!value for truthiness
// !!""      // flase
// !!"hello" // true
// !!0       // false
// !!1       // true

// -- Pre/post increment
let i = 1;
console.log(++i); // 2
console.log(i++); // 2 (but i is now 3)