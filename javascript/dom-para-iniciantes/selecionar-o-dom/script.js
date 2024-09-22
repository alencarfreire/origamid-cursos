const allIMG = document.querySelectorAll("img");
console.log(allIMG);

const filterIMG = document.querySelectorAll('[src^="img/imagem"]');
console.log(filterIMG);

const filterLinks = document.querySelectorAll('[href^="#"]');
console.log(filterLinks);

const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);
const ultimoP = paragrafos[--paragrafos.length];
console.log(ultimoP);
