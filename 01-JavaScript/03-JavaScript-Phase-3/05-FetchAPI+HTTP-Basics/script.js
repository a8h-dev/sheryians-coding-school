// Fetch API + HTTP Basics

// ---------- Fetch API: GET, POST basics
// Fetch API -> aap isse data ko manga sakte ho kisi URL se

// for example:
// internet pe search -> random user api
// link milei pehli website pe https://randomuser.me/api/
// ab isse new tab me paste krdo -> data mil jayegi
// ek plugin -> JSONView
// aur reload krne par wo API link se mangaya hua data thoda ache trike se dekhne ko milega -> Pretty ho jayega
// now ye jo data aap dekh rhe ho ye hai JSON (JavaScript Object Notation) format me
// JSON format kaisa dikhta hai -> bilkul objects ki tarah hota hai dono side me double quotes "" lage hote hain

// let's talk about Fetch API
// fetch -> JavaScript me inbuilt function hai jiska name hai fetch
// fetch() iske andar aap jo man me aaye wo URL likh sakte ho
// fetch is URL pe jata hai aur data lekr aata hai

// IMP:- fetch kyuki Promise based hai toh isko use krne ke 2 trike hai
// Pehla: .then()

// ---------
// toh jab bhi fatch resolve ho jayega : yaad aaya sir ne kaha tha ye code ham nhi likhte ye code kahi aur likha hua hai hamne sirf URL diya hai.
// ---------

// jab bhi fetch resolve ho jayega toh then chalega
// aur agar resolve nhi hua toh catch chalega
// aur in dono ko handle krenge
// ham chahe toh arrow function use kr sakte
// fetch("https://randomuser.me/api/")
// .then(rawdata => {
//     // IMP: Hamesha ek chiz yaad rakho jab bhi fetch karte ho toh pehle .then me jo data milta hai usey wapas se .json() banana parta hai - Ye aadat daallo aaj se 
//     // isse ReadableStream data readable me convert ho jata hai
//     // fir return krke agle .then me usey access kr sakte ho
//     return rawdata.json();
// })
// // ab aapko real data milega
// .then(data => {
//     console.log(data.results[0].name.first);
// })
// .catch(err => {
//     console.log(err);
// })

// found data -> body : ReadableStream
// ye ReadableStream ke form me hai toh ham ise directly padh nhi sakte
// aapko iss raw data ko JSON banana prega


// fetch("https://randomuser.me/api/?results=5")
// // ham ye kar sakte hain
// // aapne raw data liya -> aapne arrow function ka jo arrow hota hai wo lagaya -> aur aapne body open nhi kari aapne yehi ke yehi direct likh diya bina curly braces {} ke
// // iska mtlb hota hai ki aapke data ko JSON banake return krdo
// // ise kehte hain: Implicit return
// // toh ab sidha agle line pe .then firse laga sakte ho
// .then((raw) => raw.json())
// .then(data => console.log(data.results))
// // toh sirf 3 lines me ye code complete ho gya.

// TRY YOURSELF
// random data ka use krke kuch banao // can use AI

// Baki chizen Backend ka part hai
// During backend learn krna hai

// REST EVERYTHING TRY YOURSELF