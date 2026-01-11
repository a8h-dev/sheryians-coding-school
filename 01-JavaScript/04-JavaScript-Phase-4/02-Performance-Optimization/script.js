// # 2. Performance Optimization

// ------------- Debouncing and Throttling

// Debouncing -> aap koi action kar rhe ho and aap ye nhi cahte har action pe kuch ho, jab bhi mere actions ke beech me koi specific gap aa jaye toh fir reaction perform ho.

// For Example:

// mindset: ye sare code aajkal koi bhi haath se nhi likhta mostly sab GPT, Google, StackOverFlow se hi nikale jate hain. Code yaad krna nhi smjhna jruri hai.

// Overview:

// function debounce(fnc, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(function () {
//       fnc(...args);
//     }, delay);
//   };
// }

// let input = document.querySelector("input");
// input.addEventListener(
//   "input",
//   debounce(function () {
//     console.log("hey");
//   }, 1000)
// );

// Let's Understand it:

// let input = document.querySelector("input");

// function debounce(fnc, delay){
//     // Console proof ki debounce() chal chuka tha
//     // fnc(), delay dono yeha pe aa chuka hai page load hote hi
//     // console.log("hey");

//     // isiliye ham return krte hain ek aur function
//     // jab debounce() chala tab ye function return hokr debounce() ke jagah chala gya. Kyu? Kyuki return hone wali chiz function call pe wapis chali jati hai.

//     // toh jab bhi future me ham koi input krenge tab ye return wala function chalega. Kyu? kyuki debounce() ke jagah ye chala gya tha return hokr page load hote ke sath.

//     // Debounce kya hai: Tumhare current type kiye hue bande pe total gap hona chahiye itne ms ka.

//     let timer;

//     // ye ...args wahi hai jo ham event listener lagane ke baad jo dets/details accept krte hain na function (dets) {} aise, wahi dets hai ...args. Kaise? Kyuki ye return wala function return hokr niche call wala function me chala gya hai na toh dets bhi waha accpet krne ke bajaye yehi peaccept krna prega na kyuki uske jagah toh ab ye gya hai.

//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fnc(...args);
//         }, delay);
//     }
// }

// // -- debounce() jaise code pe kahi mila -> function turant chal chuka tha input nhi bhi kiya tha tab bhi. Ye react me bhi hota tha.
// input.addEventListener("input", debounce(function(){
//     console.log("Hey");
// }, 1000));

// Debouncing -> ek delay bataoge tum utna delay jab bhi aayega action ka reaction milega.

// --- Both kafi similar hai

// Throttling -> Intervel par chalunga, action agar hota rha and aapne ek interval bataya toh utne interval me apka event chalega.

// function throttle(fnc, delay){
//     let timer = 0;
//     return function(...args){
//         let now = Date.now();
//         if(now - timer >= delay){
//             timer = now;
//             fnc(...args);
//         }
//     }
// }

// let input = document.querySelector("input");
// input.addEventListener(
//   "input",
//   throttle(function () {
//     console.log("ran");
//   }, 1000)
// );

// // Din me 4-5 baar ache se dekho dono ache se smjhna cahte ho toh and always you can talk to chatGPT. There is no other way.

// // Code likhna toh ab baad ki chiz hai kyuki wo AI / Internet se mil hi jati hai. Asli engineer wali main baat toh ye hai ki aap code ko ache se smjha pao detail me ki code kaam kaise kar rha hai.

// ---------------------------------------------------------

// ------------- Lazy Loading Images (with IntersectionObserver)

// data- : ksii bhi naam ke aage data- laga doge toh ham iski value JavaScript me access kar pate hain.

// let imgs = document.querySelectorAll("img");
// console.log(imgs);

// const observer = new IntersectionObserver(function(entries, observer){
//     entries.forEach(function(entry){
//         if(entry.isIntersecting){
//             const img = entry.target;
//             img.src = img.dataset.src;
//             img.classList.add("loaded");
//             observer.unobserve(entry);
//         }
//     })
// }, {
//     root: null,
//     threshold: 0.1,
// })

// imgs.forEach(function(img){
//     // ye observer hame banana padta hai JavaScript me default nhi hota
//     observer.observe(img);
// });



// ---------------------------------------------------------

// ------------- Code Splitting (intro level)

// 2000 lines code -> Heavy
// 100 lines, 500 lines, hisse bana dete hain - jo jab jrurt padti hai tab load krte hain

// let btn = document.querySelector("button");
// btn.addEventListener("click", async function(){
//     // export import krne ke liye html ke script.js me type="module" rakhna jruri hota hai.
//     // Import() async code hota hai, load lene me time lega tabtak iske baad ka code chal jayega
//     // Isliye ham await lagate hain taki pehle ye line chale uske baad hi agla line chalega
//     // await ko use krne ke liye parent function ke aage async lagana jruri hai

//     // isse wahi import hoga jo heavy.js file se export kiya gya ho
//     let heavy = await import("./heavy.js")
//     heavy.veryHeavy();
// })


// ---------------------------------------------------------

// ------------- Avoiding unnecessary reflows and repaints

// Problem:

// yeha jitna baar li DOM me add hora hai DOM Tree refresh hora hai utna baar, ye kafi slow process hai kyuki ye kaafi websites ko real world scenerios me laagy, slow kar sakta hai.

// Iss chiz ko nhi karna hai, mtlb kabhi bhi aap DOM me direct change kr rhe ho, CSS me direct change kr rhe ho khoob saare toh wo nhi karna hai.

// const ul = document.querySelector("ul");

// for(let i = 0; i <= 100; i++){
//     const li = document.createElement("li");
//     li.textContent = i;
//     ul.appendChild(li);
// }


// Good Way:

// const ul = document.querySelector("ul");

// // ye memory (RAM) me ek space book kar dega
// const space = document.createDocumentFragment();

// for(let i = 0; i <= 100000; i++){
//     const li = document.createElement("li");
//     li.textContent = i;
//     // pehle space me append krlo
//     space.appendChild(li);
// }

// // fir last me ul me append kr do DOM Tree sirf ek baar update hua
// ul.appendChild(space);

// ab hamne 100,000 list banaye hain lekin kya ham unn sabko ek baar me hi dekh rhe hain ? -> No
// iss case me hamlog optimize krne ke liye sare elements ek sath load krte hi nhi hain.


// Best Optimized Way:
// Koi jrurt nhi hai 1 lakh elements ko ek sath load krne ki. 200, 250 elements se jada hame screen me ek time pe toh dikhne se rhe. 
// Toh ham is case me kya krte hain? : Hamlog sare elements load krte hi nhi hain, hamlog 200, 250 elements print krte hain fir hamara pura scroll ho jata hai fir ham agle 250 print krte hain, then so on. So is trike se karte hain isse hamare browser pe kabhi bhi ekdum se load nhi jata.
// But still document.createDocumentFragment(); is a faster way.


// ---------------------------------------------------------

// ------------- Memory leaks: timers, event listeners

let count = 0;
const int = setInterval(() => {
    if(count < 10){
        count++;
        console.log(count);
    }
    // hame lag rhaa bas ho gya lekin aisa nhi hai
    // 10 tak print krne ke baad bhi ye chal rha hai bus wo if ke condition ko survive nhi kr pa rha hai. Proof? Else lagakr dekhlo

    // that's the problem
    else{
        // console.log("still chal rha hai...");
        clearInterval(int);
        console.log("Finished");
    }
    // so aapko hamesha ye makesure krna padta hai ki aap hamesha apne timers ko clear kre.
}, 500);