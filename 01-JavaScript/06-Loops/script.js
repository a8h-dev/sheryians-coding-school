// -- for, while, do-while
// -- break, continue

// coding me kabhi kabhi chize abstract hoti hai (chupi hui hoti hain dhyaan se dekhna, smjhna parta hai)

// for
// kaha se jana hai -> kaha tak jana hai -> kaise jana hai // for
// 1 - 100
// for (let i = 1; i <= 100; i++){
//     // huihui
//     console.log(i);
// }

// while
// kaha se jana hai -> kab rukna hai -> kaise jana hai // while
// 1 - tabtak jabtak main hello na bolu
// lal color ka ped mile tab
// jab girlfriend mile tab 
// confirm pata na ho kab hoga tab

// start;
// while(end){
    //code
    //change
// }

// let i = 1;
// while(i <= 32){
//     console.log(i);
//     i++;
// }

// do-while
// do{

// }
// while(end);

// let i = 12;
// do{
//     console.log(i);
//     i++;
// }
// while(i < 2);

// -- break, continue

// for(let i = 1; i <= 200; i++){
//     console.log(i);
//     if(i === 32){
//         break;
//     }
// }

// for(let i = 1; i <= 200; i++){
//     if(i === 32){
//         continue;
//     }
//     console.log(i);
// }


// Practice:
// -- Print pattern questions
// -- Reverse a string using Loop
// -- Sum of even/odd numbers from array

// 01. Print numbers from 1 to 10 using a for loop
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// 02. Print numbers from 10 to 1 using a while loop
// let i = 10;
// while(i >= 1){
//     console.log(i);
//     i--;
// }

// for (let i = 10; i >= 1; i--){
//     console.log(i);
// }

// 03. Print even numbers from 1 to 20 using a for loop.
// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// 04. Print odd numbers from 1 to 15 using a while loop.
// let i = 1;
// while(i <= 15){
//     if (i % 2 !== 0){
//         console.log(i);        
//     }
//     i++;
// }

// 05. Print the multiplication table of 5 (i.e., 5 x 1 = 5 _ 5 x 10 = 50)
// let tableOf = 5;
// for (let i = 1; i <= 10; i++){
//     console.log(`${tableOf} x ${i} = ${tableOf * i}`);
// }

// 06. Find the sum of numbers from 1 to 100 using a loop.
// let totalSum = null;
// for (let i = 1; i <= 100; i++){
//     totalSum += i;
// }
// console.log(totalSum); 

// 07. Print all numbers between 1 to 50 that are divisible by 3.
// for (let i = 1; i <= 50; i++){
//     if (i % 3 === 0){
//         console.log(i);
//     }
// }

// 08. Ask the user for a number and print whether each number from 1 to that number is even or odd.
// (e.g., "1 is odd", "2 is even", ...)

// let userNum = Number(prompt("Enter a number."));
// for(let i = 1; i <= userNum; i++){
//     if(i % 2 === 0){
//         console.log(`${i} is even`);
//     } else{
//         console.log(`${i} is odd`);
//     }
// }

// 09. Count how many numbers between 1 to 100 are divisible by both 3 and 5.

// for (let i = 1; i <= 100; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }


// Q1. Stop at First Multiple of 7
// Write a loop from 1 to 100 that:
// - Prints each number
// - Stops completely when it finds the first number divisible by 7

// let i = 1;
// while(i <= 100){
//     console.log(i);
//     i++;
//     if(i % 7 === 0){
//         console.log(`First multiple is ${i}`)
//         break;
//     }
// }

// Q2. Skip Multiples of 3
// Write a loop from 1 to 20 that:
// - Skips numbers divisible by 3
// - Prints all others

// Use continue

// Expected Output: 
// 1 2 4 5 7 8 10 11 ... (no 3, 6, 9 etc.)

// for (let i = 1; i <= 20; i++){
//     if (i % 3 === 0){
//         console.log(`Numbers ${i}`);
//         continue;
//     }
//     console.log(i);
// }/

// Q3. Print First 5 Odd Numbers Only

// Write a loop from 1 to 100 that:
// - Prints only 5 odd numbers
// - Then stops the loop

// Use both if, continue, and a counter + break

// Expected output:
// 1 3 5 7 9

// let count = 0;
// for (let i = 1; i <= 100; i++){
//     if (i % 2 === 1){
//         count++;
//         console.log(i);
//     }
//     if (count === 5){
//         break;
//     }
// }




// PRO TIP
// How to level up yourself.
// ChatGPT me prompt:
// I am complete beginner and I prefer Hinglish, give me some questions to solve around loops which are ultimate beginner friendly.
// chatGPT ke sath dosti krke sath me boht sare questions solve kro
// Try to understand first and solve it yourself.
// Samajhna jruri hai copy krna nhi
// Ham realy mind blowing questions solve kar skte hain just try it.

// Common Confusions ?
// - when to use for and while loop.
// Start - End Exactly - Change pata hai -> For loop
// Start - End ka bas Idea hai - Change pata hai -> While loop