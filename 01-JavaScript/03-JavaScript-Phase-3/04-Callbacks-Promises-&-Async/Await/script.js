// Callbacks, Promises & Async/Await

// const { use } = require("react");

// koi bhi code js mein line by line chalega aur ye natural pattern bhi hota hai ki code line by line chale, but kabhi kabaar aise cases aate hain life me jaha par aapka code wait krta hai and utni der me agla code chal jata hai.

// Example:
// console.log("Hey 1");
// console.log("Hey 2");
// setTimeout(() => {
//     console.log("Hey 3");
// }, 2000);
// console.log("Hey 4");

// ------------- Synchronus vs asynchronous JS

// **Synchronus**
// aisa code jo line by line chale hota hai sync code

// **Asynchronous**
// aisa code jo jab chalne ke liye ready ho jaye tab chale wo hai async code

// ye hame kaam krte krte smjh ayega

// ------------- Callback patterns and callback hell

// **Callback**
// ek function ko agar aap ek aur function bhej de rhe ho parameter me to wo paramter wala function kehlata hai callback

// function kuchDerBaadChalunga(fnc){
//     setTimeout(fnc, Math.floor(Math.random()*20) * 1000);
// }
// Math.random() - value deta hai 0 se 1 ke beech me (point me)
// Math.floor() - point ke baad wale digits ko hatane ke liye
// kuchDerBaadChalunga(function(){
//     console.log("hey");
// });
// ---------------------

// // **IMP INFO BY HARSH BHAIYA**
// // normal website ka time ja chuka hai (agle 2-3 salo me developers normal websites ke liye hired hona na ke barabar ho jayenge) abb modern frontend, storytelling websites ka time aa chuka hai. 
// // Apko kuch next level crazy things sikhni pregi
// // for that there is something called ThreeJs, GSAP, GLSL
// // ye sabkuch hame sikhna chahiye, webflow me hame apna time, money, energy dalna chahiye
// // Highly recommened ki un sab chizon ko padho.
// // see website: otherlife.xyz -> ye hain future ki websites -> YE HAI AGENCY LEVEL KA KAAM

// ------------------------

// // **callback hell**

// // Purani technique hai
// // pehle promises and async/await wagera exits nhi krte the
// // toh hame ek operation hone ke baad, dusra, teesra, chautha, operation hone ke baad kuch krna hai toh usko callbacks ke andar -> callbacks ke andar -> callbacks ke andar kiya jata tha.


// // jo asli developer wali duniya ham jiyenge usme ye profileLekrAao() wala function hamare pass nhi hota ye hota hai library me.
// // example:
// // mongoose.connect("aaljsndans", function(data){
// // console.log(data);
// // })

// function profileLekrAao(username, cb){
//     console.log("Fetching Profile Data...")
//     setTimeout(() => {
//         cb({_id: 12122, username, age: 26, email: "huihui@hui.com"});
//     }, 2000);
// }
// function sarePostLekrAao(id, cb){
//     console.log("Fetching All Posts...");
//     setTimeout(() => {
//         cb({_id: id, posts: ["hey", "hello", "Good morning"]})
//     }, 3000);
// }
// function savedPostsNikaalo(id, cb){
//     console.log("Fetching saved posts...")
//     setTimeout(() => {
//         cb({_id: id, saved: [1, 2, 3, 4, 5, 6, 7, 8]});
//     }, 3000);
// }

// // and we code like this
// // this type of christmas tree is called Callback Hell
// // ek callback ek andar -> dusre callback -> andar -> teesre callback and so on.
// // aisa code aajkal koi utna likhta nhi hai beacuse we have now promises, async/await
// // purane code ya legacy code me ye pattern dikh sakta hai
// profileLekrAao("Abhishek", function(data){
//     console.log(data);
//     sarePostLekrAao(data._id, function(posts){
//         console.log(posts);
//         savedPostsNikaalo(data._id, function(saved){
            
//         });
//     });
// }); 
/// yeha tak comment hai
// CALLBACK-END________________________-

// PROMISES__________________________________
// ----------- Promises: resolve, reject, then, catch
// Promises kya hain?

