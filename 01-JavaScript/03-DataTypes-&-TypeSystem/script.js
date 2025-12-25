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