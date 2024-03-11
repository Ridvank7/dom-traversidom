console.log("***** CREATE NODE *****");

//? Yeni bir P elementi olusturalim
const newP = document.createElement("p");
newP.id = "new-par";
const text = document.createTextNode("This is a new p element");
newP.appendChild(text);
console.log(newP);

const h2 = document.querySelector(".item-list h2");
h2.after(newP);

const newDiv = document.createElement("div");
const h1 = document.querySelector("#header");
h1.after(newDiv);
const h22 = document.createElement("h2");
h22.setAttribute("class", "john");
h22.setAttribute("id", "newId");
const text2 = document.createTextNode("Hello John");
h22.appendChild(text2);
newDiv.appendChild(h22);

//? getAttribute()
console.log(newP.getAttribute("id"));
console.log(h22.getAttribute("class"));

//? classList
console.log(newP.classList.contains("par"));
console.log(h22.classList.contains("john"));
newP.classList.add("new-class");
console.log(newP);
newP.classList.remove("new-class");
