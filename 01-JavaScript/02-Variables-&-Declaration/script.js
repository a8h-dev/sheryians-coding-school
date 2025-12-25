// -- var, let, const — line-by-line comparison

// // a = 12; Ganda trika to create variables
// var a;
// var a = 12;
// let a;
// let a = 12;
// // const a; Error
// const a = 12;

// // Declarations & Initialization
// var a; // Declare Karna
// var a = 12; // Declare & Initialize

// var a = "Abhishek";
// // -- Window me add hota hai
// // -- function scoped hota hai
// // -- aap firse declare kar sakte ho same name se & error nhi ayega.

// var a = 12;
// var a = 13; // No error

// // let a = 12;
// // let a = 13; // Error

// const discount = 12;
// const dulha = "Lab";
// const dulhan = "Laby";

// var 
// -- Window me add hota hai
// -- functional scoped hota hai
// -- can be redeclared

// -- Scope (global, block {}, functional)

// // Global Scope
// var a = 12; // Pure code me kahi bhi use ho sakta hai

// // Block Scope
// {
//     // Functional Scoped
//     var b = 12; // Var block ka respect nhi karta kyuki wo functional scoped hota hai.
//     // Hamara pura code ek function ke andar jata hai baad mein isliye ye code bhi block hone ke bawjood pure code me use hoga - just because ye function ke andar nhi hai.

//     // Block Scoped
//     let userName = "Abhishek"; // Sirf block ke andar hi use ho sakta hai.
// }

// // functional scoped
// function abcd(){
//     if(true){
//         var c = 12;
//     }
//     let age = 19; // ye bhi sirf isi function me use hoga kyuki yeha block hua hai.
// }


// -- Reassignment, redeclaration

// var a = 12; // Initialize
// a = 32; // Reassignment Possible with var
// var a = 56; // Redeclaration possible with var

// let b = 12; // Initialize
// b = 32; // Reassignment Possible with let
// // let b = 56; Redeclaration not possible with let

// const c = 45; // Initialize
// c = 45; // Reassignment not possible with const
// // const c  = 56; // Redeclaration not possible with const


// -- Temporal Dead Zone
// // utna area jitne me js ko pata toh hai ki variable exist karta hai par wo aapko value nhi de sakta.
// // let and const me hota hai ye
// // var hoist ho jata hai -- Var me Temporal Dead Zone nhi hota hai 

// console.log(a);





// var gopiBahu = "laptop_dho_dungi_bas_tum_kaho";

// let c = 23;


// let a = 12;


// -- Hoisting impact per type
// // Hoisting -> Ek variable ko jab JS me banate hain to wo variable 2 hisso me tut jata hai and uska declare part uper chala jata hai and uska initialization part neeche reh jata hai.
// // Hoisting teeno me hota hai var let const


// console.log(a);

// var a = 12; 
// // var a = undefined; // moves on top and var hai gopi bahu isliye undefined ko print kr deta hai
// // a = 12;


// console.log(b);

// let b = 56; 
// // let b = undefined; // moves on top lekin let hai thoda strict toh wo kehta hai cannot access before initialization
// // b = 12;


// // Initialiation hi kyu?
// // Kyuki :

// // let b = 56;
// // let b = undefined; // Declaration
// // b = 56; // Initialization

// var -> hoist -> undefined
// let -> hoist -> Cannot Access Before Initialization
// const -> hoist -> Cannot Access Before Initialization