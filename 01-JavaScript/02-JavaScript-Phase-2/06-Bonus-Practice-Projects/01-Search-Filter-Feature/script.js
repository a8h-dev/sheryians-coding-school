// const users = [
//   {
//     name: "Rahul Sharma",
//     pic: "https://i.pinimg.com/1200x/b8/82/83/b882836fa749f501aefa935d19e19977.jpg",
//     bio: "Frontend developer who loves clean UI, animations aur thoda sa creative code.",
//   },
//   {
//     name: "Anjali Verma",
//     pic: "https://i.pinimg.com/736x/3e/f3/50/3ef350dc86cc82a092463e5d795654b5.jpg",
//     bio: "UI/UX designer, minimal design aur user experience pe focus karti hoon.",
//   },
//   {
//     name: "Aman Singh",
//     pic: "https://i.pinimg.com/736x/82/a6/f3/82a6f3cf8318a01ece0dd2c36e744260.jpg",
//     bio: "Full stack learner, JavaScript aur backend explore kar raha hoon.",
//   },
//   {
//     name: "Priya Gupta",
//     pic: "https://i.pinimg.com/736x/43/d7/16/43d716925da061a194dc992feb4b34ed.jpg",
//     bio: "Creative thinker, content aur design dono me interest hai.",
//   },
//   {
//     name: "Rohit Kumari",
//     pic: "https://i.pinimg.com/1200x/d5/ca/de/d5cade9fd271a5681c998073354e7f62.jpg",
//     bio: "Tech enthusiast jo naye tools aur frameworks try karta rehta hai.",
//   },
//   {
//     name: "Rahul Sharma",
//     pic: "https://i.pinimg.com/1200x/b8/82/83/b882836fa749f501aefa935d19e19977.jpg",
//     bio: "Frontend developer who loves clean UI, animations aur thoda sa creative code.",
//   },
//   {
//     name: "Anjali Verma",
//     pic: "https://i.pinimg.com/736x/3e/f3/50/3ef350dc86cc82a092463e5d795654b5.jpg",
//     bio: "UI/UX designer, minimal design aur user experience pe focus karti hoon.",
//   },
//   {
//     name: "Aman Singh",
//     pic: "https://i.pinimg.com/736x/82/a6/f3/82a6f3cf8318a01ece0dd2c36e744260.jpg",
//     bio: "Full stack learner, JavaScript aur backend explore kar raha hoon.",
//   },
//   {
//     name: "Priya Gupta",
//     pic: "https://i.pinimg.com/736x/43/d7/16/43d716925da061a194dc992feb4b34ed.jpg",
//     bio: "Creative thinker, content aur design dono me interest hai.",
//   },
//   {
//     name: "Rohit Kumari",
//     pic: "https://i.pinimg.com/1200x/d5/ca/de/d5cade9fd271a5681c998073354e7f62.jpg",
//     bio: "Tech enthusiast jo naye tools aur frameworks try karta rehta hai.",
//   },
// ];

// const cardsContainer = document.querySelector(".cards");
// const searchInput = document.querySelector("input");

// // 👉 cards render function
// function showUsers(arr) {
//   cardsContainer.innerHTML = ""; // clear old cards

//   arr.forEach((user) => {
//     const card = document.createElement("div");
//     card.className = "card";

//     const img = document.createElement("img");
//     img.src = user.pic;
//     img.className = "bg-img";

//     const blurLayer = document.createElement("div");
//     blurLayer.className = "blurred-layer";
//     blurLayer.style.backgroundImage = `url(${user.pic})`;

//     const content = document.createElement("div");
//     content.className = "content";

//     const h3 = document.createElement("h3");
//     h3.innerText = user.name;

//     const p = document.createElement("p");
//     p.innerText = user.bio;

//     content.appendChild(h3);
//     content.appendChild(p);

//     card.appendChild(img);
//     card.appendChild(blurLayer);
//     card.appendChild(content);

//     cardsContainer.appendChild(card);
//   });
// }

// // ✅ initial render
// showUsers(users);


// let inp = document.querySelector(".inp");
// inp.addEventListener("input", function(){
//     let newUsers = users.filter((user) => {
//         return user.name.startsWith(inp.value)
//     })

//     showUsers(newUsers);
// })


// // sare users show karana
// // filter karna har bar input krne pe
// // show krna filtered users


// GPT Optimized it 

// const users = [
//   {
//     name: "Rahul Sharma",
//     pic: "https://i.pinimg.com/1200x/b8/82/83/b882836fa749f501aefa935d19e19977.jpg",
//     bio: "Frontend developer who loves clean UI, animations aur thoda sa creative code.",
//   },
//   {
//     name: "Anjali Verma",
//     pic: "https://i.pinimg.com/736x/3e/f3/50/3ef350dc86cc82a092463e5d795654b5.jpg",
//     bio: "UI/UX designer, minimal design aur user experience pe focus karti hoon.",
//   },
//   {
//     name: "Aman Singh",
//     pic: "https://i.pinimg.com/736x/82/a6/f3/82a6f3cf8318a01ece0dd2c36e744260.jpg",
//     bio: "Full stack learner, JavaScript aur backend explore kar raha hoon.",
//   },
//   {
//     name: "Priya Gupta",
//     pic: "https://i.pinimg.com/736x/43/d7/16/43d716925da061a194dc992feb4b34ed.jpg",
//     bio: "Creative thinker, content aur design dono me interest hai.",
//   },
//   {
//     name: "Rohit Kumari",
//     pic: "https://i.pinimg.com/1200x/d5/ca/de/d5cade9fd271a5681c998073354e7f62.jpg",
//     bio: "Tech enthusiast jo naye tools aur frameworks try karta rehta hai.",
//   },
// ];

