// localStorage, sessionStorage, and Cookies

// localStorage: aapke browser ke andar data store karna jo ki browser band hone par bhi delete nhi hoga (browser ka database hai aisa smjh liziye)

// sessionStorage: ye aapka data temporarily store karta hai mtlb ki tab band hua aur data gya

// Cookies: ye bhi data store karta hai and aapka data browser ke cookies naam ki property me save hota hai and ye cookie concept kam data ya light data ke liye hota hai

// **localStorage**
// ~ nearly 5mb
// store kaise kare -> setItem
// data fetch kaise kre -> getItem
// remove kaise kre -> removeItem
// update kaise kre
// (like CRUD in database -> Create, Read, Update, Delete)

// Create
// setItem: agar property nhi hoti hai toh bana deta hai aur hoti hai toh overwrite / update kr deta hai
// localStorage.setItem("name", "Abhishek");

// Read
// let val = localStorage.getItem("name");

// Update
// update ke liye kuch alag sa nhi hai
// setItem se hi update ho jata hai
// localStorage.setItem("name", "Abhishek Mahto");

// Delete
// localStorage.removeItem("name");

// Clear
// clear kr deta sab
// localStorage.clear();

// **sessionStorage**
// ~ nearly 5mb
// similar sense as localStorage
// sessionStorage.setItem("name", "Abhishek");
// sessionStorage.clear();

// **Cookies**
// confused rehte boht sare students ispe
// browser me chota data store krne ke liye cookies ka istemal hota hai
// ~ nearly 4kb
// cookies me jo bhi data store kroge wo data page reload par automatically server par jayega
// reload ka mtlb -> ham wapis se url ke server pe jayenge aur data lekr aayenge

// set cookie
// document.cookie = "username=Abhishek";
// edit this cookie -> extension for cookie

// ------------- Storing/retrieving strings vs JSON

// localStorage me aapko hamesha string hi save krni pregi
// wo string ke alawa koi dusri value diretly support nhi karti
// localStorage.setItem("friend", {one: "akash", two: "sumit"});

// lekin -> aisa kuch bhi nhi hai jo ham nhi kar sakte
// islliye ham JSON ka use krte hain
// JSON.stringify();

// Solution string ke alawa dusre type ka data store krne ka
// other type -> to string -> back to original type
// localStorage.setItem("friends", JSON.stringify(["akash", "harsh", "amit"]));
// let fr = JSON.parse(localStorage.getItem("friends"));
// console.log(fr);

// # Practice:
// ----------- Save theme preference in localStorage
// Prompt: how to get the OS display mode dark or light in js

// ::: First Made :::
// function setDarkOrLight() {
//   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//     document.querySelector("body").classList.add("dark");
//     document.querySelector("body").classList.remove("light");
//   } else {
//     document.querySelector("body").classList.add("light");
//     document.querySelector("body").classList.remove("dark");
//   }
// }

// // on the go change
// if (localStorage.getItem("theme")) {
//     // user selected theme
//     document.body.classList.add(localStorage.getItem("theme"));
// }
// else{
//     setDarkOrLight();
// }

// window
//   .matchMedia("(prefers-color-scheme: dark)")
//   .addEventListener("change", function () {
//     if(!localStorage.getItem("theme")){
//         setDarkOrLight();
//     }
//   });

// let btn = document.querySelector("#toggleTheme");
// btn.addEventListener("click", function () {
//   if (document.body.classList.contains("dark")) {
//     document.body.classList.remove("dark");
//     document.body.classList.add("light");

//     localStorage.setItem("theme", "light");
//   } else {
//     document.body.classList.remove("light");
//     document.body.classList.add("dark");

//     localStorage.setItem("theme", "dark");
//   }
// });

// ::: OPTIMIZED BY GPT :::
const body = document.body;
const btn = document.querySelector("#toggleTheme");
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
  body.classList.remove("dark", "light");
  body.classList.add(theme);
}

function getSystemTheme() {
  return mediaQuery.matches ? "dark" : "light";
}

// Initial load
const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme || getSystemTheme());

// OS theme change listener (only if user ne manually theme select nhi ki)
mediaQuery.addEventListener("change", () => {
  if (!localStorage.getItem("theme")) {
    applyTheme(getSystemTheme());
  }
});

// Toggle button
btn.addEventListener("click", () => {
  const newTheme = body.classList.contains("dark") ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});


// //     - Login form that remembers user's name using storage
// Try Yourself


// # Confusion:
// - Why only strings work in localStorage
// localStorage ki API is built like that only for strings but we can always use JSON.stringify()

// - Cookies need manual encoding/expriation handling
// - website chala rhe ho 
// - ban hua tha ya nhi?
// - user ko login krne ke baad hame ek token milta hai on frontend wo token ham cookies me save kra sakte hain
// - cookies ko ham automatically kuch time ke baad expire bhi kar sakte hain -- TRY YOURSELF