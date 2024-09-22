const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);

const allSections = document.getElementsByTagName("section");
console.log(allSections);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linksInternos = document.querySelector('[href^="#"]');
console.log(linksInternos);

const animaisIMG = document.getElementsByClassName("animais");
console.log(animaisIMG);

const gridSectionHTML = document.getElementsByClassName("grid-section");

const gridSectionNODE = document.querySelectorAll(".grid-section");

console.log(gridSectionHTML[0]);
console.log(gridSectionNODE[0]);

primeiraUl.classList.add("grid-section");

gridSectionNODE.forEach((item, index) => {
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);
arrayGrid.forEach((item, index) => {
  console.log(index);
});
