// Events & Event Handling
// Imp me se bhi sabse imp hai ye

// browser me page par koi bhi harkat kro event raise ho jayega
// kuch screen pe ho aur aapko reaction dena ho toh us waqt aapko event handle krna aata chahiye

// **SYNTAX**
// element.addEventListener("event name", function(){
//     REACTION
// })

// **MAAN LO**
// event -> koi action hua
// event listener -> aapne koi action ka reaction diya


// ----------------- Event binding: addEventListener, removeEventListener

// **ADD EVENT LISTENER**
// let h1 = document.querySelector("h1");
// h1.addEventListener("click", function(){
//     h1.style.color = "red"
// })

// let p = document.querySelector("p");
// p.addEventListener("click", function(){
//     p.style.color = "green";
// })

// **REMOVE EVENT LISTENER**
// let p = document.querySelector("p");

// function dblclick(){
//     p.style.color = "yellow";
// }

// p.addEventListener("dblclick", dblclick);
// p.removeEventListener("dblclick", dblclick);

// **use ChatGPT Prompt**
// I am very confused that how many events are there in js, I want to know all the names whatever events are there, I mean all.
// - You really can't memorize all of that :)
// - Kabhi bhi yaad nhi kiya jata
// Everytime I type in the input what event is triggered
// And when the mouse comes to my div?? 
// - aise sikha jata hai
// When somebody types on the keyboard on the whole screen not anywhere specific or any input specific. Just on the website?
// .document // "keydown"
// - ratta nhi marna hai ji 
// - Jugaad ka khel hai

// ------------------- Common events: click, input, change, submit, mouseover, keyup

// **CLICK EVENT**
// let p = document.querySelector("p");
// p.addEventListener("click", function(){
//     p.style.color = "green";
// })

// **INPUT EVENT**
// let inp = document.querySelector("input");
// inp.addEventListener("input", function(dets){
//     if(dets.data !== null){
//         console.log(dets.data);
//     }
// })
// function me ham details accept kr sakte hain
 
// **CHANGE EVENT**
// change event tab chalta hai jab aapka koi input, select ya textarea mein koi change ho jaye

// let sel = document.querySelector("select");
// let h3 = document.querySelector("#deviceSel");

// sel.addEventListener("change", function(dets){
//     console.log(dets.target.value); // ratta nhi marna dets me khudse find krne aana chahiye jo bhi tumhe chahiye
//     h3.textContent = `${dets.target.value} Device Selected`;
// });

// **MINI PROJECT 1 -> KEY TYPED VIEWER**

// let view = document.querySelector("#view");
// // pure screen ko ham window kehte hain issliye
// window.addEventListener("keydown", function(dets){
    //     // console.log(dets);
    //     if(dets.key === " "){
        //         view.textContent = "Space";
        //     }
        //     else{
            //         view.textContent = dets.key;
            //     }
            // })
            
            
// **MINI PROJECT 2 -> CUSTOM FILE UPLOAD BUTTON**

// let btn = document.querySelector("#btn");
// let fileInp = document.querySelector("#fileInp");

// btn.addEventListener("click", function(){
//     fileInp.click();
// })
// fileInp.addEventListener("change", function(dets){
//     const file = dets.target.files[0];
//     if(file){
//         btn.textContent = file.name;
//     }
// })

// **SUBMIT EVENT**
// ==MINI PROJECT 2 -> Dynamic Data to Card==
// let form = document.querySelector("form");
// let input = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit", function(dets){
//     dets.preventDefault(); // Reload/Refresh na kre

//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img");
//     img.setAttribute(
//         "src",
//         input[0].value
//     );

//     let h3 = document.createElement("h3");
//     h3.textContent = input[1].value;

//     let h5 = document.createElement("h5");
//     h5.textContent = input[2].value;

//     let p = document.createElement("p");
//     p.textContent = input[3].value;


//     profile.appendChild(img);
//     card.appendChild(profile);
//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);  

//     main.appendChild(card);

//     input.forEach(function(inp){
//         if(inp.type !== "submit"){
//             inp.value = "";
//         }
//     })
// })

// **MOUSEOVER**
// let abcd = document.querySelector("#abcd");

// abcd.addEventListener("mouseover", function(){
//     abcd.style.backgroundColor = "yellow";
// })

// **MOUSEOUT**
// abcd.addEventListener("mouseout", function(){
//     abcd.style.backgroundColor = "red";
// })

// **MOUSEMOVE**
// window.addEventListener("mousemove", function(dets){
//     abcd.style.top = dets.y + "px";
//     abcd.style.left = dets.x + "px";
// })

// **KEYUP**
// window.addEventListener("keyup", function(dets){
//     console.log(dets);
// })

