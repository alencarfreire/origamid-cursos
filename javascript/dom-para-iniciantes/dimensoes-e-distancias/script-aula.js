const listaAnimais = document.querySelector(".animais-lista");

const height = listaAnimais.scrollHeight;
const animaisTopo = listaAnimais.offsetTop;
console.log(height);

const primeiroH2 = document.querySelector("h2");
console.log(primeiroH2.offsetLeft);

const rect = primeiroH2.getBoundingClientRect();
console.log(rect.top);

const small = window.matchMedia("(max-width: 600px").matches;

if (small) {
  console.log("usuario mobile");
} else {
  console.log("usuario deskto");
}
