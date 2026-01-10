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




// --------------------------------------------------------------

// --------------------- Factory Function Pattern
// Ek function banate ho jo objects create karta hai (factory = object banane ki machine)

// Factory Function Pattern ek aisa design pattern hai jisme ham ek simple function likhte hain jo naye objects banakar return karta hai, bina class ya new keyword use kiye.

// Is pattern ka main idea hai -> object creation ko ek function ke through control karna.

// Har baar jab tum factory function call krte ho, tumhe ek naya object milta hai jisme apne methods aur (agar chaho to) private data ho sakta hai.

// Yeh pattern specially useful hai jab tumhe ek hi type ke bohot sare objects chahiye, jaise users, products, tasks, etc.

// function createProduct(name, price){
//     let stock = 10;
//     return {
//         name,
//         price,
//         checkStock(){
//             console.log(stock);
//         },
//         buy(qty){
//             if(qty <= 10){
//                 stock -= qty;
//                 console.log(`${qty} pieces booked - ${stock} pieces left.`);
//             }
//             else{
//                 console.error(`We only have ${stock} pieces left.`)
//             }
//         },
//         refill(qty){
//             stock += qty;
//             console.log(`refilled the stock - ${stock} pieces now.`);
//         }
//     }
// }

// let iphone = createProduct("iphone", 70000);
// let kitkat = createProduct("kitkat", 10);
// iphone.buy(6);




// --------------------------------------------------------------

// --------------------- Observer Pattern (basic pub-sub)

class YoutubeChannel{
    constructor(){
        this.subscribers = [];
    }
    subscribe(user){
        this.subscribers.push(user);
        user.update(`${user.name}, You have subscribed the channel.`);
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter((sub) => sub !== user);
        user.update(` ${user.name}, You have un-subscribed the channel.`);
    }
    notify(message){
        this.subscribers.forEach((sub) => sub.update(message));
    }
}

class User{
    constructor(name){
        this.name = name;
    }
    update(data){
        console.log(`${this.name}, ${data}.`);
    }
}

let sheryians = new YoutubeChannel();
let user1 = new User("Abhishek");
let user2 = new User("Amit");

sheryians.subscribe(user1);
sheryians.subscribe(user2);

sheryians.notify("new video is live on the channel...");
sheryians.notify("we are closing the channel, because it's april 1st");

// RESEARCH TIP: jao chatGPT se baate kro usse, new chizen create kro, aur chizen sikho.