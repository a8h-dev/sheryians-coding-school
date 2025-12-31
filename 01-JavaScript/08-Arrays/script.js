// Arrays []

// --- Create, access, modify arrays
// let marks = [20, 30, 40, 50, 60]; // usually 99% times
// // modify
// marks[2] = 12; 

// let  arr = new Array();


// -------------- Array methods: push, pop, shift, unshift, splice, slice, reverse, sort

// let arr = [1,2,3,4,5, 67, 89, 34, 23, 78];

// // push method -> last side push
// arr.push(7000)

// // pop method -> last side se pop/hatana/nikalna
// arr.pop();

// // shift method -> suruwaat side se shift-kr-dena/hatana
// arr.shift();

// // unshift method -> add krta hai suruwaat side se
// arr.unshift(0);

// // splice method -> index se kitni value hatani hai (changes main element)
// arr.splice(2,2);

// // slice method -> index se kitni value hatani hai (not changes main element - returns the change)
// let newArr = arr.slice(0, 2);

// // reverse method -> reverse kr deta hai main element ko
// arr.reverse();

// // sort method -> 
// // sort hamesha ek function accept krta hai usme 2 parameters hote hain
// let sr = arr.sort(function(a, b){
//     return a - b; // ascending order
//     // return b - a; // decending order
// });


// important mindset
// jab bhi aap array par sort(), forEach(), map(), filter() ya reduce() lagaoge sabme ek chiz common hai wo ek function accept krte hai jo aapne sort me dekha tha abhi.
// function me ek value milti hai (jada bhi)...

// ------------ forEach, map, filter, reduce, find, some, every (intro level)

// let arr = [11, 62, 3, 11, 4, 25];

// forEach() 
// har bande pe jayega aur har ek ke liye andar ka code chalayega
// arr.forEach(function(val){
//     console.log(val + 5);
// })

// map()
// map sirf tab use krna hai jab aapko ek naya array banana hai pichle array ke data ke basis par
// map dikhte hi saath man mein ek blank array bana liya karo
//jab bhi aapko aisa koi case dikh jaye jaha par ek array se naya array banega and wo naya array kuch values ko rakhega tab map lagega.
// let newArr = arr.map(function(val){
//     if (val > 10) return val ;
// })

// filter()
// let newArr =  arr.filter(function(val){
//     // return true or false for val
//     if(val > 10) return true;
// })

// reduce()
// ek bade array ko reduce kr dena ek single value me
// let ans = arr.reduce(function(accumulator, val){
//     return accumulator + val;
// }, 0)

// find()
// let ans = arr.find(function(val){
//     return val === 11;
// })

// some()
// kuch dhundh rha hu main bas haa/true ya na/false me ans do waha me se koi bhi hai ya nhi
// let ans = arr.some(function(val){
//     return val > 60;
// })

// every() 
// mujhe haa/true ya na/false me batao tum sab ye condition me aate ho ya nhi
// let ev = arr.every(function(val){
//     return val < 100;
// })


// ------------- Destructuring, spread operator

// let arr = [1,2,3,4,5,6,7,8,9];

// // Destructuring
// let [a, b, , d] = arr;

// // Spread operator
// let arr2 = [...arr]; //  copied to a new its own variable


// ------------ Practice Questions

// Create an array with 3 fruits and print the second fruit.
// let fruits = ["Apple", "Banana", "Grapes"];
// console.log(fruits[1]);

// Add "Mango" at the end and "Pineapple" at the beginning of this array.
// fruits.push("Mango");
// fruits.unshift("Pineapple");

// Replace "Banana" with "Kiwi" in the array above.
// fruits[1] = "Kiwi";

// What's the difference between .push() and .unshift()?
// .push() -> last side me add karta hai
// .unshift() -> suruwaat side me add karta hai

// Remove the last item from this array using a method.
// let numbers = [1, 2, 3, 4];
// numbers.pop();

// Insert "Red" and "Blue" at index 1 in this array:
// let colors = ["Green", "Yellow"];
// colors.splice(1, 0, "Red" , "Blue");

// Extract only the middle 3 elements from this array
// let items = [1, 2, 3, 4, 5, 6];
// let ex = items.slice(1, 4);  // ------SMW------

// Sort this array alphabetically and then reverse it.
// let names = ["Zara", "Arjun", "Mira", "Bhavya"];
// // names.sort(); // Automatically sorts alphabetically without function
// let ex = names.sort().reverse();

// Use .map() to square each number:
// let arr = [1, 2, 3, 4];
// let ex = arr.map(function(val){
//     return val * val;
// })

// Use .filter() to keep numbers greater than 10;
// let arr = [5, 12, 8, 20, 3];
// let ex = arr.filter(function(val){
//     return val > 10;
// })

// Use .reduce() to find the sum of this array:
// let arr = [10, 20, 30];
// let ex = arr.reduce(function(accumulator, val){
//     return accumulator + val;
// }, 0)

// Use .find() to get the first number less than 10
// let arr = [12, 15, 3, 8, 20];
// let ex = arr.find((val) => {
//     return val < 10;
// })

// Use .some() to check if any student has scored below 35:
// let arr = [45, 60, 28, 90];
// let ex = arr.some(val => {
//     return val < 35;
// })

// Use .every() to check if all numbers are even:
// let arr = [2, 4, 6, 8, 10];
// let ex = arr.every(val => {
//     return val % 2 === 0;
// })

// Destructure this array to get firstName and lastName
// let fullName = ["Abhishek", "Mahto"];
// let [firstName, lastName] = fullName;

// Merge two arrays using spread operator:
// let a = [1, 2];
// let b = [3, 4];
// let c = [...a, ...b];

// Add "India" to the start of this array using spread:
// let countries = ["USA", "UK"];
// countries = ["India", ...countries];

// Clone this array properly (not by reference):
// let arr = [1, 2, 3];
// let arr2 = [...arr];

// --------------- Common Confusion:

//     - splice vs slice
// splice -> changes original array
// slice -> original change nhi hoga new array return hoga 

//     - map vs forEach
// .forEach() -> Array ke har ek index pe ek function run kr sakte hain
// No new array, No return by default.
// Just loop krna hai tab

// .map() -> New array banega, basis of the parent array.
// new array banana hai old wale ke basis par

// big blunder with .sort.
// [100, 20, 3].sort(); // [100, 20, 3] -> "100", "20", "3" (wrong)
// .sort() kar sakte hain agar sirf alphabetic sort krna hai

// arr.sort((a, b) => a - b ); // ascending order
// arr.sort((a, b) => b - a ); // decendong order