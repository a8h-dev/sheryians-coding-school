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

let view = document.querySelector("#view");
// pure screen ko ham window kehte hain issliye
window.addEventListener("keydown", function(dets){
    // console.log(dets);
    if(dets.key === " "){
        view.textContent = "Space";
    }
    else{
        view.textContent = dets.key;
    }
})

