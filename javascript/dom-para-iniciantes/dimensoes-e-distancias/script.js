// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraIMG = document.querySelector("img");
const primeiraIMGTop = primeiraIMG.offsetTop;
console.log(primeiraIMGTop);
// Retorne a soma da largura de todas as imagens
const todasIMG = document.querySelectorAll("img");
function somarImagens() {
  let soma = 0;
  todasIMG.forEach((img) => {
    soma = soma + img.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somarImagens();
};
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const allLinks = document.querySelectorAll("a");
console.log(allLinks);
console.log(allLinks);
allLinks.forEach((link) => {
  let linkLargura = link.offsetWidth;
  let linkAltura = link.offsetHeight;
  if (linkLargura >= 48 && linkAltura >= 48) {
    console.log(link, "Possui acessibilidade");
  } else {
    console.log(link, "Não possui boa acessibilidade");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector(".menu");
console.log(window.innerWidth);
if (window.matchMedia("(max-width: 720px)").matches) {
  menu.classList.add("menu-mobile");
}
