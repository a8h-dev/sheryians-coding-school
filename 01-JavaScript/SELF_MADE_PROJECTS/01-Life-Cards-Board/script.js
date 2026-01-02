let form = document.querySelector("form");
let title = document.querySelector("#title");
let des = document.querySelector("#des");
let img = document.querySelector("#img");
let category = document.querySelector("#category");
let priority = document.querySelector("#priority");
let cardsContainer = document.querySelector(".cardsContainer");
let btnAdd = document.querySelector("#addNewCard");
let btnClose = document.querySelector(".btnClose")
let noCards = document.querySelector("#noCards");

btnAdd.addEventListener("click", function(){
    form.style.display = "inline-block";
    btnAdd.style.display = "none";
})
btnClose.addEventListener("click", function(){
    form.style.display = "none";
    btnAdd.style.display = "inline-block";
})

form.addEventListener("submit", function(dets){
    dets.preventDefault();
    
    let card = document.createElement("div");
    card.classList.add("card");
    let imgCon = document.createElement("div");
    imgCon.id = "imgContainer";
    let imgCreate = document.createElement("img");
    imgCreate.setAttribute(
        "src",
        img.value
    )
    imgCreate.setAttribute(
        "alt",
        "BROKEN"
    )
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let batchCon = document.createElement("div");
    batchCon.classList.add("batchCon");
    let categoryCreate = document.createElement("h3");
    categoryCreate.classList.add("category");
    let priorityCreate = document.createElement("h3");
    priorityCreate.classList.add("priority");

    imgCon.appendChild(imgCreate);
    card.appendChild(imgCon);
    card.appendChild(h1);
    card.appendChild(p);
    batchCon.appendChild(categoryCreate);
    batchCon.appendChild(priorityCreate);
    card.appendChild(batchCon);
    cardsContainer.prepend(card);

    h1.textContent = title.value;
    p.textContent = des.value;
    categoryCreate.textContent = category.value;
    priorityCreate.textContent = priority.value;

    form.reset();
    form.style.display = "none";
    btnAdd.style.display = "inline-block";

    noCards.style.display = "none";
})