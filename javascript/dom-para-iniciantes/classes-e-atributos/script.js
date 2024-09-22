// Adicione a classe ativo a todos os itens do menu
const itemsMenu = document.querySelectorAll(".menu a");
console.log(itemsMenu);
itemsMenu.forEach((item) => {
  item.classList.add("ativo");
  console.log(item.classList);
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itemsMenu.forEach((item) => {
  item.classList.remove("ativo");
});

itemsMenu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
console.log(imgs);
imgs.forEach((item) => console.log(item.hasAttribute("alt")));

// Modifique o href do link externo no menu
const linkExterno = document.querySelector("[href='#dev']");
linkExterno.setAttribute("href", "https://github.com/alencarfreire/");
linkExterno.setAttribute("target", "_blank");
console.log(linkExterno);
