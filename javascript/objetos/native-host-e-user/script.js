// Liste 5 objetos nativos
console.log(Object.prototype);
console.log(Boolean.prototype);
console.log(String.prototype);
console.log(Number.prototype);
console.log(Array.prototype);

// Liste 5 objetos do browser
console.log("---------------------");
console.log(HTMLCollection.prototype);
console.log(NodeList.prototype);
console.log(Window.prototype);
console.log(Element.prototype);
console.log(HTMLLIElement.prototype);

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.webkitHidden !== "undefined") {
  console.log("Existe");
} else {
  console.log("Não existe");
}

if (typeof document.webkitVisibilityState !== "undefined") {
  console.log("Existe");
} else {
  console.log("Não existe");
}
