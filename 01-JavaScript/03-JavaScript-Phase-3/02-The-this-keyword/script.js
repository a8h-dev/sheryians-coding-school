// this keyword
// special keyword hai
// kyuki jaise ki baaki saare keyword ki value ya unka nature same rehta hai this ki value ya nature badal jata hai is baat se ki aap usey kaha use kr rhe ho

// ------ this in global scope, function, method, event handler, class

// **global scope**
// global scope me this ki value window hoti hai
// console.log(this);
// window hai pradhaan mantri - supreme

// **function ke andar**
// function scope me this ki value window hoti hai
// function abcd(){
//     console.log(this);
// }
// abcd();

// **method**
// ek aisa function jo object ke andar ho usey ham method kehte hain
// method me this ki value wo pura object hota hai
// HOLY SHIT
// let obj = {
//     name: "Abhishek",
//     age: 19,
//     sayName: function(){
//         console.log(this);
//     }
// }
// obj.sayName();

// agar method me arrow function bana diya?
// toh method me arrow function lagane ke baad this apne object ke value ko loose kr dega aur wapis se window ke barabar ho jayega  
// let obj = {
//     name: "Abhishek",
//     age: 19,
//     sayName: () => {
//         console.log(this);
//     }
// }
// obj.sayName();

// agar method ke andar ek function aur bana diya toh?
// agar method ke andar ek function aur bana diya toh bhi this keyword ka value window ho jayega
// method ke andar function banakr bhi cahte hain ki this keyword ka value apna object hi rhe toh andar hamesha arrow function banao
// let obj = {
//     name: "Abhishek",
//     age: 19,
//     sayName: function(){
//         let defg = () => {
//             console.log(this);
//         }
//         defg();
//     }
// }
// obj.sayName();

// aisa kyu hai?
// arrow function hamesha apni value parent se lete hain

// **event handler**
// event handler me this hamesha wahi banda hoga jisme addEventListener laga hai
// document.querySelector("h1").addEventListener("click", function(){
//     console.log(this.style.color = "red");
// })

// **class**
// class ke andar this ki value blank object hoti hai jab aap usko new keyword ke sath call krte ho
// class Abcd{
//     constructor(){
//         console.log("heyhe");
//         this.a = 12;
//     }
// }

// let val = new Abcd();

// **Summary of this keyword**
// this ki value in different conditions

// global - window
// function - window
// method with es5 function - object
// method with es6 arrow function - window
// es5 function inside es5 method - window
// arrow function inside es5 methos - object
// event handler - element
// class - blank object


// ------------ Arrow functions and lexical this
// Arrow Functions: Inka apna koi this nahi hota. Ye apne surrounding context (parent scope) se this ko inherit karte hain. Isse hi Lexical this kehte hain. 
// let obj = {
//     sayName: () => {
        
//     }
// }


// -------------- Manual binding: bind, call, apply

// ek smjhne wali chiz
// this, call, apply, bind --> ye sab sath me padhe jate hain
// this hamne padh liya hai

// bind, call, apply
// function ko call krte waqt aap set kr sakte ho ki uski this ki value kya hogi -> iske liye hi hame bind, call, apply pdhni hai

// **call**
// let obj = {
//     name: "Abhishek",
//     age: 19,
// }
// // ham cahte hain ye function ke andar this ki value jo window hai uski value kisi object ke barabar ho jaye
// function abcd(){
//     console.log(this.age);
// }
// // solution
// // yaad rakho hamesha function hi call hota hai
// abcd.call(obj);

// man me duvidha
// jab same kaam krte hain toh alag kyu banaya?

// baki parameters kaise bhejenge?
// let obj = {
//     name: "Abhishek",
//     age: 19
// }
// function abcd(a, b, c){
//     console.log(this, a, b, c);
// }
// abcd.call(obj, 1, 2, 3);

// **apply**
// agar aap ek se jada parameter bhej rhe ho jo ki aap bhej rhe ho
// toh aap sirf 2 parameters bhej sakte ho ek this ki value jo bhi apko rakhni hai aur dusra array me
// bas itna hi farak hai - haan
// rarely used
// let obj = {
//     name: "Abhishek",
//     age: 19
// }
// function abcd(a, b, c){
//     console.log(this, a, b, c);
// }
// abcd.apply(obj, [1, 2, 3]);

// **bind**
// same hai call ki tarah lekin thoda sa farak hai
// ye chalta nhi hai jaha par bhi likhoge waha par ek new function de deta hai
// let obj = {
//     name: "Abhishek",
//     age: 19
// }
// function abcd(a, b, c){
//     console.log(this, a, b, c);
// }
// let fnc = abcd.bind(obj, 1, 2, 3);
// fnc();

