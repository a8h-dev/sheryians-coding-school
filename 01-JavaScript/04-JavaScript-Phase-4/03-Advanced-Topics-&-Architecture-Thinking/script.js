// 03 - Advanced Topics & Architecture Thinking

// ---------------------------------------------------------

// ------------- Separation of concerns (DOM vs logic)

// DOM ka code and logic ka code alag rehna chahiye
// Separation of concerns
// Modularize code... Future me hamko kuch change krna pre toh ham bas uss particular chiz pe change kre.

// const ul = document.querySelector("ul");
// const btn = document.querySelector("button");


// ye logic work toh kar rha hai lekin ye kharab code hai. 
// Kyuki, yeha pe aapne addition perform kr rakha hai jo ki logic hai and baki aapne usko DOM ke sath mix kar rakha hai.
// abhi toh ye boht chota code hai isliye aap changes kr sakte ho easily lekin laakho lines ke code me ye ek kharab trika hota.

// Kya karna chahiye hame? : hamara sara logic ham alag likhenge
//  function add(n1, n2){
//     return n1 + n2;
//  }

// btn.addEventListener("click", function(){
//     const num1 = Math.floor(Math.random()*10);
//     const num2 = Math.floor(Math.random()*10);

//     let finalAdd = add(num1, num2);

//     const li = document.createElement("li");
//     li.textContent = finalAdd;
//     ul.appendChild(li);
// })

// // Ab iss code me DOM and Logic alag hai, 


// ---------------------------------------------------------

// ------------- Custom utilities (e.g., own implementation of map, deep clone)


// --- own implementation of map

// JavaScript me map function nhi hota toh ham khudka bhi map function bana sakte hain.

// map -> ek array ke top pe chalta hai and us array ke sabhi members us map function ke andar aate hain and map function ek naya array return krta hai and uss naye array me jo bhi map ne return kiya hoga wahi placed hota hai.

// make you own map function:

// const arr = [1, 2, 3, 4, 5];

// function myMap(arr, callback){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(callback(arr[i], i, arr));
//     }
//     return newArr;
// }

// // let ans = myMap([1,2,3,4], (num) => num + 2);
// let ans = myMap(arr, function(val){
//     return val + 2;
// })


// --- deep clone

// deep clone recommended video by Harsh Bhaiya: Deep Copy & Shallow Copy YouTube Video.


// ---------------------------------------------------------

// ------------- How JS works in browser (Event Loop, Web APIs, Call Stack)

// --- Call Stack (Execution Stack)

// JS single-threaded hai -> (synchronously chalti hai : ek ke baad ek and so on...) ek time par ek hi kaam karta hai.
// Jab tum function call karte ho -> wo stack ke top pe chala jata hai. 
// Function complete hone ke baad stack se nikal jata hai (pop ho jata hai).

// function a(){
//     console.log("a");
// }
// function b(){
//     a();
//     console.log("b");
// }
// function c(){
//     b();
//     console.log("c");
// }
// c();

// --- Web APIs
// window pe jo milti hai wo sari chizen Web APIs hoti hai
// console, setTimeout, setInterval, alert, prompt
// Ye sari chizen JavaScript ka part nhi hoti hai 
// Ye Web APIs hoti hai
// Basically these are given by browser not bascially by JavaScript.
// Isiliye node js me console aur ye baki sari chize directly dont work, work nhi krta wo khudki API hai alag se. Work nhi krte because wala pe system boht clear hai ki wo JavaScript supported hai web APIs supported nhi hai isliye wo sari chizen jo Web APIs  

// --- Event Loop

// Sync (one by one)
// Async (ksi ke liye rukna mat bas chalate jao jo jis order me complete ho jaye)

// Async Code : Example
// setTimeout(() => {
//     console.log("Hey1");
// }, 1000);
// setTimeout(() => {
//     console.log("Hey2");
// }, 1200);
// setTimeout(() => {
//     console.log("Hey3");
// }, 500);
// setTimeout(() => {
//     console.log("Hey4");
// }, 4000);

// setTimeout() Web APIs ke through aata hai. 
// toh hame kaha jata hai ki jo bhi Web APIs ke through chizen chalti hain wo jab bhi complete hoti hai ham unhe dalte hain callback queue me jise ham task queue bhi kehte hain.
// Callback Queue / Task Queue : Maan lo tumhe 5s ke setTimeout krke kuch print karana hai toh wo 5s puri hone ke baad yehi Task Queue me aakr wait krta hai Callstack ke khali hone ka. 
// Callstack : jo bhi chizen call stack me hoti hain usey hi chalaya jata hai.
// Event Loop : iska kaam hai lagatar dekhna ki kya callstack khali ho gya hai?

// MINDSET.
// Architecture kaisa banega. This is where big money comes. 
// HotStar / NetFlix : Kya aapko pata hai directly sirf coding nhi hoti, aapko pura architecture banana parta hai ki aapka app kaisa chalega, kya use krenge. Architecture of the complete tech stack, complete network kaise chalega, kaise kaise data jayega and everything else. 
// Aage jaake aapko apne career pe 100% isko kabhi na kabhi padhna hi pdega. Boht hi ache level pe.


// Performance 
// Debugging
// Aise boht chizen sikhni hain aage...
// JavaScript YouTube Ends Here... 
// Thanks to me for being with me till here.