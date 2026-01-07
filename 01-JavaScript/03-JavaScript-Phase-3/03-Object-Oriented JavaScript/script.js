// Object-Oriented JavaScript

// ------ Constructor functions and prototypes
// Constructor functions
// Constructor functions hai issliye iska pehle letter hamesha capital hona chahiye -> good practice
// function CreateBiscuits(name, price, qty, company, category){
//     this.name = name;
//     this.price = price;
//     this.qty = qty;
//     this.company = company;
//     this.category = category;
// }
// let biscuit1 = new CreateBiscuits("Oreo", 10, 5, "Cadbury", "Chocolate");
// let biscuit2 = new CreateBiscuits("Fantasy", 20, 3, "Parle", "Chocolate Filled");

// hume sikhna hai factories banana, mtkb ki aap ek baar blueprint bana do ki har object kaisa dikega and hum log new new objects with differenet values bana payege. yehi uper uper se pura kaam hai OOPS me

// function CreatePencil(name, price, color, company){
//     // this kya hai?
//     // aapka jo blank object new se bana tha wahi aapka this hai
//     // Q. accha function ke andar toh this ki value window hoti hai.
//     // Ans_ Hoti hai agar aap new na lagao toh
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.company = company;
//     // this.write ek function hai iska mtlb write ek method ho gya
//     this.write = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = color;
//         document.body.append(h1);
//     }
// }
// // new ka mtlb hota hai blank object.
// let pencil1 = new CreatePencil("Nataraj", 10, "black", "Nataraj");
// let pencil2 = new CreatePencil("Doms", 10, "red", "Doms");

// **prototypes**
// sabke pass apni khudki value hogi
// ab important baat - Hamesha yaad rakhna jo bhi aap this. ke baad likh doge wo har object ke pass khudki hogi.
// kuch aise chizen hoti hain ki wo khudki ho ya na ho usse farak nhi parta

// function CreatePencil(name, price, color, company){
// this kya hai?
// aapka jo blank object new se bana tha wahi aapka this hai
// Q. accha function ke andar toh this ki value window hoti hai.
// Ans_ Hoti hai agar aap new na lagao toh
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.company = "Sheryians";
//     // this.write ek function hai iska mtlb write ek method ho gya
//     this.write = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = color;
//         document.body.append(h1);
//     }
// }
// // new ka mtlb hota hai blank object.
// let pencil1 = new CreatePencil("Nataraj", 10, "black");
// let pencil2 = new CreatePencil("Doms", 10, "red");

// ab yeha smjhne wali baat
// this.company har baar same hai "Sheryians" toh iss case me same rehne wali value ko apne constructor function me mat likho
// Kyu?
// Kyuki wo har baar pencil1 me bhi ek blank memory le rhi hai, pencil2 me bhi ek blank memory le rhi hai, and so on...
// lekin mujhe toh company wala part chahiye toh memory le ya na le usse mujhe kya mtlb?
// yehi toh sikhne wali baat hai, ab ye chiz sabme memory le rhi hai toh isko repeat krne se koi purpose nhi banta.

// **toh isko kaise kiya jaye??**
// step 1- sabse pehle repeat krne wale value ko hata do

// function CreatePencil(name, price, color, company){
//     // this kya hai?
//     // aapka jo blank object new se bana tha wahi aapka this hai
//     // Q. accha function ke andar toh this ki value window hoti hai.
//     // Ans_ Hoti hai agar aap new na lagao toh
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     // this.write ek function hai iska mtlb write ek method ho gya
//     this.write = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = color;
//         document.body.append(h1);
//     }
// }
// // step 2 -> apne constructor function ke prototype ke andar company likh do
// // CreatePencil.prototype.company = "Sheryians";
// // step 3 -> protype ke andar company mil jayegi ab
// // step 4 -> use kr sakte hain - haan
// // pencil1.company
// // pencil2.company
// // aise values mil jayegi
// // step 5 -> kaise jud gyi hai??
// // agar tumhara construtor function koi field apne prototype par attach karle toh uss constructor se banne wale sabhi new instances yaani ki objects, ke pass wo filed automatically chali jati hai.
// // CreatePencil.prototype
// // step 6 -> prototype ka mtlb kya hota hai??
// // prototype smjhlo isko extra memory / shared memory
// CreatePencil.prototype.company = "Sheryians";
// // toh ab inke pass khud ki value toh hai hi hai, sath hi sath CreatePencil() ka prototype ka bhi access hai
// // Conclusion:
// // toh ab ye baar baar alag se memory nhi lega, jitne bhi banenge pencil1, pencil2, pencil3,... sabke pass ek shared company ka naam hoga. sabka apna apna company ka naam nhi hoga, shared hoga.
// // toh yehi story hai...

// // new ka mtlb hota hai blank object.
// let pencil1 = new CreatePencil("Nataraj", 10, "black");
// let pencil2 = new CreatePencil("Doms", 10, "red");

// **toh ye use kaha hoga??**
// yeha pe write function me use hoga

// function CreatePencil(name, price, color, company){
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.company = company;
//     this.write = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = color;
//         document.body.append(h1);
//     }
// }
// let pencil1 = new CreatePencil("Nataraj", 10, "black", "Nataraj");
// let pencil2 = new CreatePencil("Doms", 10, "red", "Doms");

// step 1 -> hata liya yeha se
// function CreatePencil(name, price, color, company) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
//   this.company = company;
// }
// // step 2 -> add on prototype kyuki wo repeat kr rha tha sabke liye
// // step 3 -> h1 ka text content this.text ke equal rakh diya mtlb jis bhi object ke bare me baat hori hai uska text. same for color and others if any.
// // write ek method hai - haan. toh jab bhi ham method ke andar hote hain this apne object ke barabar hota hai

// CreatePencil.prototype.write = function (text) {
//   let h1 = document.createElement("h1");
//   h1.textContent = text;
//   h1.style.color = this.color;
//   document.body.append(h1);
// };

// // step 4 -> ab agar pencil.write("Hello kaise ho"), karenge toh body me kuch attach nhi hua ? kyu??
// // kyuki hamne this.text likh diya tha lekin text toh hame yehi new wale prototype se mil rha hai
// // Error solved:- ab hame mil rha hai value
// // isse hamne kafi sara memory bachaya. 
// // this is all Object Oriented Programming about

// let pencil1 = new CreatePencil("Nataraj", 10, "black", "Nataraj");
// let pencil2 = new CreatePencil("Doms", 10, "red", "Doms");