// ------------- Event object: target, type, preventDefault
// Event object: details jo function me receive hoti hain
// target:- details me hota hai, jiske uper function chalti hai
// type:- Event type kya tha 

// let abcd = document.querySelector("#abcd");
// abcd.addEventListener("click", function(dets){
//     console.log(dets);
// })

// preventDefault()
// mainly used in while submitting forms
// let form = document.querySelector("form");
// form.addEventListener("submit", function(dets){
//     dets.preventDefault();
//     // form ka jo default nature hai - reload karwana / submit karwana wo prevent ho jayega 
// })

// // -------------- Event bubbling and capturing

// // **EVENT BUBBLING**
// // rarely used
// // - jispe event aayega agar uspar listener nhi hua toh hamara event uske parent par listener dhundhega aur aisa krte karte uper ki taraf move krega - body -> html tags included
// // bubbling sirf ye nhi hoti ki agar event listener sirf ispe hua toh ispe ruk jayega. bubbling ye hoti hai ki agar ispe hua toh chalega firbhi chahe ispe event listener ho ya na ho fir bhi apne parent pe jayega. 

// // let nav = document.querySelector("#nav");
// // nav.addEventListener("click", function(){
// //     alert("clicked");
// // })

// // jaise ham yeha par button me click kr rhe hain tab bhi nav ka event chal ja rha hai. This is event bubbling.

// // **LETS CREATE SOMETHING**

// // let ul = document.querySelector("ul");
// // ul.addEventListener("click", function(dets){
// //     // target check kiya
// //     // console.log(dets.target)

// //     // dets.target.style.textDecoration = "line-through";
// //     dets.target.classList.toggle("lt");

// // })

// // **EVENT CAPTURING**
// // event bubbling se vice-versa

// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let btn = document.querySelector("button");

// // yeha phase 2 chal rhi hai
// // phase 1 kaise chal rhi hogi ? - jab maine button pe click kiya
// // jab maine button pe click kiya toh sabse pehle a pe / top element pe check hua hoga - kya uspe capture phase on hai
// // pehle capture phase chalta hai -> fir bubbling phase chalta hai
// // ab kyuki bubbling phase jo hai wo by default activated hota hai toh wo chal jata hai, capture phase aap on nhi karte ho toh wo nhi chalta
// btn.addEventListener("click", function(){
//     console.log("button clicked");
// });
// c.addEventListener("click", function(){
//     console.log("c clicked");
// }, true);
// b.addEventListener("click", function(){
//     console.log("b clicked");
// });
// // capture phase on kaise karna hai?
// // kisi bhi listener ke last me curly braces ke baad }, true); likh diziye
// a.addEventListener("click", function(){
//     console.log("a clicked");
// }, true);
// // ye capture phase on ho gya
// // toh pehle capture phase chalega fir bubbling phase chalega kyuki wo fir bydefault hota hai

// // **concept**
// // jab bhi aap click krte ho ya koi bhi event raise karte ho to aapka jo event-flow / propagation hai do phases me chalta hai.
// // Phase 1: event top level element se child / niche ki taraf ayega
// // Phase 2: event raised element se parent / uper ki taraf jayega
// // aur pehle Phase 1 hoti hai

// // capture phase on kardo toh cycle on ho jati hai
// // hamesha phase 1 hi pehle hoti hai par wo bydefault off rehti hai, agar ham usse on krde toh pehle phase 1 ka answer milega

// **Practice: 1**
// - Live character counter
// let inp = document.querySelector("input");
// let span = document.querySelector("span");
// inp.addEventListener("input", function(){
//     // span.textContent = inp.value.length;
//     // span.textContent = 20 - inp.value.length;
//     let leftCount = 20 - inp.value.length;
//     span.textContent = leftCount;

//     if(leftCount < 0){
//         span.style.color = "red";
//     }
//     else{
//         span.style.color = "#fff";
//     }
// })

// ------------------- Event delegation
// Study Yourself - hint: same as before

// **COMMON CONFUSIONS**

// - event.target vs event.currentTarget
// - Capturing phase vs bubbling phase

// Events vs Listener
// Event: Click, Input, Submit - kon sa event?
// Listener: function() - Action step.
// we can say the complete thing is a listener

// Capturing vs Bubbling
// Capturing: vice versa of bubbling (pehle ye hota hai but by default ye off hota hai hame isko }, true); krke on krna parta hai agar ham on karna chahe tab) // rarely used
// Bubbling: for example apka button click hua, agar uspar event listener hua toh ya nhi bhi hua toh bhi aapka listener uper jayega. Parent pe (ye bydefault on hota hai, lekin technically capturing ke baad hota hai kyuki capturing bydefault off hota hai toh dekhne se lagta hai ye pehle hua lekin agar ham capturing on kar de toh bubbling capturing ke baad hota hai) // mainly used