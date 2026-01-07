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



// ------------- ES6 Classes: constructor, methods, extends, super
// **class kya hai?**
// wahi constructor function jo ham abhi bana rhe the usi ko thoda saja kar likhne ka trika hai
// log confuse hote hain but easy

// Khayal rakhne wali baat -> yeha pe function wale bracket () nhi lagte sidhe curly braces lagte hain

// iske andar pehli chiz jo ham banate hain wo hota hai constructor
// constructor kya hota hai?
// constructor pehli chiz hoti hai jo chalta hai
// jaise ham likhte hain new CreatePencil() toh isse constructor chal rha hota hai

// **Kaam kya hota hai iska??**
// default values set krna ya initialize krna, variables create krna ye sab iske hote hain
// ye sab ham sirf kaam krke hi sikh payenge

class CreatePencil{
    // **constructor**
    constructor(name, company, price, color){
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }
    // toh constructor ke andar aap apne variables sare define kr dete ho
    // aur uske bahar aap apne methods wagera bana sakte ho
    // **methods**
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
    // yeha arrow function use hua
    erase(){
        document.body.querySelectorAll("h1").forEach((elem) => {
            if(elem.style.color === this.color){
                elem.remove();
            }
        })
    }
}

let p1 = new CreatePencil("nataraj", "nataraj", 10, "black");
let p2 = new CreatePencil("apsara", "apsara", 15, "blue");

// Mindset behind it
// now you've seen how Object-Oriented works
// kitna easy ho gya sabkuch this is why Object Oriented is one of best approach to do things
// ab aapne wo sab nhi likha koi bhi faltu giri nhi likhi hai ki boht hi random ajeeb sa spaghetti code nhi likha ki kahi se bhi kuch bhi pick kro aur hatao na na na...
// Cohort me Object Oriented ka use krke pura OS banaya hai. 

// **extends**
// ye kya hota hai??
// basically already ek class aap banake rakhe hue ho, aapne nayi class banayi aur nayi class pichli class ki sari values ko use kr sakti hai aur apni khudki kuch hold krti hai.

// Example: 
class User{
    // **constructor**
    constructor(name, address, username, email){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user";
    }

    // **methods**
    checkRole(){
        return `You are a ${this.role}`;
    }
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }
}

// ab maan lete hain aapke pass sirf users nhi aapke pass Admins bhi hain
// yeha pe role suru hota hai
// kya aap mante ho ki har Admin ke pass wo sab hoga jo user ke pass hai? name, address, username, email, role?? -- haan 
// toh ham ye duplicate krke wapis se nhi likhna chahenge
// issiliye ham likhenge extends kaise?? dekho niche
// **extends**
class Admin extends User{
    // ye kya hai??
    // basically ham ye keh rhe hain ki Admin class wo sab rakhti hai jo User ke pass hai.

    // super ko call krne ke baad aapko uper wale values ko constructor me bhejna prega
    // fir super me sari chizen aapko pass krni pregi
    // Admin ka apna constructor
    constructor(name, address, username, email){
        // aapko pehle super() ko call krna hoga mtlb -> parent ke constructor ko call krna prega
        // super pe pass krne ka mtlb uper User wale constructor ke pass chala jayega
        // **super**
        super(name, address, username, email);

        // ab admin ki khudki chizen aapko rakhni hai
        this.role = "admin";
    }
    // ab yeha pe ek new method bana rhe hain remove;
    // iski khas baat ye hui ki sirf Admin remove kr sakta hai User remove nhi kar payega.
    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();
        })
    }

}

let u1 = new User("Abhishek", "Bhopal", "a8h-dev", "a8h.dev@mail.com");
let u2 = new User("Sakshi", "Bhopal", "sakshi123", "sakshi123@mail.com");
let a1 = new Admin("admin1", "India", "adminnnnn1111", "admin1@gmail.com");