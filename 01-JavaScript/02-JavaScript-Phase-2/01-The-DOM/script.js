// The DOM
// DOM - Document Object Model
// Pure web page pe jitna kuch aap dekh rhe ho sab DOM hai.

// DOM = body

// Demo
// boy-coy.com

// DOM Manipulation (Requirements)
// - HTML se element select karna
// - text badalna
// - html badalna
// - css badalna
// - attribute badalna
// - event listeners
// - bhar bhar ke common-sense/bheja la use krna

// ----------------- Selecting elements: getElementById, getElementByClassName, querySelector, querySelectorAll

// getElementById, getElementByClassName -- Purane trike
// querySelector, querySelectorAll -- Aajkal ye use hota hai

// let abcd = document.getElementById("abcd");
// ye node nikalke dega
// console.log(abcd); // element jaisa format me dikha sakta hai
// console.dir(abcd); // opening format me bana deta hai

// let abcd = document.getElementsByClassName("abcd");
// console.log(abcd);


// let abcd = document.querySelector("h1");

// let abcd = document.querySelectorAll("h1");
// console.dir(abcd);

// ------------------- Text/content access: innerText, textContent, innerHTML
// let h1 = document.querySelector("h1");
// console.dir(h1); // common sense lagakr dekho ki h1 me hai kya
// objects ke form me dikh rha hai lets change
// h1.textContent = "Hello Abhilasha kaise ho";
// h1.innerHTML = "<i> Hey </i>"

// hide and show element through DOM Manipulation
// h1.hidden = true;
// h1.hidden = false;

// ---------------- Attribute manipulation: getAttribute, setAttribute, removeAttribute
// attribute kya hai? Smjhte ho na?

// let a = document.querySelector("a");
// let img = document.querySelector("img");

// getAttribute
// console.log(a);
// a.href = "https://www.a8h.dev";

// setAttribute
// a.setAttribute("href", "https://www.a8h.dev")
// img.setAttribute(
//     "src",
//     "https://images.unsplash.com/photo-1767103431751-58ddefddc370?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// )

// removeAttribute
// let a = document.querySelector("a");
// a.getAttribute("href");
// a.removeAttribute("href");

// -------------- Dynamic DOM manipulation: createElement, apppendChild, removeChild, prepend

// createElement
// let h1 = document.createElement("h1");
// h1.textContent = "Ghar par jao khana khao";
// console.log(h1);

// prepend -> pehle , append -> baad me
// jaha bhi elements chahiye waha

// apppendChild
// document.body.appendChild(h1);
// document.querySelector("body").append

// prepend
// document.body.prepend(h1);
// document.querySelector("body").prepend(h1);

// removeChild
// let h1 = document.querySelector("h1");
// h1.remove();

// let h1 = document.createElement("h1");
// h1.textContent = "Hey main bahar se aaya hu";
// document.querySelector("div").prepend(h1);
// document.querySelector("div").append(h1);

// --------------- Style updates via .style and classList (add, remove, toggle)

// let h1 = document.querySelector("h1");
// js se CSS badalna

// console.dir(h1);
// h1.style.color = "red";
// // h1.style.backgroundColor = "yellow";
// h1.style.font = "Gilroy";
// h1.style.textTransform = "capitalize";

// recommended method
// classList add() method
// h1.classList.add("hulu");
// h1.classList.remove("hulu");
// h1.classList.toggle("hulu");


// ------------- Practice Questions

// What is the DOM? How does it represent the HTML structure?
// DOM -> Document Object Model
// &
// It represents the complete HTML structure as a Tree
// and everything is a node

// Name the types of nodes in the DOM tree.
// element node, text node, comment node

// What's the difference between an element node and a text node?
// element node -> whole tag
// text node -> content inside a tag

// Inspect the following HTML in the browser and identify each node:
// <div>
//        Hello <span>World!</span>
// </div>
// div is a element node
// Hello is text node
// span is element node
// World! is text node

// What is the difference between getElementById and querySelector?
// // getElementById -> sirf ID ka naam mangta hai
// document.getElementById("demoId") // no # is needed
// // querySelector -> multipurpose -- id, tag, class, attribute
// document.querySelector("#demoId") // # is needed

// What does getElementByClassName return? Is it an array?
// let cl = document.getElementsByClassName("color");
// console.log(cl);
// getElementByClassName actually returns HTML collection
// no it isn't array

// Use querySelectorAll to select all buttons with class ".buy-now"
// let buyNow = document.querySelectorAll(".buy-now");
// console.log(buyNow);

