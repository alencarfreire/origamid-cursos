function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  return this.nome + " andou";
};

Pessoa.prototype.nadar = function () {
  return this.nome + " nadou";
};

const andre = new Pessoa("Andre", 28);

console.log(Pessoa.prototype);

const pais = "Brasil";
const cidade = new String("rio");

const listaAnimais = ["Cachorro", "Gato", "Cavalo"];
const lista = document.querySelectorAll("li");
const litaArray = Array.prototype.slice.call(lista);
