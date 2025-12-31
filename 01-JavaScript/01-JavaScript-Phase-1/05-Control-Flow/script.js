// if else else-if
// switch case
// early return pattern (Amazing thing)


// // early return pattern (Amazing thing)
// function getVal(val){
//     if(val < 25) return "D";
//     else if (val < 50) return "C";
//     else if (val < 75) return "B";
//     else return "A";
// }
// console.log(getVal(24));

// Write a function getGrade(score) that:
// - Takes a student's marks (0 to 100)
// - Returns the grade based on this logic:
// 90-100 A+
// 80-89 A
// 70-79 B
// 60-69 C
// 33-59 D
// 0-32 Fail
// Anything else  Invalid marks

// Solution:

function getGrade(score){
    if (score <= 100 && score >= 90) return "A+";
    if (score < 90 && score >= 80) return "A";
    if (score < 80 && score >= 70) return "B";
    if (score < 70 && score >= 60) return "C";
    if (score < 60 && score >= 33) return "D";
    if (score < 33 && score >= 0) return "Fail";
    else return "Invalid marks"; 
}
console.log(getGrade(78));

// Rock-paper-scissors logic
function rps(user, computer){
    if(user === computer) return "draw";

    if(user === "rock" && computer === "scissor") return "user";
    if(user === "paper" && computer === "rock") return "user";
    if(user === "scissor" && computer === "paper") return "user";

    return "computer";
    // jaha bhi return ho gya uske baad aage ka code nhi chalega
}
console.log(rps("paper", "scissor"));


// Confusion:
// -- Fallthrough in switch-case

let x = 2;
switch (x) {
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
}
// Output: Two, Three (bug if break;` is missing)