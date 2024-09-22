const menu = document.querySelector(".menu");
menu.classList.add("ativo", "novo");
menu.classList.remove("novo");
menu.classList.toggle("ativo");
menu.classList.toggle("novo");

if (menu.classList.contains("azul")) {
  menu.classList.replace("azul", "verde");
} else {
  menu.classList.add("verde");
}

console.log(menu.classList);
menu.className = menu.className + " nao";
console.log(menu.className);
console.log(menu.classList);

const animais = document.querySelector(".animais");
console.log(animais.attributes);

const img = document.querySelectorAll("img");

img.forEach((item) => console.log(item.getAttribute("src")));
img.forEach((item) => item.setAttribute("alt", `animais hehehehe`));
img.forEach((item) => console.log(item.getAttribute("alt")));
const imgF = document.querySelector("img");
console.log(imgF.hasAttribute("alt"));
imgF.removeAttribute("alt");
console.log(imgF.hasAttribute("alt"));