// T1: Select the heading of a page by ID and change its text to "Welcome to Sheryians !"
// let heading = document.querySelector("#shery");
// heading.textContent = "Welcome to Sheryians !";

// Select all <li> elements and print their text using a loop.
// let lis = document.querySelectorAll("li");
// way 1
// lis.forEach(val => {
//     console.log(val.textContent);
// })
// way 2
// for(let i = 0; i < lis.length ; i++){
//     console.dir(lis[i].textContent);
// }

// What's the difference between innerText, textContent, and innerHTML?
// innerText and textContent are very similar -> only text inside the element, can't read HTML tags only prints it directly
// innerHTML -> can read HTML tags

// When should you use textContent instead of innerText?
// textContent -> sara content nikalta hai irrespective wo display none hai ya nhi
// faster
// recommended
// innerText -> wo content hi nikalta hai jo visible hai 
// slower

// Select a paragraph and replace it's content with:
// <b> Updated </b> by JavaScript
// let para = document.querySelector("#para");
// para.innerHTML = "<b> Updated </b> by JavaScript";

// How do you get the src of an image using JavaScript?
// let img = document.querySelector("img");
// // way 1
// console.log(img.src);
// // way 2
// console.log(img.getAttribute("src"));

// What does setAttribute() do?
// attribute ka value change krne ke liye
// document.querySelector("img").setAttribute("src", "https://m.media-amazon.com/images/I/61mhBXHRZAL._AC_UF894,1000_QL80_.jpg");

// Select a link and update its href to point to https://sheryians.com
// let link = document.querySelector("a");
// // way 1 
// link.href = "https://www.sheryians.com";
// // way 2
// link.setAttribute(
//     "href",
//     "https://www.sheryians.com"
// )

// Add a title attribute to a div dynamically.
// let div = document.querySelector("div");
// div.setAttribute(
//     "title",
//     "hololololololololololo"
// );

// Remove a disabled attribute from a button.
// let btn = document.querySelector("button");
// btn.removeAttribute("disabled");

// What does createElement() do? What's returned?
// created an new element through JS
// let h1 = document.createElement("h1");
// returned a blank element

// What's the difference between appendChild() and prepend();
// appendChild() -> hamesha last me / bottom pe add krta hai node ko
// prependChild() -> hamesha suru me / top pe add karta hai node ko

// Can you remove an element using removeChild()?
// Yes we can.
// document.querySelector("div").removeChild("button"); // SMW

// Create a new list item <li> New Task </li> and add it to the end of a <ul>.
// let ul = document.querySelector("ul");
// let li = document.createElement("li");
// li.textContent = "New Task";
// ul.appendChild(li);

// Create a new image element with a placeholder source and add it at the top of a div.
// let div = document.querySelector("div");
// let img = document.createElement("img");
// img.setAttribute(
//     "src",
//     "https://us.123rf.com/450wm/kaewphoto/kaewphoto1412/kaewphoto141200002/34651308-still-life-skull-and-pumpkin-on-the-timber-a-symbol-of-halloween.jpg?ver=6"
// )
// img.classList.add("placeholder");
// div.prepend(img);

// Select the first item in a list and delete it from the DOM.
// let ul = document.querySelector("ul");
// let li = document.querySelector("li");
// ul.removeChild(li);

// How do you change the background color of an element?
// let ul = document.querySelector("ul");
// ul.style.backgroundColor = "red";

// What's the difference between .classList.add() and .classList.toggle()?
// .classList.add() -> ye class ko add krta hai sirf
// .classList.toggle() -> added hoga toh hata dega, nhi add hoga toh add kr dega

// Add a highlight class to every even item in a list.
// let li = document.querySelectorAll("ul li:nth-child(2n)");

// li.forEach(val => {
//     val.classList.add("highlight");
// })

// Toggle a class active on a button when clicked (Hint: Use classList.toggle()).
// Event listeners ke baad is task ko krenge // SMW

// Set the font size of all <p> elements to 18px using. style.
// let p = document.querySelectorAll("p");
// p.forEach(val => {
//     val.style.fontSize = "18px";
// })


// # Confusion:
//     - Difference between innerText vs textContent vs innerHTML
// innertext -> slower
// textContent -> faster
// innerHTML -> reads HTML tags

// classList vs style property
// classList -> only adds class, need to write css on stylesheet
// style property -> adds full styling through JS itself

//     - Live HTML Collection vs static NodeList
// SMW - Yourself