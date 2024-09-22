function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const honda = new Carro("honda", 2000);

function Carro2(marca, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2("mazda", 4000);
