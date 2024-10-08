// Transforme o objeto abaixo em uma Constructor Function
function Pessoa() {
  (this.nome = "Nome pessoa"),
    (this.idade = 0),
    (this.andar = function () {
      console.log(this.nome + " andou");
    });
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementsList = document.querySelectorAll(seletor);
  this.elements = elementsList;
  this.addClass = function (classe) {
    elementsList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementsList.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}

const li = new Dom("li");
li.addClass("teste");
li.addClass("haha");
li.removeClass("teste");
