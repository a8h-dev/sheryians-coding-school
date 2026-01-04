// Timers and Intervals

// --------- setTimeout, clearTimeout
// --------- setInterval, clearInterval
// setTimeout(function(){}, ms)
// 1s = 1000ms

// setTimeout
// Ek baar
// setTimeout(function(){
//     console.log("Hello");
// }, 3000)

// setInterval
// baar baar
// setInterval(function(){
//     console.log("Hello Ji");
// }, 3000)

// clearTimeout
// let lolo = setTimeout(function(){
//     console.log("LOLO");
// }, 3000)
// clearTimeout(lolo);

// // clearInterval
// let polo = setInterval(function(){
//     console.log("POLO");
// }, 3000)
// clearInterval(polo);

// # Practice:
// ---- Countdown timer
// let count = 10;
// let interval = setInterval(function(){
//     if(count >= 0){
//         console.log(count);
//         count--;
//     } else{
//         clearInterval(interval);
//     }
// }, 1000)

// ---------- Auto-hide alert banner after 3s
let body = document.querySelector("body");
let tm = setTimeout(function(){
    body.style.visibility = "hidden";
    clearTimeout(tm);
}, 3000);

// **DOWNLOAD PROGRESS**
// overall progress 3s = 3000ms
// 100%
// 3000ms / 100% = 30ms

let downloadBtn = document.querySelector("#downloadBtn");
downloadBtn.addEventListener("click", function () {
  stDownload();
});

function stDownload() {
  let seconds = 5;
  let progress = document.querySelector(".progress");
  let percent = document.querySelector(".percent");
  let count = 0;
  let intv = setInterval(function () {
    if (count <= 99) {
      count++;
      progress.style.width = count + "%";
      percent.textContent = count + "%";
    }
    else{
        document.querySelector("h2").textContent = "Downloaded.";
        clearInterval(intv);
    }
  }, (seconds * 1000) / 100);
}



// **COMMON CONFUSION**

// - setInterval vs setTimeout recursion
// setInterval: baar baar krna hai
// setTimeout: ek baar krna hai
// for example: 
// agar aap ek alarm banana cahte ho jo roz bje - setInterval
// agar aap cahte ho wo sirf aaj 6 PM me bje - setTimeout
