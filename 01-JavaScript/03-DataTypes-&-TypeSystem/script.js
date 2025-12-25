// data types:
// data ka type

// 12 "Abhishek" true [] {} () null undefined NaN Symbol bigInt 

// primitive -> Aise sari values jinko copy krne par tumhe ek real copy mil jaye 
// -- string, number, boolean, null, undefined, symbol, bigInt

// reference -> Inko copy krne par aapko real copy nhi milegi par aapko reference milega parent ka
// -- arrays [], objects {}, functions ()

// male | female | others -- Data Types aise hi hai
// primitive | reference -- Data types inhi do me se kisi ek me fall krenge


// let a = 12; // number // primitive datatype
// let b = a;
// a = b + 3;
// console.log(a);

// let a = [1,2,3]; // array // reference datatype
// let b = a;
// b.pop();
// console.log(a);
// console.log(b);


// -- string, number, boolean, null, undefined, symbol, bigInt
// -- arrays [], objects {}, functions ()

// primitive datatype
// -- string, number, boolean, null, undefined, symbol, bigInt
// string
// '' - single quotes
// "" - double quotes
// `` - backticks

// number
// 12 - integer
// 12.3 - number

// boolean
// let a = true;
// let b = false;

// null
// null ka matlab hai aapne jaan bujhkr koi value nhi di.
// let selectedStudents = null; // mtlb koi student ko select nhi kiya hai

// undefined
// undefined ka matlab apne ek variable banaya aur usko value nhi di to jo value by default mili wo hai undefined 
// let a;



// symbol
// unique immutable value
// future me ham koi libraries use krenge ab is case me un libraries me kai baar kuch fields hoti hai jinse similar ham bhi bana dete hain aur galti se hamari banai hui fields us library ki original fields ko change kar deta hai

// let sheryjs = {
//     uid: 12,
//     model: "Abhishek"
// }
// sheryjs.uid = 1;

// let u1 = Symbol("uid");
// let u2 = Symbol("uid");
// u1 === u2 -> false

// let obj = {
//     uid: 1,
//     name: "Abhishek",
//     age: 12,
//     email: "test@gmail.com"
// };
// let u1 = Symbol("uid");
// obj[u1] = "001";


// bigInt
// Number.MAX_SAFE_INTEGER
// let a = 9007199254740991n;
// a = a + 32n
// console.log(a);


// reference datatype
// -- arrays [], objects {}, functions ()

// array
// let a = [1,2,3];
// let b = a;
// b.pop();
// console.log(a);
// console.log(b);

// object
// let a = {
//     name: "Abhishek"
// };
// let b = a;
// b.name = "Mahto";



// -- Dynamic typing
// js me static typing nhi hai and yeha par hai dynamic typing jiska mtlb hai aap data ko change kar sakte ho kyuki yeha par dynamic data types hain

// Other languages
// int a = 12;
// a = true // not possible in other languages because pehle hi keh diya hai a int hai toh usko boolean value nhi de sakte.
// but JavaScript me aisa nhi hai 

// Dynamic Typing in JavaScript
let a = 12; // number (primitive datatype)
a = true; // given boolean value (primitive datatype)
a = "Abhishek"; // given string value (primitive datatype)
a = []; // given array value (reference datatype)
a = null; // given null value (primitive datatype)
a = undefined; // given undefined value (primitive datatype)

// Which is better static typing or dynamic typing?
// Answer: Everybody in this world who understands programming will always say static typing is better the reason is because you always know that the value will be integer.

// Dynamic Typing good for beginners but after that Type base things are better like TypeScript after JavaScript.




// -- typeof quirks (e.g. typeof null === 'object')