// // 🔹 cache lowercase names (performance)
// users.forEach(u => (u.lowerName = u.name.toLowerCase()));

// const cardsContainer = document.querySelector(".cards");
// const input = document.querySelector(".inp");

// // 🔹 create single card
// function createCard(user) {
//   const card = document.createElement("div");
//   card.className = "card";

//   const img = document.createElement("img");
//   img.src = user.pic;
//   img.className = "bg-img";

//   const blurLayer = document.createElement("div");
//   blurLayer.className = "blurred-layer";
//   blurLayer.style.backgroundImage = `url(${user.pic})`;

//   const content = document.createElement("div");
//   content.className = "content";

//   const h3 = document.createElement("h3");
//   h3.textContent = user.name;

//   const p = document.createElement("p");
//   p.textContent = user.bio;

//   content.append(h3, p);
//   card.append(img, blurLayer, content);

//   return card;
// }

// // 🔹 render users (optimized)
// function renderUsers(list) {
//   cardsContainer.innerHTML = "";

//   const fragment = document.createDocumentFragment();
//   list.forEach(user => fragment.appendChild(createCard(user)));

//   cardsContainer.appendChild(fragment);
// }

// // ✅ initial render
// renderUsers(users);

// // 🔹 live search (case-insensitive)
// input.addEventListener("input", () => {
//   const value = input.value.trim().toLowerCase();

//   if (!value) {
//     renderUsers(users);
//     return;
//   }

//   const filtered = users.filter(user =>
//     user.lowerName.includes(value)
//   );

//   renderUsers(filtered);
// });



// With Debouncing

// =======================
// Dummy Users Data
// =======================
const users = [
  {
    name: "Rahul Sharma",
    pic: "https://i.pinimg.com/1200x/b8/82/83/b882836fa749f501aefa935d19e19977.jpg",
    bio: "Frontend developer who loves clean UI, animations aur thoda sa creative code.",
  },
  {
    name: "Anjali Verma",
    pic: "https://i.pinimg.com/736x/3e/f3/50/3ef350dc86cc82a092463e5d795654b5.jpg",
    bio: "UI/UX designer, minimal design aur user experience pe focus karti hoon.",
  },
  {
    name: "Aman Singh",
    pic: "https://i.pinimg.com/736x/82/a6/f3/82a6f3cf8318a01ece0dd2c36e744260.jpg",
    bio: "Full stack learner, JavaScript aur backend explore kar raha hoon.",
  },
  {
    name: "Priya Gupta",
    pic: "https://i.pinimg.com/736x/43/d7/16/43d716925da061a194dc992feb4b34ed.jpg",
    bio: "Creative thinker, content aur design dono me interest hai.",
  },
  {
    name: "Rohit Kumari",
    pic: "https://i.pinimg.com/1200x/d5/ca/de/d5cade9fd271a5681c998073354e7f62.jpg",
    bio: "Tech enthusiast jo naye tools aur frameworks try karta rehta hai.",
  },
];

// =======================
// Preprocess Data (perf)
// =======================
users.forEach(user => {
  user.searchKey = user.name.toLowerCase();
});

// =======================
// DOM References
// =======================
const cardsContainer = document.querySelector(".cards");
const input = document.querySelector(".inp");

// =======================
// Utility: Debounce
// =======================
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// =======================
// Create Single Card
// =======================
function createCard({ name, pic, bio }) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = pic;
  img.className = "bg-img";

  const blurLayer = document.createElement("div");
  blurLayer.className = "blurred-layer";
  blurLayer.style.backgroundImage = `url(${pic})`;

  const content = document.createElement("div");
  content.className = "content";

  const h3 = document.createElement("h3");
  h3.textContent = name;

  const p = document.createElement("p");
  p.textContent = bio;

  content.append(h3, p);
  card.append(img, blurLayer, content);

  return card;
}

// =======================
// Render Users (Optimised)
// =======================
function renderUsers(list) {
  cardsContainer.innerHTML = "";

  const fragment = document.createDocumentFragment();
  list.forEach(user => fragment.appendChild(createCard(user)));

  cardsContainer.appendChild(fragment);
}

// =======================
// Search Handler
// =======================
function handleSearch() {
  const value = input.value.trim().toLowerCase();

  if (!value) {
    renderUsers(users);
    return;
  }

  const filteredUsers = users.filter(user =>
    user.searchKey.includes(value)
  );

  renderUsers(filteredUsers);
}

// =======================
// Initial Render
// =======================
renderUsers(users);

// =======================
// Events
// =======================
input.addEventListener("input", debounce(handleSearch, 300));


// no users found lagana hai khudse isme 
// Try Yourself and Tag Sir
