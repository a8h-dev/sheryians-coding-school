// forms & form validation

// --------------- Reading values from input, textarea, select

// let form = document.querySelector("form");
// let nm = document.querySelector("#name");

// form.addEventListener("submit", function (dets) {
// // --------------------- Prevent default submission
//   // problem: js ka code chalne se pehle hi form submit ho jayega
//   // solution: event-obj.preventDefault();
//   dets.preventDefault();

//   // -------------Halka sa JS-based Validation
//   // -------------Showing error messages conditionally
//   if (nm.value.length <= 2) {
//     document.querySelector("#hide").style.display = "initial";
//   } else {
//     document.querySelector("#hide").style.display = "none";
//   }

// });

// -------------------- Inline and JS-based validation
// Inline
// required (in form input)
// minlength="", maxlength=""

// ise bypass kiya ja sakta hain inspect krke dlt krke
// isiliye iske bharoshe nhi baith sakte
// Rarely used
// Mostly ham js se hi validation karte hain

// waise ham JavaScript bhi bypass kr sakte hain :)
// backend side validation, databases side validation lagana prta hai
// ham kai sare checks bana dete hain solve krne ke liye

// ------------ Pattern attribute vs custom regex

// **PATTERN ATTRIBUTE**
// boht rarely used
// pattern="[a-z]{3,8}"

// **CUSTOM REGEX**
// Actually used
// honestly regex ek alag language hai
// mostly log ise khudse nhi likhte
// ye internet pe mil jate hain
// example : 
// const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// utpataang sa code

// use
// let form = document.querySelector("form");
// let email = document.querySelector("#email");

// form.addEventListener("submit", function(dets){
//     dets.preventDefault();
//     const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     let ans =  checkEmail.test("a@a.a");
//     console.log(ans);
// })

// ChatGPT Prompt to create your custom regex
// - create a regex which allows a username


// # Practice:
// ---
// --------- Email/password validator

// yeha main chatGPT se form ka html and css banwaya
// prompt: I am creating a email password validator using html css and js, give me html and css code so that i can write js part

// agar form me koi suggesstion nhi chahiye
// autocomplete="off" in html form

let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let form = document.querySelector("form");
let error = document.querySelector(".error");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    document.querySelector("#emailErr").textContent = "";
    document.querySelector("#passErr").textContent = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailAns = emailRegex.test(email.value);
    let passAns = passRegex.test(pass.value);

    let isValid = true;

    if(!emailAns){
        document.querySelector("#emailErr").textContent = "Email is incorrect";
        document.querySelector("#emailErr").style.visibility = "initial";
        isValid = false;
    }
    if(!passAns){
        document.querySelector("#passErr").textContent = "Password is incorrect";
        document.querySelector("#passErr").style.visibility = "initial";
        isValid = false;
    }

    if(isValid){
        document.querySelector("#fine").style.display = "initial";
    }
})

// --------- Interactive feedback form with error highlights
// abhi jo banaya wahi concepts hain

// # Confusion:
// ---
// - Difference between value and textContent
// Value vs TextContent
// Value: input banaya uska value chahiye .value
// TextContent: tag ka text access

// - Form submission vs button click