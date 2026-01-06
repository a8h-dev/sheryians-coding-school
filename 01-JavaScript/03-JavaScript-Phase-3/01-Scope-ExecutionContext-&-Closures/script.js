// ---------- Variable Scope: global, block, functional
// scope hai ki aap apne created variables and functions kaha tak use kr sakte ho


// functional scope: Wo chiz function ke andar hi use ho sakti hai
// Example: var ek function scope variable hai
// function abcd(){
//     var a = 12;
// }
// console.log(a);

// global scope: poore code me kahi bhi use ho sakti hai
// var a = 34;
// agar aapka code kisi bhi {} ke andar nhi hai toh aapka code global hai

// block scope: {} curly braces me hi use ho sakti hai
// {
    // let a = 56;
// }

// ----------- Execution context: memory creation & execution phase

// Execution context 
// js sabse pehle jaise hi aapka function dekhta hai sabse pehle js banata hai execution context, ye ek process hai jo different phases mein chalta hai, memory phase and execution phase.

// function abcd(){
//     var a = 12;
//     let b = 13;
//     let c = 14;

    // .......
    // man me ek dabba banega jisme sara code store hoga
    // ye hypothetical hota hai mtlb dekh nhi sakte

    // toh aap ye keh rhe ho kul milake
    // - function dikhte sath function chalane ke liye ek space allocate hota hai
    // - usme sare variables aa jate hain
    // - usme hi hamara code bhi aa jata hai
    // - aur code usi me chalta hai
    // - aur ye function ke sath hota hai

// }

// yehi dono ko Execution Context kehte hain
// Execution Context apne aap me thoda abstract hai, ek hypothetical scenerio hai... Dikhta nhi hai
// ye do different phases banati hai 

// Phase 1 - memory creation
// pehle memory phase hota hai
// variable ke liye space allocate hota hai

// Phase 2 - execution phase
// memory phase ke baad hota hai
// code chalata hai

// ------------ Lexical scope vs dynamic scope
// JS -> Lexical scoping (physically available)
// ki aap kaha par physically available ho ye poori tarike se depend karta hai ki aap ya access kar paoge.

// function abcd(){
//     let a = 12;
//     // a ki lexical scoping hai abcd() toh uske andar kahi bhi access ho jayega
//     function defg(){
//         console.log(a);
//     }
// }

// Dynamic scoping
// ye ham follow nhi krte hain JS me, but janne ke liye jaan lete hain
// toh basically ye hai 
// kaha se call kr rhe ho usme depend krega ki kya value milegi
// Ye JS me exist nhi karta

// smjhne ke liye example:
// let a = 12;
// function abcd(){
//     console.log(a);
// }
// function defg(){
//     let a = 13;
//     abcd();
//     // agar JavaScript dynamic scoped hoti toh
//     // yeha pe physically a = 13 available hai wo chalti defg() me
//     // JS agar dynamically scoped hota toh -> jis function ke andar call kiya hai usi function ka variable use hota
//     // lekin aisa nhi hota
//     // isliye js me dyamic scoping nhi hoti
// }
// defg();

// ----------- Closure definition and how variables are preserved
// Closure definition
// Closures hote hain functions jo ki kisi parent function ke andar ho aur andar wala function return ho rha ho, and returning function use kre parent function ka koi variable

// concept wise, ye pura closure hai 
// function abcd(){
//     let a = 12;
//     return function(){
//         console.log(a);
//     }
// }

// faide nuksaan par baatcheet

// faide
// private variable kr sakte ho (main faida)
// global polution rok sakte ho

// how variables are preserved
// function abcd(){
//     let a = 12;
//     return function(){
//         console.log(a);
//     }
// }
// let fnc = abcd();
// fnc();

// intresting kyuki ->
// aapne abcd() ko call kiya
// toh return kiya ek function
// for wo returned function ko jab aapne chalaya
// toh usne a print kiya lekin tabtak a toh khtm ho chuka tha abcd() ke sath (kyuki a lexically abcd() ke andar hai) mtlb abcd jab khtm ho gya tab a bhi khtm ho gya
// fir toh returned function ko undefined print karna chahiye tha?

// ab smjhte hain ->
// ye sach hai function ke khtm hone pe aapka function and uske variables khtm ho jate hain, par jab bhi closure banta hai to aapka function aur uske variables ka ek backlink banaya jata hai aur uska naam hota hai [[environment]]
// [[environment]] isi ke andar banklink save hota hai

// --------- Use cases: private counters, encapsulation
// **private counters**
// function countForMe(){
//     let c = 0;
//     return function(){
//         c++;
//         console.log(c);
//     }
// }
// countForMe();
// countForMe() chalne se kuch nhi hoga
// kyuki countForMe() chalne se ek variable bana hoga - haan
// return hua hoga ek function - haan
// returning function me c ka use hua
// jaise hi returning function me c ka use hua, kyuki c parent ka ek variable hai turant ke turant JavaScript ne iska backlink bana diya hoga - haan
// ki c ki copy kahi save ho gyi hogi - haan [[environment]] me

// lekin returning function toh chala nhi 
// countForMe() function call krte hi ek uske jagah pe returning function aa gya jisko ham save kr sakte hain fir chala sakte hain
// let fnc = countForMe(); // iska apna execution context hai
// fnc();
// // accha aise - haan
// fnc();
// fnc();

// let fnc2= countForMe(); // iska apna execution context hai
// fnc2();
// fnc2();
// fnc2();
// fnc2();
// fnc2();

// **encapsulation**
// encapsulation hai apna main inner logic hide kr lena aur sirf un chizon ka access dena jin chizon ki aapko jrurt hai

// function clickLimiter(){
//     let click = 0;
//     return function(){
//         if(click < 5){
//             click++;
//             console.log(`clicked: ${click} times`);
//         }
//         else{
//             console.error("LIMIT EXCEEDED, TRY AFTER SOMETIME");
//         }
//     }
// }
// let fnc = clickLimiter();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();

// users bahar se function ke andar ke click ka value change nhi kar sakte

// # Practice:
//     - Build a counter with increment / decrement
//     - Create a function that "remembers" config options

// toster --
// function createToaster(config){
//     return function(notification){
//         let div = document.createElement("div");
//         div.className = `fixed ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none ${config.positionX === "right" ? "right-10" : "left-10"} ${config.positionY === "top" ? "top-10" : "bottom-10"}`;
//         // ye sahi trika toh nhi hai kaam chalane wla trika hai css likhna

//         div.textContent = notification;
//         document.body.appendChild(div);

//         setTimeout(() => {
//             document.body.removeChild(div);
//         }, config.duration*1000)
//     }
// }

// let toaster = createToaster({
//     positionX: "right",
//     positionY: "bottom",
//     theme: "dark",
//     duration: 3,
// })

// toaster("I turn ideas into code !");

// Recreated: Taught this time

function createToaster(config){
    return function(notification){
        let div = document.createElement("div");
        div.textContent = notification;
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;
        document.querySelector(".parent").appendChild(div);

        if(config.positionX !== "left" || positionY !== "top"){
            document.querySelector(".parent").className += ` ${config.positionX === "right" ? " right-5" : " left-5"}
            ${config.positionY === "bottom" ? " bottom-5" : " top-5"}`
        }

        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration * 1000)
    }
}
let toaster = createToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "dark",
    duration: 3,
});
toaster("Download Done");
setTimeout(() => {
    toaster("A8H Accepted Your Request !");
}, 2000)
setTimeout(() => {
    toaster("Abhishek Accepted Your Request !");
}, 3000)