// aap ek promise banate ho jo ki do states me se ek state me ja sakta hai and wo ya to resolve hoga ya to reject hoga ab wo kya hoga ye to waqt batayega par hame dono ke liye code likhna parta hai.

// LISTEN CAREFULLY
// -----------------
// // ek promise bana
// // promise asynchronus code hota hai, baad me chalega
// // ab kab chal rha hai ye 3 sec ke baad, 3 sec ke baad kya hoga ki ek random number niklega 0 - 10 ke beech me
// // jo bhi number hai agar wo 5 se bada hua toh resolve chal jayega aur wo number jo bhi tha wo hamne pass kr diya
// // agar wo number bada nhi hua toh else chal jayega reject ho jayega aur wo number bhi pass kr diya
// // ab 50-50 chances hain ki ya toh resolve chalega ya toh reject chalega
// // ab pr me hamara pura promise saved hai
// // is pr ki 3 state honge
// // 1. Pending, 2. Fulfilled with Resolve, 3. Fulfilled with Rejected


// let pr = new Promise(function(res, rej){
//     setTimeout(() => {
//         let rn = Math.floor(Math.random()*10);
//         if(rn>5) res("resolved with " + rn);
//         else rej("rejected with " + rn);
//     }, 3000);
// })

// // hamne yeha pe 2 states ko handle kiya hai, pending ki ham kabhi handle nhi karte
// // pr jab bhi resolve hua toh .then() chalega
// // toh jo bhi resolve me bhejte ho then ke function me wahi accept hota hai
// // toh hamara jo bhi number hoga usko ham console.log(krke print kr lenge).
// pr
// .then(function(val){
//     console.log(val);
// })
// .catch(function(val){
    //     console.log(val);
// })
    // // pr jab bhi reject hua toh .catch() chalega toh same isko waise print kr lenge 
    // // itni hi story hai, ham isko use krenge jab code me tab aapko behetar smjh me ayega.
// // how do we exactly use it in the real world smjhne ke liye banayenge kuch.
// ----------------

// ASYNC, AWAIT__________________________________
// ---------------- async/await syntax, error handling with try-catch
// ye aapko .catch .then in sabse bacha deta hai
// async, await ka sidha sapat mtlb yeh hai ki agar aapne kahi pe promise banaya hai
// Toh aap ek function banao ye function banana jruri hai 
// jada cleaner trika hai promises ko resolve reject handle krne ka
// function ke aage async word likh do
// ye async word likh diya toh aap andar await use kr paoge
// await kya karta hai? :- 
// await krta hai thik hai tum pehle complete ho jao uske baad agli line chalaunga.
// async await kehta hai aapke andar ke code ko try aur catch me rakho
// kyu rakho?
// agar resolve ho gya toh try kaafi rhega lekin agar galti se reject ho gya toh uska likha hua answer jo hai wo hamesha catch me jata hai
//
let pr = new Promise(function(res, rej){
    setTimeout(() => {
        let rn = Math.floor(Math.random()*10);
        if(rn>5) res("resolved with " + rn);
        else rej("rejected with " + rn);
    }, 3000);
})
async function abcd(){
    try{
        let val = await pr;
        console.log(val);
    }
    catch(err){
        console.log(err);
    }
}
abcd();

// Toh yeha pe system kahani kya hai?
// pr ek promise hai - ye future me kabhi chalega
// toh aap ek function banate ho uske uper async chipkate ho
// ab await likhte ho jo bhi promise hai uske just pehle
// ab jo bhi answer agar resolve hua toh uska answer val me aa jayega try ke andar
// agar promise reject hua toh uska answer catch me err me ayega
// aur aap usko print kr sakte ho
// toh dono cases iss trike se code hota hai
// try ke andar aap pura code likh dete ho await wala - agar ye chal gya properly toh thik 
// aur agar await wale line par kuch issues aa gye - toh aapka catch wala code chalu ho jata hai - which will basically make sure ki aapne waha pe reject kiya hoga toh ye catch ka code chalu ho jayega
// That's about it.
// Ab kuch banakr dekhna hai