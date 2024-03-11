console.log("***** SELECTORS *****");

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

const h1 = document.getElementById("header");
console.log(h1);
h1.style.color = "white";
h1.style.background = "red";

//* Example 2

const myInput = document.getElementById("input");
const button = document.getElementById("btn");
button.style.background = "black";
button.style.color = "white";
button.style.width = "8rem";
button.style.border = "none";
button.style.borderRadius = "12px";
button.style.padding = "1rem";
button.style.fontSize = "1.2rem";
myInput.style.padding = "1rem";

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const list = document.getElementsByTagName("li");
console.log(list);
list[2].style.color = "red";
const elementFour = list.item(3);
elementFour.style.color = "blue";
elementFour.textContent = "John Instr";

list[1].innerText = "Eypes";

// list[0].innerHTML = "<a href='https://www.google.com'>Google'a Git</a>";

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const myList = document.getElementsByClassName("list");
console.log(myList);
console.log(myList[0].innerText);

//? Array.from()
const myListArray = Array.from(myList);
console.log(myListArray);
myListArray.forEach((item) => console.log(item.innerText));

//? Spread
console.log([...myList]);
[...myList].forEach((item) => console.log(item.innerText));

[...myList].forEach((item) => (item.style.color = "pink"));

console.clear();

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//? 1- queryselector() etiket secebilir.
const myLst = document.querySelector("li");
console.log(myLst.innerText);
myLst.style.color = "yellowgreen";

//? 2- queryselector() class secebilir

const itemList = document.querySelector(".item-list");
itemList.style.background = "grey";

//? 3- queryselector() id secebilir
const input = document.querySelector("#input");
console.log(input.value);

document.querySelector("#btn").style.cursor = "pointer";

//? 4- queryselector() ile CSS deki gibi secim yapilabilir.

const itemH2 = document.querySelector(".item-list h2");
itemH2.style.color = "purple";

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================

const lists = document.querySelectorAll("ul li");
console.log(lists);

// lists.forEach((li) => console.log(li.innerText));

console.log(
  document.querySelectorAll("section ul li:nth-child(3)")[0].innerText
);
