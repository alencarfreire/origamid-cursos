// const lista = document.querySelector(".animais-lista");

// console.log(lista.parentElement);
// console.log(lista.nextElementSibling);
// console.log(lista.previousElementSibling);
// console.log(lista.children[--lista.children.length]);

// console.log(lista.childNodes);
// console.log(lista.previousSibling);

// const animais = document.querySelector(".animais");
// const contato = document.querySelector(".contato");
// const titulo = contato.querySelector(".titulo");
// const mapa = contato.querySelector(".mapa");
// // contato.replaceChild(mapa, titulo);

// const novoH1 = document.createElement("h1");
// novoH1.innerText = "Novo Título";
// novoH1.classList.add("titulo");
// mapa.appendChild(novoH1);

// const cloneTitulo = titulo.cloneNode(true);
// mapa.appendChild(cloneTitulo);

// Duplique o menu e adicione ele em copy

const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");
console.log(menu);
const menuClone = menu.cloneNode(true);
copy.appendChild(menuClone);
// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector(".faq");
console.log(faq);
const primeiroDT = faq.firstElementChild;
console.log(primeiroDT);

// Selecione o DD referente ao primeiro DT
console.log(primeiroDT.nextElementSibling);
// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector(".animais");
faq.innerHTML = animais.innerHTML;
