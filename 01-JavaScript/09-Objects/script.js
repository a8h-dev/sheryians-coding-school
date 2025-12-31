// Objects
// let obj = {}; // Blanck Object


// ------ Key-value structure
// let obj = {
//     name: "Abhishek",
//     age: 19,
//     khana: "career :)"
// }


// -------- Dot vs bracket notation
// obj.age      // obj ke andar age dhundho literally obj ke baad . ka mtlb hai literally
// obj['name'];


// ------ Nesting and deep access
// Nesting -> ek ke andar ek, ek ke andar ek
// const user = {
//     name: "Harsh",
//     address: {
//         city: "Bhopal",
//         pin: 462001,
//         location: {
//             lat: 23.2,
//             lng: 74.4
//         }
//     }
// }
// Deep Access
// user.address.location.lng


// ------- Object destructuring
// const user = {
//     name: "Harsh",
//     address: {
//         city: "Bhopal",
//         pin: 462001,
//         location: {
//             lat: 23.2,
//             lng: 74.4
//         }
//     }
// }
// let {lat, lng} = user.address.location; 


// ------- Looping: for-in, Object.keys, Object.entries
// let obj = {
//     name: "Abhishek",
//     age: 19,
//     email: "dev.abhishekmahto@gmail.com"
// }

// for-in
// for(let key in obj){
//     console.log(key, obj[key]);
// }

// Object.keys
// Object.keys(obj);
// object ke sare keys ko ek array me daal deta hai

// Object.entries
// Object.entries(obj);
// Array of arrays banane ke liye


// -------- Copying objects: spread, Object.assign, deep clone
// let obj = {
//     name: "Abhishek",
//     age: 19,
//     email: "dev.abhishekmahto@gmail.com"
// }

// Spread operator
// let obj2 = {...obj};

// Object.assign
// boht kam use hota hai ab 
// let obj3 = Object.assign({}, obj);
// Intresting baat iski
// let obj3 = Object.assign({price: Infinity}, obj);

// deep clone 
// imp concept
// let obj = {
//     name: "Abhishek",
//     age: 19,
//     email: "dev.abhishekmahto@gmail.com",
//     address: {
//         city: "bhopal"
//     }
// }

// Why deep clone?
// Nested object me spread operator ache se copy nhi karta
// nested object wapis se reference pass krne lagte hain
// iske liye ham Deep clone krte hain
// let obj2 = {...obj};
// obj2.address.city = "Indore";

// Solution -> Deep clone
// let obj2 = JSON.parse(JSON.stringify(obj));

// Check
// obj2.address.city = "Indore";


// -------- Optional chaining, computed properties

// Optional chaining
// let obj = {
//     name: "Abhishek",
//     age: 19,
//     email: "dev.abhishekmahto@gmail.com",
//     addresses: {
//         city: "bhopal"
//     }
// }
// Problem 
// agar beech me koi key-word change kr de toh aage ka access ka code error ho jayega
// example:
// obj.address.city; // fir agar koi address ko addresses kr diya toh ho gya kalyaan

// Solution: Optional chaining
// obj?.address?.city;
// if change hua toh undefined ayega, error nhi ayega


// Computed properties
// let admin = "title";
// let obj = {
//     name: "Abhishek",
//     age: 19,
//     email: "dev.abhishekmahto@gmail.com",
//     addresses: {
//         city: "bhopal"
//     },
//     [admin]: "Mahto"
// }



// ---------- Practice Questions

// Create an object for a student with name, age, and isEnrolled
// let obj = {
//     name: "Abhishek Mahto",
//     age: 19,
//     isEnrolled: true
// }

// Can an object key be a number or boolean? Try this
// const obj = {
//     true: "yes",
//     42: "answer"
// }
// obj[true];
// Ans: Yes, object ki key number ya boolean ho sakti hai

// Access the value of "first-name" from this object:
// const user = {
//     "first-name": "Abhishek"
// };
// user["first-name"];
// kyuki key string me hai toh user. krke access nhi kar sakte

// Given a dynamic key let key = "age", how will you access user[key]?
// let key = "age";
// const user = {
//     age: 26
// }
// user[key] 
// user[key] -> key ka vakue hai age -> age ? haan user ke andar hai -> age ka value hai 26

// Form the object below, print the latitude:
// let loc = {
//     city: "Bhopal",
//     coordinates: {
//         lat: 23.2,
//         lng: 77.4
//     }
// }
// loc.coordinates.lat

// What will happen if coordinates is missing? How can you prevent errors?
// let loc = {
//     city: "Bhopal",
//     coordinate: {
//         lat: 23.2,
//         lng: 77.4
//     }
// }
// By using Optional Chaining
// loc?.coordinates?.lng

// Destructure the city and lat from the location object above
// let {city} = loc
// let {lat} = loc?.coordinate

// Destructure the key "first-name" as a variable called fristName.
// const user = {
//     "first-name": "Abhishek"
// }
// let {"first-name": fristName} = user; // SMW

// Use for in loop to log all keys in this object
// const course = {
//     title: "JavaScript",
//     duration: "4 weeks"
// }
// for (let key in course){
//     console.log(key);
// }

// Use Object.entries() to print all key-value pairs as:
// title: JavaScript
// duration: 4 weeks
// Object.entries(course).forEach(function(val){
//     console.log(val[0] + ": " + val[1]);
// })

// Copy this object using spread operator.
// const original = {a: 1, b: 2};

// const dublicate = {...original};
// dublicate["a"] = "Abhishek";

// What is problem with this?
// const obj1 = {info: {score: 80}};
// const clone = {...obj1};
// clone.info.score = 100;
// console.log(clone?.info?.score)
// Problem: isme deep cloning nhi hui hai nested object reference pass kar de rha hai

// Deep clone the obj1 safely.
// const obj1 = {info: {score: 80}};
// let copy = JSON.parse(JSON.stringify(obj1));
// copy.info.score = 100;

// Rewrite this safely using optional chaining
// const person = {};
// // console.log(person.profile.name) // wrong
// console.log(person?.profile?.name) // optional chaining

// Use a variable to dynamically assign a property
const key = "role";
let obj = {
    name: "Abhishek",
    [key]: "admin"
}