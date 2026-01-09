// // Think like a asli engineer // Design Patterns

// // # 1. Design Patterns in JavaScript

// // ------------------- Module Pattern (IIFE)

// // Module Pattern ek design pattern (code ko likhne ka trika) hai jisme ham apna code ek self executing function (IIFE) ke andar likhte hain, taki variables aur functions private rahen.

// // Iske andar se ham sirf wahi cheezen return karte hain jo bahar use karni hain.

// // Is pattern ka main fayda hai data hiding (encapsulation) aur clean structure, taaki code secure, reusable aur manageable ban sake.
// // -------------


// // (IIFE) 
// // IIFE ke andar ki chizen private hain unko bahar use nhi kar sakte
// let Bank = (function(){
//     let bankBalance = 12000;

//     function checkBalance(){
//         console.log(bankBalance);
//     }
//     function setBalance(val){
//         bankBalance = val;
//     }
//     function widhdraw(val){
//         if(val<=bankBalance){
//             bankBalance-=val;
//             console.log(`${bankBalance} left after Withdraw`)
//         }
//     }
//     // isme jo bhi return krenge wo bahar chala jayega 
//     return {
//         checkBalance,
//         setBalance,
//         widhdraw,
//     }
// })();

// Bank.checkBalance();
// Bank.widhdraw(11000);
// Bank.checkBalance();

// // Conclusion:
// // Module Pattern me jo bhi banaoge IIFE ke andar banaoge, wo private ho jata hai aur aapko IIFE ke andar se return krna pdta hai ek object aur aapko jo jo bahar access karana hai uss object me wo wo daal do.
// // FOR EXAMPLE: Yeha mujhe bankBalance diretly access nhi karana hai toh usko return nhi kiya maine.




// --------------------------------------------------------------

// --------------------- Revealing Module Pattern

// Bilkul similar hai Module Pattern (IIFE) se

// let Bank = (function(){
//     let bankBalance = 12000;

//     function checkBalance(){
//         console.log(bankBalance);
//     }
//     function setBalance(val){
//         bankBalance = val;
//     }
//     function widhdraw(val){
//         if(val<=bankBalance){
//             bankBalance-=val;
//             console.log(`${bankBalance} left after Withdraw`)
//         }
//     }
//     return {
//         // Bas yeha pe thoda sa change hai
//         // Revealing Module Pattern me sirf ek farak aata hai ki aap jo object bhej rhe ho usko kis name se bhej rhe ho ye decide krte ho.
//         check: checkBalance,
//         set: setBalance,
//         draw: widhdraw,
//     }
// })();

// // Aur access bhi apne set kiye hue name se bhi karte ho
// Bank.check();
// Bank.draw(8000);
// Bank.check();
